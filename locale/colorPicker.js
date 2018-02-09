/*
*
* */
module.exports={
    name: 'ColorPicker 颜色选择器',
    class: 'colorpicker',
    outline: '用于颜色选择，支持多种颜色格式，支持颜色预设。',
    tips:'注意：非 template/render 模式下，ColorPicker 用 color-picker。',
    list:[
        {
            title: '基础用法',
            info: '基本用法，可以使用 v-model 实现数据的双向绑定。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            有默认值\n' +
            '            <color-picker v-model="color1" />\n' +
            '        </i-col>\n' +
            '        <Col span="12">\n' +
            '            无默认值\n' +
            '            <color-picker v-model="color2" />\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            有默认值\n' +
                    '            <ColorPicker v-model="color1" />\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            无默认值\n' +
                    '            <ColorPicker v-model="color2" />\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                color1: \'#19be6b\',\n' +
                    '                color2: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
            title: '透明度',
            info: '开启属性 alpha，可以选择带 Alpha 通道的颜色。',
            demo: '<color-picker v-model="color3" alpha />',
            code: '<template>\n' +
                    '    <ColorPicker v-model="color3" alpha />\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                color3: \'rgba(25, 190,107, .5)\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '色彩',
            info: '设置属性 hue 为 false，可以禁用色彩选项。',
            demo: '<color-picker v-model="color7" :hue="false" />',
            code: '<template>\n' +
                    '    <ColorPicker v-model="color7" :hue="false" />\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                color7: \'#19be6b\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '颜色预设',
            info: '开启属性 recommend 可以显示推荐的颜色预设，或设置属性 colors 来自定义预设颜色。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <color-picker v-model="color4" recommend />\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <color-picker v-model="color5" :colors="colors" />\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <ColorPicker v-model="color4" recommend />\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <ColorPicker v-model="color5" :colors="colors" />\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                color4: \'#19be6b\',\n' +
                    '                color5: \'#19be6b\',\n' +
                    '                colors: [\'#311B92\', \'#512DA8\', \'#673AB7\', \'#9575CD\', \'#D1C4E9\']\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '尺寸',
            info: '选择器有三种尺寸：大、默认（中）、小。',
            demo: '<Row>\n' +
            '        <i-col span="8">\n' +
            '            <color-picker v-model="color6" size="large" />\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <color-picker v-model="color6" />\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <color-picker v-model="color6" size="small" />\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="8">\n' +
                    '            <ColorPicker v-model="color6" size="large" />\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <ColorPicker v-model="color6" />\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <ColorPicker v-model="color6" size="small" />\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                color6: \'#19be6b\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'ColorPicker props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'绑定的值，可使用 v-model 双向绑定\t', type:'String', default:'-'},
                {attr: 'alpha', explain:'是否支持透明度选择\t', type:'Boolean', default:'false'},
                {attr: 'hue', explain:'是否支持色彩选择\t', type:'Boolean', default:'true'},
                {attr: 'recommend', explain:'是否显示推荐的颜色预设\t', type:'Boolean', default:'false'},
                {attr: 'colors', explain:'自定义颜色预设\t', type:'Array', default:'[]'},
                {attr: 'format', explain:'颜色的格式，可选值为 hsl、hsv、hex、rgb\t', type:'String', default:'开启 alpha 时为 rgb，其它为 hex\n'},
                {attr: 'size', explain:'尺寸，可选值为large、small、default或者不设置\t', type:'String', default:'-'}
            ]
        },
        {
            name: 'ColorPicker events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change\t', explain:'当绑定值变化时触发\t', default:'当前值\n'},
                {attr: 'on-active-change\t', explain:'面板中当前显示的颜色发生改变时触发\t', default:'当前显示的颜色值\n'}
            ]
        },
    ]
}