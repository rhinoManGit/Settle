/*
*
* */
module.exports={
    name: 'Alert 警告提示',
    class: 'alert',
    outline: '静态地呈现一些警告信息，可手动关闭。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '基本使用方法，有四种样式可以选择info、success、warning、error。',
            demo: '<Alert>An info prompt</Alert>\n' +
            '    <Alert type="success">A success prompt</Alert>\n' +
            '    <Alert type="warning">A warning prompt</Alert>\n' +
            '    <Alert type="error">An error prompt</Alert>',
            code: '<template>\n' +
                    '    <Alert>An info prompt</Alert>\n' +
                    '    <Alert type="success">A success prompt</Alert>\n' +
                    '    <Alert type="warning">A warning prompt</Alert>\n' +
                    '    <Alert type="error">An error prompt</Alert>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '含描述信息',
            info: '自定义<slot name="desc">描述内容。',
            demo: '<Alert>\n' +
            '        An info prompt\n' +
            '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
            '    </Alert>\n' +
            '    <Alert type="success">\n' +
            '        A success prompt\n' +
            '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
            '    </Alert>\n' +
            '    <Alert type="warning">\n' +
            '        A warning prompt\n' +
            '        <template slot="desc">\n' +
            '        Content of prompt. Content of prompt. Content of prompt.\n' +
            '    </template>\n' +
            '    </Alert>\n' +
            '    <Alert type="error">\n' +
            '        An error prompt\n' +
            '        <span slot="desc">\n' +
            '            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>\n' +
            '        </span>\n' +
            '    </Alert>',
            code: '<template>\n' +
                    '    <Alert>\n' +
                    '        An info prompt\n' +
                    '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="success">\n' +
                    '        A success prompt\n' +
                    '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="warning">\n' +
                    '        A warning prompt\n' +
                    '        <template slot="desc">\n' +
                    '        Content of prompt. Content of prompt. Content of prompt.\n' +
                    '    </template>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="error">\n' +
                    '        An error prompt\n' +
                    '        <span slot="desc">\n' +
                    '            Custom error description copywriting. <Icon type="help-circled" size="14"></Icon>\n' +
                    '        </span>\n' +
                    '    </Alert>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '图标',
            info: '根据 type 属性自动添加不同图标，或者自定义图标 slot 。',
            demo: '<Alert show-icon>An info prompt</Alert>\n' +
            '    <Alert type="success" show-icon>A success prompt</Alert>\n' +
            '    <Alert type="warning" show-icon>A warning prompt</Alert>\n' +
            '    <Alert type="error" show-icon>An error prompt</Alert>\n' +
            '    <Alert show-icon>\n' +
            '        An info prompt\n' +
            '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
            '    </Alert>\n' +
            '    <Alert type="success" show-icon>\n' +
            '        A success prompt\n' +
            '        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>\n' +
            '    </Alert>\n' +
            '    <Alert type="warning" show-icon>\n' +
            '        A warning prompt\n' +
            '        <template slot="desc">\n' +
            '        Content of prompt. Content of prompt. Content of prompt.\n' +
            '    </template>\n' +
            '    </Alert>\n' +
            '    <Alert type="error" show-icon>\n' +
            '        An error prompt\n' +
            '        <span slot="desc">\n' +
            '            Custom error description copywriting.\n' +
            '        </span>\n' +
            '    </Alert>\n' +
            '    <Alert show-icon>\n' +
            '        Custom icon\n' +
            '        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>\n' +
            '        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>\n' +
            '    </Alert>',
            code: '<template>\n' +
                    '    <Alert show-icon>An info prompt</Alert>\n' +
                    '    <Alert type="success" show-icon>A success prompt</Alert>\n' +
                    '    <Alert type="warning" show-icon>A warning prompt</Alert>\n' +
                    '    <Alert type="error" show-icon>An error prompt</Alert>\n' +
                    '    <Alert show-icon>\n' +
                    '        An info prompt\n' +
                    '        <template slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </template>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="success" show-icon>\n' +
                    '        A success prompt\n' +
                    '        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="warning" show-icon>\n' +
                    '        A warning prompt\n' +
                    '        <template slot="desc">\n' +
                    '        Content of prompt. Content of prompt. Content of prompt.\n' +
                    '    </template>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="error" show-icon>\n' +
                    '        An error prompt\n' +
                    '        <span slot="desc">\n' +
                    '            Custom error description copywriting.\n' +
                    '        </span>\n' +
                    '    </Alert>\n' +
                    '    <Alert show-icon>\n' +
                    '        Custom icon\n' +
                    '        <Icon type="ios-lightbulb-outline" slot="icon"></Icon>\n' +
                    '        <template slot="desc">Custom icon copywriting. Custom icon copywriting. Custom icon copywriting. </template>\n' +
                    '    </Alert>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '可关闭',
            info: '显示关闭按钮，点击可关闭提示，也可以自定义关闭 slot 。',
            demo: '<Alert closable>An info prompt</Alert>\n' +
            '    <Alert type="success" show-icon closable>\n' +
            '        A success prompt\n' +
            '        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>\n' +
            '    </Alert>\n' +
            '    <Alert type="warning" closable>\n' +
            '        Custom closing content\n' +
            '        <span slot="close">No longer prompt</span>\n' +
            '    </Alert>',
            code: '<template>\n' +
                    '    <Alert closable>An info prompt</Alert>\n' +
                    '    <Alert type="success" show-icon closable>\n' +
                    '        A success prompt\n' +
                    '        <span slot="desc">Content of prompt. Content of prompt. Content of prompt. Content of prompt. </span>\n' +
                    '    </Alert>\n' +
                    '    <Alert type="warning" closable>\n' +
                    '        Custom closing content\n' +
                    '        <span slot="close">No longer prompt</span>\n' +
                    '    </Alert>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '顶部公告',
            info: '设置属性 banner 可以应用顶部公告的样式。',
            demo: '<Alert banner type="warning">Notice: notification contents...</Alert>\n' +
            '    <Alert banner closable type="warning">Notice: notification contents...</Alert>',
            code: '<template>\n' +
                    '    <Alert banner type="warning">Notice: notification contents...</Alert>\n' +
                    '    <Alert banner closable type="warning">Notice: notification contents...</Alert>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Alert props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'type', explain:'警告提示样式，可选值为info、success、warning、error', type:'String', default:'info'},
                {attr: 'closable', explain:'是否可关闭\t', type:'Boolean', default:'false\n'},
                {attr: 'show-icon\t', explain:'是否显示图标\t', type:'Boolean', default:'false\n'}
            ]
        },
        {
            name: 'Alert events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值\n'},
                {attr: 'on-close', explain:'关闭时触发', default:'event'}
            ]
        },
        {
            name: 'Alert slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'警告提示内容\n'},
                {attr: 'desc', explain:'警告提示辅助性文字介绍\n'},
                {attr: 'icon', explain:'自定义图标内容\n'},
                {attr: 'close', explain:'自定义关闭内容\n'},
            ]
        }
    ]
}