$(function () {

    FastClick.attach(document.body);
            
    // 全局组件
    var filter = [
                    {
                        name: '遮阳伞',
                        selected: false,
                        style: [
                            {name: '',
                                color: []}
                            ]
                    },
                    {
                        name: '藏门帘',
                        selected: true,
                        style: [
                        {
                            name: '单门',
                            type: 'dan-men',
                            selected: true,
                            // 主图
                            figure:[
                                {color: '蓝色', selected: false, url: './img/dan-zhutu-blue.png'},
                                {color: '绿色', selected: true, url: './img/dan-zhutu-green.png'},
                                {color: '黄色', selected: false, url: './img/dan-zhutu-yellow.png'},
                                {color: '红色', selected: false, url: './img/dan-zhutu-red.png'},
                                {color: '其他', selected: false, url: './img/dan-zhutu-other.png'}
                            ],
                            // 框子
                            color: [
                                {color: '蓝色', selected: false, url: './img/biankua-blue.png'},
                                {color: '绿色', selected: true, url: './img/biankua-green.png'},
                                {color: '黄色', selected: false, url: './img/biankua-yellow.png'},
                                {color: '红色', selected: false, url: './img/biankua-red.png'},
                                {color: '其他', selected: false, url: './img/biankua-other.png'}
                                ],
                            // 边花
                            corner:[
                                {color: '蓝色', selected: false, url: './img/bianhua-blue.png'},
                                {color: '绿色', selected: true, url: './img/bianhua-green.png'},
                                {color: '黄色', selected: false, url: './img/bianhua-yellow.png'},
                                {color: '红色', selected: false, url: './img/bianhua-red.png'},
                                {color: '其他', selected: false, url: './img/bianhua-other.png'}
                            ],
                        },
                        {
                            name: '双门',
                            selected: false,
                            type: 'shuang-men',
                            color: [
                                {color: '蓝色', selected: false, url: './img/shuangmen-blue.png'},
                                {color: '绿色', selected: false, url: './img/shuangmen-green.png'},
                                {color: '黄色', selected: false, url: './img/shuangmen-yellow.png'},
                                {color: '红色', selected: false, url: './img/shuangmen-red.png'},
                                {color: '其他', selected: false, url: './img/shuangmen-other.png'}
                            ]
                        },
                        {
                            name: 'T门',
                            type: 't-men',
                            selected: false,
                            color: [
                                {color: '蓝色', selected: false, url: './img/t-blue.png'},
                                {color: '绿色', selected: false, url: './img/t-green.png'},
                                {color: '黄色', selected: false, url: './img/t-yellow.png'},
                                {color: '红色', selected: false, url: './img/t-red.png'},
                                {color: '其他', selected: false, url: './img/t-other.png'}
                            ]
                        },
                        {
                            name: '十字门',
                            type: 'shizi-men',
                            selected: false,
                            color: [
                                {color: '蓝色', selected: false, url: './img/shizi-blue.png'},
                                {color: '绿色', selected: false, url: './img/shizi-green.png'},
                                {color: '黄色', selected: false, url: './img/shizi-yellow.png'},
                                {color: '红色', selected: false, url: './img/shizi-red.png'},
                                {color: '其他', selected: false, url: './img/shizi-other.png'}
                            ]
                        }
                    ]},
                    {
                        name: '遮阳伞',
                        selected: false,
                        style: [
                        {name: '',
                            color: []}
                    ]},
                    {
                        name: '遮阳伞',
                        selected: false,
                        style: [
                        {name: '',
                            color: []}
                    ]}
                ];

    var tpl = {
        'dan-men'   : 'danmen',
        'shuang-men': 'shuangmen',
        't-men'     : 'tmen',
        'shizi-men' : 'shizimen'
    }


    /*
    * 渲染母板
    *
    * */
    function renderBg(type) {
        console.log(tpl[type]);

        document.getElementById('J-mask').className = 'mask ' + tpl[type];
    }

    var app = new Vue({
        el: '#app',
        data: {
            // 过滤
            filterShow: false,
            filter: filter
        },
        components: {
            //Category : Category
        },
        mounted: function () {
          // 根据当前选中的状态来确定母板

        },
        methods: {
            chooseItem: function (index) {

                var that = this;

                for(var i =0; that.filter[i]; i++)
                    that.filter[i].selected = false;

                that.filter[index].selected = true;

                that.outputFilterImg();
            },
            chooseStyle: function (index, j) {

                var that = this,
                    style = that.filter[index].style;

                for(var i =0; style[i]; i++)
                    style[i].selected = false;

                style[j].selected = true;

                that.outputFilterImg();
            },
            chooseColor: function (index, j, i) {

                var that = this,
                    color = that.filter[index].style[j].color;

                for(var k =0; color[k]; k++)
                    color[k].selected = false;

                color[i].selected = true;

                that.outputFilterImg();

                that.filterShow = false;
            },
            filterToggle:function(){
                this.filterShow = !this.filterShow;
            },
            outputFilterImg: function () {

                var that = this;
                    f = this.filter;

                for (var i = 0; f[i]; i++){

                    if(f[i].selected){
                        var style = f[i].style;

                        for(var j = 0; style[j]; j++){
                            if(style[j].selected){
                                var color = style[j].color;

                                for(var k = 0; color[k]; k++){

                                    if(color[k].selected){
                                        // 渲染门框
                                        document.getElementById('J-frame').src = color[k].url;
                                        // 渲染母板
                                        renderBg(style[j].type);

                                        return;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },

        created: function () {
             // `this` 指向 vm 实例
             console.log('a is: ' + this.a)
        }
    })

    var initCanvas = function () {

        var iw = parseInt(window.innerWidth * .8, 10);
        var iH = parseInt(window.innerHeight, 10) -
            $('.J-settle-title').height() - $('.J-panel').height() - $('.J-menu').height();

        var canvas=document.getElementById('J-settle'),
            mask = $('#J-mask');

        canvas.width = iw;
        canvas.height = iH;

        mask.css({
            'height': iH,
            'width': iw,
            'margin-top': -iH - 7
        })

        return {
            canvas: canvas,
            w: iw,
            h: iH
        };
    };

    var o = initCanvas(),
        canvas = o.canvas,
        iW = o.w,
        iH = o.h;

    var eImg = document.getElementById('J-frame');


    eImg.onload = function () {
        console.log('change img');

        // 画图
        var ctx = canvas.getContext("2d");

        // 画框子
        ctx.drawImage(eImg, 0, 0, iW, iH);
    }

})