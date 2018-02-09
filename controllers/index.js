/**
 * Created by Administrator on 2017/9/18 0018.
 */
var fs          = require('fs');
var server      = require('./../service/');
var sendEmail   = require('./../tools/sendEmail');
var config      = require('./../config').config();
var Excel       = require('exceljs');
var markdown    = require("markdown").markdown;
var CodeStandardModel = require('./../model/CodeStandard');
var uiLeftMenu  = require('../locale/ui.json');
var UiModel     = require('./../model/Ui');

function Index(){}

var Action = Index.prototype;

Action.index = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu
    }

    var o = new UiModel(data);

    res.render('index', o);

}

/*
 * 获取当天的代理
 *
 * */
Action.getagent = function(req, res, next){

    /*
    * from - The email address of the sender. All email addresses can be plain ‘sender@server.com’ or formatted ’“Sender Name” sender@server.com‘, see Address object for details
    * to - Comma separated list or an array of recipients email addresses that will appear on the To: field
    * cc - Comma separated list or an array of recipients email addresses that will appear on the Cc: field
    * bcc - Comma separated list or an array of recipients email addresses that will appear on the Bcc: field
    * subject - The subject of the email
    * text - The plaintext version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘/var/data/…’})
    * html - The HTML version of the message as an Unicode string, Buffer, Stream or an attachment-like object ({path: ‘http://…‘})
    * attachments - An array of attachment objects (see Using attachments for details). Attachments can be used for embedding images as well.
    *
    * */

    var getAgentHandle = async function () {

        try{
            var data = await server.getAgentList();

            var preDate      = (new Date(+new Date - 24 * 60 * 60 * 1000)),
                sDate        = '[' + preDate.getFullYear() + '-' + (preDate.getMonth() - (-1)) + '-' + preDate.getDate() + ']';

            /*
            * 写入Excel
            * */
            var workbook = new Excel.stream.xlsx.WorkbookWriter({
                filename: './cache/agentlist.xlsx'
            });

            var worksheet = workbook.addWorksheet('Sheet');

            worksheet.columns = [
                { header: '姓名',     key: 'name' },
                { header: '企业名称', key: 'company' },
                { header: '电话',     key: 'phone' },
                { header: '邮箱',     key: 'email' },
                { header: '时间',     key: 'createTime' },
                { header: '备注',     key: 'remark' }
            ]

            for(let i in data)
                worksheet.addRow(data[i]).commit();

            workbook.commit();

            /*
            * 发送邮件
            * */
            var aToAddresses = ['wangduo@fclassroom.com'];
            // 抄送
            var aCcAddresses = ['wangduo@fclassroom.com'];

            var account = {
                host   : 'smtp.exmail.qq.com',
                user   : config.Email_Authorization_user,
                pass   : config.Email_Authorization_code,
                from   : '<' + config.Email_Authorization_user + '>',
                to     : aToAddresses,
                cc     : aCcAddresses,
                subject: sDate + '官网中录入的代理商统计列表',
                text   : '',
                html   : '你好 马予炜、浦炯晔：<br\> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下面是' + sDate + '期间录入的代理商的列表。<br\>见附件，请查收！ 谢谢',
                attachments:
                    [
                        {
                            filename: sDate + '.xlsx',
                            path: './cache/agentlist.xlsx' // stream this file
                        }
                    ]
                }

            // 发邮件
            sendEmail(account, function(err, info){

                if(err) throw (err);

                res.send(JSON.stringify(info));
            });
        }catch(e){
            next(e);
        }
    }

    getAgentHandle();
}

/*
* 代码规范
* */
Action.codestandard = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard', codeStandardModel);
}

/*
 * 代码规范 js
 * */
Action['codestandard-list'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard-list', codeStandardModel);
}

/*
 * 代码规范 js
 * */
Action['codestandard-js'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard-js', codeStandardModel);
}
/*
 * 代码规范 -js-next
 * */
Action['codestandard-js-next'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard-js-next', codeStandardModel);
}
/*
 * 代码规范 -css
 * */
Action['codestandard-css'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard-css', codeStandardModel);
}
/*
 * 代码规范-html
 * */
Action['codestandard-html'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范'
    }

    var codeStandardModel = new CodeStandardModel(o);

    res.render('code-standard-html', codeStandardModel);
}

/*
 * 字体图标
 * */
Action['icon-template'] = function(req, res, next){

    var o = {
        pageName: 'codeStandard',
        title: '极课前端代码规范',
        tab: "icon"
    }

    res.render('icon-template', o);
}


module.exports = new Index();