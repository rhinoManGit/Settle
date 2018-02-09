/*
*
* */
module.exports={
    name: 'Switch 开关',
    class: 'switch',
    outline: '在两种状态间切换时用到的开关选择器。',
    tips:'注意：非 template/render 模式下，需使用 i-switch。',
    list:[
        {
            title: '基本',
            info: '基本用法，状态切换时会触发事件。',
            demo: '<i-switch v-model="switch1" @on-change="change"></Switch>',
            code: '<template>\n' +
                    '    <Switch v-model="switch1" @on-change="change"></Switch>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                switch1: false\n' +
                    '            }  \n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            change (status) {\n' +
                    '                this.$Message.info(\'开关状态：\' + status);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '尺寸',
            info: '设置size为 large 或 small 使用大号和小号的开关。',
            demo: '<i-switch size="large"></Switch>\n' +
            '    <i-switch></Switch>\n' +
            '    <i-switch size="small"></Switch>',
            code: '<template>\n' +
                    '    <Switch size="large"></Switch>\n' +
                    '    <Switch></Switch>\n' +
                    '    <Switch size="small"></Switch>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '文字和图标',
            info: '自定义内容，建议如果使用2个汉字，将开关尺寸设置为 large。',
            demo: '<i-switch>\n' +
            '        <span slot="open">开</span>\n' +
            '        <span slot="close">关</span>\n' +
            '    </i-switch>\n' +
            '    <i-switch>\n' +
            '        <Icon type="android-done" slot="open"></Icon>\n' +
            '        <Icon type="android-close" slot="close"></Icon>\n' +
            '    </i-switch>\n' +
            '    <br><br>\n' +
            '    <i-switch size="large">\n' +
            '        <span slot="open">开启</span>\n' +
            '        <span slot="close">关闭</span>\n' +
            '    </i-switch>\n' +
            '    <i-switch size="large">\n' +
            '        <span slot="open">ON</span>\n' +
            '        <span slot="close">OFF</span>\n' +
            '    </i-switch>',
            code: '<template>\n' +
                    '    <Switch>\n' +
                    '        <span slot="open">开</span>\n' +
                    '        <span slot="close">关</span>\n' +
                    '    </Switch>\n' +
                    '    <Switch>\n' +
                    '        <Icon type="android-done" slot="open"></Icon>\n' +
                    '        <Icon type="android-close" slot="close"></Icon>\n' +
                    '    </Switch>\n' +
                    '    <br><br>\n' +
                    '    <Switch size="large">\n' +
                    '        <span slot="open">开启</span>\n' +
                    '        <span slot="close">关闭</span>\n' +
                    '    </Switch>\n' +
                    '    <Switch size="large">\n' +
                    '        <span slot="open">ON</span>\n' +
                    '        <span slot="close">OFF</span>\n' +
                    '    </Switch>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不可用',
            info: '禁用开关。',
            demo: '<i-switch :disabled="disabled"></i-switch>\n' +
            '    <i-button type="primary" @click="disabled = !disabled">Toggle Disabled</i-button>。',
            code: '<template>\n' +
                    '    <Switch :disabled="disabled"></Switch>\n' +
                    '    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                disabled: true\n' +
                    '            }\n' +
                    '        },\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Switch props ',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'指定当前是否选中，可以使用 v-model 双向绑定数据',
                    type:'Boolean', default:'false'},
                {attr: 'size', explain:'开关的尺寸，可选值为large、small、default或者不写。' +
                '建议开关如果使用了2个汉字的文字，使用 large。', type:'String',
                    default:'-'},
                {attr: 'disabled', explain:'禁用开关',
                    type:'Boolean', default:'false'},
                {attr: 'true-value', explain:'选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用' +
                '', type:'String, Number, Boolean', default:'true'},
                {attr: 'false-value', explain:'没有选中时的值，当使用类似 1 和 0 来判断是否选中时会' +
                '很有用', type:'String, Number, Boolean', default:'false'}
            ]
        },
        {
            name: 'Switch events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'开关变化时触发，返回当前的状态', default:'true | ' +
                'false'}
            ]
        },
        {
            name: 'Switch slot ',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: 'open', explain:'自定义显示打开时的内容'},
                {attr: 'close', explain:'自定义显示关闭时的内容\n'},
            ]
        }
    ]
}