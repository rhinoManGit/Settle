/*
*
* */
module.exports={
    name: 'Rate 评分',
    class: 'rate',
    outline: '对事物进行快速的评级操作，或对评价进行展示。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '基本用法。\n' +
            '\n',
            demo: '<Rate v-model="value91"></Rate>',
            code: '<template>\n' +
                    '    <Rate v-model="value"></Rate>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value: 0\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '半星',
            info: '设置属性 allow-half 可以选中半星。',
            demo: '<Rate allow-half v-model="valueHalf"></Rate>',
            code: '<template>\n' +
                    '    <Rate allow-half v-model="valueHalf"></Rate>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                valueHalf: 2.5\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '显示提示',
            info: '设置属性 show-text 可以显示提示文字。\n' +
            '\n' +
            '提示内容也可以通过 slot 自定义。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <Rate show-text v-model="valueText"></Rate>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <Rate show-text allow-half v-model="valueCustomText">\n' +
            '                <span style="color: #f5a623">{{ valueCustomText }}</span>\n' +
            '            </Rate>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <Rate show-text v-model="valueText"></Rate>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <Rate show-text allow-half v-model="valueCustomText">\n' +
                    '                <span style="color: #f5a623">{{ valueCustomText }}</span>\n' +
                    '            </Rate>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                valueText: 3,\n' +
                    '                valueCustomText: 3.8\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '只读',
            info: '设置属性 disabled 开启只读模式，无法交互。',
            demo: '<Rate disabled v-model="valueDisabled"></Rate>',
            code: '<template>\n' +
                    '    <Rate disabled v-model="valueDisabled"></Rate>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                valueDisabled: 2\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Rate props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'count', explain:'star 总数', type:'Number', default:'5'},
                {attr: 'value', explain:'当前 star 数，可以使用 v-model 双向绑定数据', type:'Number', default:'0'},
                {attr: 'allow-half\t', explain:'是否允许半选\t', type:'Boolean', default:'false'},
                {attr: 'disabled', explain:'是否只读，无法进行交互\t', type:'Boolean', default:'false'},
                {attr: 'show-text\t', explain:'是否显示提示文字\t', type:'Boolean', default:'false'}
            ]
        },
        {
            name: 'Rate events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'评分改变时触发\t', default:'value'}
            ]
        },
    ]
}