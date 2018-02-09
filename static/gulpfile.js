// 引入 gulp
var gulp         = require('gulp');
var fs           = require('fs');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var rev          = require('gulp-rev');
var del          = require('del');
var glob         = require('glob');
var notify       = require('gulp-notify');
var gutil        = require('gulp-util');
var base64       = require('gulp-base64');
var watch        = require('gulp-watch');
var replace      = require('gulp-replace');
var minCss       = require('gulp-minify-css');
var browserify   = require('gulp-browserify');
var co           = require('co');
var OSS          = require('ali-oss')


var tpl = {
    illegal: /(alert|console\.(log|error|warn|info))\(/g
};


/*
 *
 * read json
 *
 * */
function readJson(fileName){

    var json = JSON.parse(fs.readFileSync(fileName));

    return json;
}

/*
 *
 * */
function CdnImg(callback) {

    return gulp.src('./images/**/*')
        .pipe(rev())
        .pipe(gulp.dest('./output/images'))
        .pipe(rev.manifest('img.json', {
            base: 'output',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('./output/images'))
        .on('finish', callback);
}

/*
 *
 * base64
 *
 * */
function ImgIncodeBybase64(callback){

    glob('./dest/css/*.css', {}, function (err, files) {

        if(err){
            return gutil.log(gutil.colors.red('ERROR: in imgIncodeBybase64!'));
        }

        return gulp.src(files)
            .pipe(base64({
                extensions: [/^["']?(\.\/)?\.\.\/\.\.\/images\/(.*?).(png|jpg|gif)["']?$/i],
                maxImageSize: 8*1024, // bytes
                debug: false
            }))
            .pipe(gulp.dest('./dest/css'))
            .on('finish', callback);
    });
}

/*
 *
 * */
function MinCss(callback) {

    return gulp.src('./dest/css/**/*.css')
        .pipe(minCss())
        .pipe(gulp.dest('./dest/css'))
        .on('finish', callback);
}

/*
 *
 * */
function CdnCss(callback) {

    return gulp.src('./dest/css/*.css')
        .pipe(rev())
        .pipe(gulp.dest('./output/css'))
        .pipe(rev.manifest('css.json', {
            base: 'output',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('./output/css'))
        .on('finish', callback);
}

/*
 * replaceUrl
 * */
function ReplaceUrl(callback){

    var imgJson  = readJson('./output/img.json'),
        imgValid =  [];

    return gulp.src('./dest/css/*.css')
        .pipe(replace(/url\(["']?(.\/)?\.\.\/\.\.\/images\/(.*?)["']?\)/gi, function(match, p0, p1) {

            if(!imgJson[p1])
                gutil.log(gutil.colors.red('ERROR: '+p1 + ' is missing'));
            else
                imgValid.push(imgJson[p1]);

            return 'url('+ imgCdn + imgJson[p1] + ')';
        }))
        .pipe(gulp.dest('./dest/css/'))
        .on('finish', function(){

            glob('./output/images/*', {}, function (err, files) {
                files.forEach(function(f){

                    if(imgValid.indexOf(f.split('/').pop()) === -1)
                        fs.unlinkSync(f);
                })
            })

            callback()
        });
}

/*
 * replaceUrl
 * */
function ReplaceJsUrl(callback){

    var jsJson  = readJson('./output/js.json');

    // 因为路由都会写在route中，所以只处理这个路由
    return gulp.src('./output/js/main-*.js')
        .pipe(replace(/["'](.\/)?dest\/js\/(.*?\.js)["']/gi, function(match, p0, p1, p2) {

            if(!jsJson[p1])
                gutil.log(gutil.colors.red('ERROR: '+p1 + ' is missing'));

            return match.replace('dest/js/', jsCdn).replace(p1, jsJson[p1])
        }))
        .pipe(gulp.dest('./output/js'))
        .on('finish', callback);
}
/*
 * replaceUrl
 * */
function ReplaceCssUrl(callback){

    var cssJson  = readJson('./output/css.json');

    // 因为路由都会写在route中，所以只处理这个路由
    return gulp.src('./output/js/main-*.js')

        .pipe(replace(/["'](.\/)?dest\/css\/(.*?\.css)["']/gi, function(match, p0, p1, p2) {

            if(!cssJson[p1])
                gutil.log(gutil.colors.red('ERROR: '+p1 + ' is missing'));

            return match.replace('dest/css/', cssCdn).replace(p1, cssJson[p1])
        }))
        .pipe(gulp.dest('./output/js'))
        .on('finish', callback);
}

/*
 * replaceUrl
 * */
function ReplaceHtmlCssUrl(callback){

    var cssJson  = readJson('./output/css.json');

    return gulp.src('./output/**/*.html')

        .pipe(replace(/href=["']?(.\/)?dest\/css\/(.*?\.css)["']/gi, function(match, p0, p1, p2) {

            if(!cssJson[p1])
                gutil.log(gutil.colors.red('ERROR: '+p1 + ' is missing'));

            return match.replace('dest/css/', cssCdn).replace(p1, cssJson[p1])
        }))
        .pipe(gulp.dest('./output'))
        .on('finish', callback);
}

/*
 * html jsURL
 * */
function ReplaceHtmlJsUrl(callback){

    var jsJson  = readJson('./output/js.json');

    return gulp.src('./output/**/*.html')

        .pipe(replace(/src=["']?(.\/)?dest\/js\/(.*?\.js)["']/gi, function(match, p0, p1, p2) {

            if(!jsJson[p1])
                gutil.log(gutil.colors.red('ERROR: '+p1 + ' is missing'));

            return match.replace('dest/js/', jsCdn).replace(p1, jsJson[p1])
        }))
        .pipe(gulp.dest('./output'))
        .on('finish', callback);
}

/*
 * 合并，压缩文件
 * */
function CompressJs(callback) {

    return gulp.src('./dest/js/*.js')
        .pipe(uglify({
            mangle: false
        }))
        .pipe(gulp.dest('./dest/js'))
        .on('finish', callback);
}

/*
 *
 * */
function CdnJs(callback) {

    return gulp.src('./dest/js/*.js')
        .pipe(rev())
        .pipe(gulp.dest('./output/js'))
        .pipe(rev.manifest('js.json', {
            base: 'output',
            merge: true // merge with the existing manifest (if one exists)
        }))
        .pipe(gulp.dest('./output/js'))
        .on('finish', callback);
}

/*
 *
 * */
function MoveHtml(callback) {

    return gulp.src(['./!(component)*/**/*.html', './*.html'])
        .pipe(gulp.dest('output'))
        .on('finish', callback);
}

/*
 *
 * */
function Clean(callback) {

    del.sync('./output');
    callback()
}


function _BuildJs(src, cb){

    return gulp.src(src)
        .pipe(browserify({
            insertGlobals : false,
            debug : false,
            transform: [
                [
                    "file2ify",
                    {
                        "extension": [
                            "html",
                            "css",
                            "json",
                            "ejs"
                        ]
                    }
                ]
            ]
        }))
        .pipe(gulp.dest(function (f) {
            return 'dest/js';
        }))
        .on('finish', cb);
}

function CompileCss(callback) {

    return gulp.src('app/src/**/[!_]?*.scss')
        .pipe(sass())
        .pipe(gulp.dest(function (f) {
            f.dirname = 'css';
            return 'dest/css';
        }))
        .on('finish', callback);
}

function CompileJs(callback) {

    glob('app/src/**/[!_]?*.js', {}, function (err, files) {

        files.forEach(function(f){

            gutil.log(gutil.colors.cyan(`Build ${f} Is Ok!`));

            _BuildJs(f, callback);
        })
    })
}

/*
 *
 * */
function WatchCss(callback){

    watch('app/src/**/*.less', function (event) {

        var src = event.path.toString().split(event.cwd.toString())[1].replace(/\\/g, '/'),
            aPath    = src.split('/'),
            fileName = aPath.pop(),
            sPath    = aPath.join('/');

        gutil.log(gutil.colors.cyan(`${sPath + '/' + fileName}`));

        if(/^_/g.test(fileName))
            sPath += '/[!_]?*.scss';
        else
            sPath += '/' + fileName;

        return gulp.src('./' + sPath)
            .pipe(sass())
            .pipe(gulp.dest(function (f) {
                f.dirname = 'dest/css';
                return 'dest/css';
            }))
    });
    callback()
}

/*
 *
 * */
function WatchJs(callback){

    watch('app/src/**/*.js', function (event) {

        var src = event.path.toString().split(event.cwd.toString())[1].replace(/\\/g, '/'),
            aPath    = src.split('/'),
            fileName = aPath.pop(),
            sPath    = aPath.join('/');

        gutil.log(gutil.colors.cyan(`${sPath + '/' + fileName}`));

        if(/^_/g.test(fileName))
            sPath += '/[!_]?*.js';
        else
            sPath += '/' + fileName;

        _BuildJs('./' + sPath, callback);

    });
}



// register command
gulp.task(WatchCss);
gulp.task(WatchJs);
gulp.task(CompileCss);
gulp.task(CompileJs);

gulp.task(CdnImg);
gulp.task(CdnCss);
gulp.task(CdnJs);

gulp.task(MinCss);
gulp.task(CompressJs);

gulp.task(ImgIncodeBybase64);

gulp.task(ReplaceUrl);
gulp.task(ReplaceJsUrl);
gulp.task(ReplaceCssUrl);
gulp.task(ReplaceHtmlCssUrl);
gulp.task(ReplaceHtmlJsUrl);

gulp.task(MoveHtml);
gulp.task(Clean);

/*
 * dev for gulp
 * 启动之后会
 * 1, common下面的文件生成到dest对应的目录下，js > js; css > css
 * 2, 将src下面的文件统一生成到dest对应的目录下，js > js; css > css
 *
 * 步骤一，gulp build命令默认是构建
 * 不加参数          是对应的测试环境环境（不加参数）；
 * 加参数 --env test 是对应的线上测试环境（cn）
 * 加参数 --env pro  是对应的线上生产环境
 *
 * 步骤二，gulp p 命令是上传命令
 * 不加参数           不会上传，直接退出
 * 加参数 --env test 将静态资源上传到线上测试环境（cn）
 * 加参数 --env pro  将静态资源上传到线上生产环境
 * */
gulp.task('default', gulp.series('CompileJs',  'CompileCss', 'WatchCss','WatchJs'));

gulp.task('build', gulp.series('Clean', 'MoveHtml', 'CdnImg','CompileCss', 'ImgIncodeBybase64', 'ReplaceUrl', 'MinCss', 'CdnCss',
    'CompileJs', 'CompressJs', 'CdnJs', 'ReplaceJsUrl', 'ReplaceCssUrl', 'ReplaceHtmlCssUrl', 'ReplaceHtmlJsUrl'));



