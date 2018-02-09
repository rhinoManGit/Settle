/**
 * Created by Administrator on 2017/9/18 0018.
 */
var fs          = require('fs');
var server      = require('./../service/');
var sendEmail   = require('./../tools/sendEmail');
var config      = require('./../config').config();
var markdown    = require("markdown").markdown;
var uiLeftMenu  = require('../locale/ui.json');
var grid        = require('../locale/grid');
var button      = require('../locale/button');
var input       = require('../locale/input');
var radio       = require('../locale/radio');
var checkbox    = require('../locale/checkbox');
var switchBtn   = require('../locale/switch');
var select      = require('../locale/select');
var autoComplete= require('../locale/autoComplete');
var slider      = require('../locale/slider');
var datePicker  = require('../locale/datePicker');
var timePicker  = require('../locale/timePicker');
var cascader    = require('../locale/cascader');
var transfer    = require('../locale/transfer');
var inputNumber = require('../locale/inputNumber');
var rate        = require('../locale/rate');
var upload      = require('../locale/upload');
var colorPicker = require('../locale/colorPicker');
var form        = require('../locale/form');
var alert       = require('../locale/alert');
var card        = require('../locale/card');
var message     = require('../locale/message');
var notice      = require('../locale/notice');
var modal       = require('../locale/modal');
var avatar      = require('../locale/avatar');
var badge       = require('../locale/badge');
var progress    = require('../locale/progress');
var collapse    = require('../locale/collapse');
var timeline    = require('../locale/timeline');
var tag         = require('../locale/tag');
var tooltip     = require('../locale/tooltip');
var UiModel     = require('./../model/Ui');

function UI(){}

var Action = UI.prototype;

Action.index = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu
    }

    var o = new UiModel(data);

    res.render('ui-index', o);

}

/*
*
*
* */
Action.tooltip = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: tooltip,
        label: 'tooltip'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.tag = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: tag,
        label: 'tag'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.timeline = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: timeline,
        label: 'timeline'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}
/*
*
*
* */
Action.collapse = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: collapse,
        label: 'collapse'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}
/*
*
*
* */
Action.badge = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: badge,
        label: 'badge'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.avatar = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: avatar,
        label: 'avatar'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}
/*
*
*
* */
Action.modal = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: modal,
        label: 'modal'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.progress = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: progress,
        label: 'progress'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.notice = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: notice,
        label: 'notice'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.card = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: card,
        label: 'card'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.message = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: message,
        label: 'message'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
*
*
* */
Action.alert = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: alert,
        label: 'alert'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
* 栅格
*
* */
Action.grid = function(req, res, next){

    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: grid,
        label: 'grid'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
* 按钮
*
* */
Action.button = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: button,
        label: 'button'
    }

    var o = new UiModel(data);

    console.log(o.core.list[1].code);

    res.render('component/tpl', o);

}

/*
* 字体
*
* */
Action.font = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        //core: button,
        label: 'font'
    }

    var o = new UiModel(data);

    res.render('component/font', o);

}

/*
* 皮肤
*
* */
Action.skin = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件-栅格',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        //core: button,
        label: 'skin'
    }

    var o = new UiModel(data);

    res.render('component/skin', o);

}

/*
* 输入框
*
* */
Action.input = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: input,
        label: 'input'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
* 单选框
*
* */
Action.radio = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: radio,
        label: 'radio'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);

}

/*
* 多选框
*
* */
Action.checkbox = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: checkbox,
        label: 'checkbox'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 多选框
*
* */
Action.switch = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: switchBtn,
        label: 'switch'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 下拉选择
*
* */
Action.select = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: select,
        label: 'select'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 自动补全
*
* */
Action.autocomplete = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: autoComplete,
        label: 'autocomplete'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 滑块
*
* */
Action.slider = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: slider,
        label: 'slider'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 日期选择器
*
* */
Action.datepicker = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: datePicker,
        label: 'datepicker'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 时间选择器
*
* */
Action.timepicker = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: timePicker,
        label: 'timepicker'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
* 级连选择器
*
* */
Action.cascader = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: cascader,
        label: 'cascader'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}
/*
*
*
* */
Action.transfer = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: transfer,
        label: 'transfer'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.inputnumber = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: inputNumber,
        label: 'inputnumber'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.rate = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: rate,
        label: 'rate'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.upload = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: upload,
        label: 'upload'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.colorpicker = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: colorPicker,
        label: 'colorpicker'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

/*
*
*
* */
Action.form = function(req, res, next){


    var data  = {
        title: '极课大数据-ui组件',
        pageName: 'ui-index',
        leftMenu: uiLeftMenu,
        core: form,
        label: 'form'
    }

    var o = new UiModel(data);

    res.render('component/tpl', o);
}

module.exports = new UI();