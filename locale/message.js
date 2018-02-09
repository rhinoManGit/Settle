/*
*
* */
module.exports={
    name: 'Message 全局提示',
    class: 'message',
    outline: '轻量级的信息反馈组件，在顶部居中显示，并自动消失。有多种不同的提示状态可选择。' +
    '<br>Message instance<br>' +
    '通过直接调用以下方法来使用组件：<b><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.info(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.success(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.warning(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.error(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.loading(config)<br></b>' +
    '另外提供了全局配置和全局销毁的方法：\n<br>' +
    '\n' +
    '<b>&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.config(options)\n' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.destroy()<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Message.config({\n<br>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;top: 50,\n<br>' +
    '    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;duration: 3\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;});</b>',
    tips:'',
    list:[
        {
            title: '普通提示',
            info: '最基本的提示，默认在1.5秒后消失。',
            demo: '<i-button type="primary" @click="info">Display info prompt</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="info">Display info prompt</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            info () {\n' +
                    '                this.$Message.info(\'This is a info tip\');\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '提示类型',
            info: '不同的提示状态：成功、警告、错误。\n' +
            '\n',
            demo: '<i-button @click="success">Display success prompt</i-button>\n' +
            '    <i-button @click="warning">Display warning prompt</i-button>\n' +
            '    <i-button @click="error">Display error prompt</i-button>',
            code: '<template>\n' +
                    '    <Button @click="success">Display success prompt</Button>\n' +
                    '    <Button @click="warning">Display warning prompt</Button>\n' +
                    '    <Button @click="error">Display error prompt</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            success () {\n' +
                    '                this.$Message.success(\'This is a success tip\');\n' +
                    '            },\n' +
                    '            warning () {\n' +
                    '                this.$Message.warning(\'This is a warning tip\');\n' +
                    '            },\n' +
                    '            error () {\n' +
                    '                this.$Message.error(\'This is an error tip\');\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '加载中',
            info: 'Loading 的状态，并异步在某个时机移除。\n' +
            '\n',
            demo: '<i-button @click="loading12">Display loading...</i-button>',
            code: '<template>\n' +
                    '    <Button @click="loading">Display loading...</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            loading () {\n' +
                    '                const msg = this.$Message.loading({\n' +
                    '                    content: \'Loading...\',\n' +
                    '                    duration: 0\n' +
                    '                });\n' +
                    '                setTimeout(msg, 3000);\n' +
                    '            },\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
            title: '自定义时长',
            info: '自定义时长，也可以在Message.config()中全局配置，详见API。\n' +
            '\n',
            demo: '<i-button @click="time12">Displays a 10 second prompt</i-button>',
            code: '<template>\n' +
                    '    <Button @click="time">Displays a 10 second prompt</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            this.$Message.info({\n' +
                    '                content: \'I\'ll be gone in 10 seconds\',\n' +
                    '                duration: 10\n' +
                    '            });\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '可关闭',
            info: '将参数设置为一个对象，并指定 closable 为 true 后可以手动关闭提示，完整参数详见API。',
            demo: ' <i-button @click="closable">Display a closable message</i-button>',
            code: '<template>\n' +
                    '    <Button @click="closable">Display a closable message</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            closable () {\n' +
                    '                this.$Message.info({\n' +
                    '                    content: \'Tips for manual closing\',\n' +
                    '                    duration: 10,\n' +
                    '                    closable: true\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义 Render 函数 ',
            info: '使用 Render 函数自定义内容。\n' +
            '\n',
            demo: '<i-button @click="renderFunc">show message</i-button>',
            code: '<template>\n' +
                    '<Button @click="renderFunc">show message</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            renderFunc () {\n' +
                    '                this.$Message.info({\n' +
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
                {attr: 'content', explain:'提示内容', type:'String', default:'-'},
                {attr: 'render', explain:'自定义描述内容，使用 Vue 的 Render 函数\t', type:'Function', default:'-'},
                {attr: 'duration', explain:'自动关闭的延时，单位秒，不关闭可以写 0\t', type:'Number', default:'1.5'},
                {attr: 'onClose', explain:'关闭时的回调\t', type:'Function', default:'-'},
                {attr: 'closable', explain:'是否显示关闭按钮\t', type:'Boolean', default:'false'},
            ]
        },
        {
            name: 'config',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'top', explain:'提示组件距离顶端的距离，单位像素\t', type:'Number', default:'24'},
                {attr: 'duration', explain:'默认自动关闭的延时，单位秒\t', type:'Number', default:'1.5'},
            ]
        },
    ]
}