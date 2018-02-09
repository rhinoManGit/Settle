/*
*
* */
module.exports={
    name: 'Notice 通知提醒',
    class: 'message',
    outline: '在界面右上角显示可关闭的全局通知，常用于以下场景：\n<br>' +
    '\n' +
    '通知内容带有描述信息\n<br>' +
    '系统主动推送。<br>' +
    'Notice instance<br>' +
    '通过直接调用以下方法来使用组件：<b><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.info(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.success(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.warning(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.error(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tthis.$Notice.open(config)<br></b>' +
    '另外提供了全局配置和全局销毁的方法：\n<br>' +
    '\n' +
    '<b>&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.config(options)\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.close(name)<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.destroy()<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Notice.config({\n<br>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: 50,\n<br>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: 3\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;});</b>',
    tips:'',
    list:[
        {
            title: '普通提示',
            info: '基本用法，默认在 4.5秒后关闭。如果 desc 参数为空或不填，则自动应用仅标题模式下的样式。\n' +
            '\n' +
            '建议标题言简意赅，例如"删除成功"，更详细的内容可以放在描述信息里。',
            demo: '<i-button type="primary" @click="open1(false)">Open notice</i-button>\n' +
            '    <i-button @click="open1(true)">Open notice(only title)</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="open(false)">Open notice</Button>\n' +
                    '    <Button @click="open(true)">Open notice(only title)</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            open (nodesc) {\n' +
                    '                this.$Notice.open({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '提示类型',
            info: '带有状态图标的提醒。',
            demo: '<p>With desc</p>\n' +
            '    <i-button @click="info1(false)">Info</i-button>\n' +
            '    <i-button @click="success1(false)">Success</i-button>\n' +
            '    <i-button @click="warning1(false)">Warning</i-button>\n' +
            '    <i-button @click="error1(false)">Error</i-button>\n' +
            '    <p>Only title</p>\n' +
            '    <i-button @click="info1(true)">Info</i-button>\n' +
            '    <i-button @click="success1(true)">Success</i-button>\n' +
            '    <i-button @click="warning1(true)">Warning</i-button>\n' +
            '    <i-button @click="error1(true)">Error</i-button>',
            code: '<template>\n' +
                    '    <p>With desc</p>\n' +
                    '    <Button @click="info(false)">Info</Button>\n' +
                    '    <Button @click="success(false)">Success</Button>\n' +
                    '    <Button @click="warning(false)">Warning</Button>\n' +
                    '    <Button @click="error(false)">Error</Button>\n' +
                    '    <p>Only title</p>\n' +
                    '    <Button @click="info(true)">Info</Button>\n' +
                    '    <Button @click="success(true)">Success</Button>\n' +
                    '    <Button @click="warning(true)">Warning</Button>\n' +
                    '    <Button @click="error(true)">Error</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            info (nodesc) {\n' +
                    '                this.$Notice.info({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            success (nodesc) {\n' +
                    '                this.$Notice.success({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            warning (nodesc) {\n' +
                    '                this.$Notice.warning({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            error (nodesc) {\n' +
                    '                this.$Notice.error({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: nodesc ? \'\' : \'Here is the notification description. Here is the notification description. \'\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义时长',
            info: '自定义时长，为 0 则不自动关闭。也可以在Notice.config()中全局配置，详见API。',
            demo: '<i-button type="primary" @click="time1">Open notice</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="time">Open notice</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            time () {\n' +
                    '                this.$Notice.open({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: \'This notification does not automatically close, and you need to click the close button to close.\',\n' +
                    '                    duration: 0\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: 'Render 函数',
            info: '你可以自定义 Render 函数来替代 desc',
            demo: '<i-button type="primary" @click="renderFunc1">Open notice</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="renderFunc">Open notice</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            renderFunc () {\n' +
                    '                this.$Notice.success({\n' +
                    '                    title: \'Notification title\',\n' +
                    '                    desc: \'The desc will hide when you set render.\',\n' +
                    '                    render: h => {\n' +
                    '                        return h(\'span\', [\n' +
                    '                            \'This is created by \',\n' +
                    '                            h(\'a\', \'render\'),\n' +
                    '                            \' function\'\n' +
                    '                        ])\n' +
                    '                    }\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Message props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'title', explain:'通知提醒的标题\t', type:'String', default:'-'},
                {attr: 'desc\t', explain:'通知提醒的内容，为空或不填时，自动应用仅标题模式下的样式\t', type:'String', default:'-'},
                {attr: 'render\t', explain:'自定义描述内容，使用 Vue 的 Render 函数，如果同时设置了 render 和 desc，则只显示 render 的内容\t', type:'Function', default:'-'},
                {attr: 'duration', explain:'自动关闭的延时，单位秒，不关闭可以写 0\t', type:'Number', default:'4.5'},
                {attr: 'name', explain:'\t当前通知的唯一标识', type:'String', default:'自动'},
                {attr: 'onClose', explain:'关闭时的回调\t', type:'Function', default:'-'},
            ]
        },
        {
            name: 'config',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'top', explain:'提示组件距离顶端的距离，单位像素\t', type:'Number', default:'24'},
                {attr: 'duration', explain:'默认自动关闭的延时，单位秒\t', type:'Number', default:'4.5'},
            ]
        },
    ]
}