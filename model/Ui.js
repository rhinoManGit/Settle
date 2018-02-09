/**
 * Created by Administrator on 2017/9/20 0020.
 */
var JsAndCss  = require('./JsAndCss');
var Common    = require('./Common');
var strToHtml = require('./../tools/htmlStrTohtml');

function Ui(obj){

    var that = this;

    this['title']     = obj.title || '极课大数据-UI组件';

    this['label']     = obj.label || 'index';

    this['pageName']  = obj.pageName || 'index';

    // 组件左菜单
    this['leftMenu']  = obj.leftMenu || {};

    // 组件继承
    this['core']  = obj.core || {};

    if(obj.core && !obj.core['replaced']){

        this.core.list.forEach(function (item) {

            item['code'] = strToHtml(item.code || '');
        })

        obj.core['replaced'] = true;
    }

    /*
    * 添加地址引用
    * */
    JsAndCss.call(this);
}

// 继承公共属性: config
Ui.prototype = new Common();

module.exports = Ui;

