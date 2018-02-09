/*
*
* */
module.exports={
    name: 'InputNumber 数字输入框',
    class: 'inputnumber',
    outline: '使用鼠标或键盘输入一定范围的标准数值。',
    tips:'注意：非 template/render 模式下，InputNumber 用 input-number。',
    list:[
        {
            title: '基础用法',
            info: '可以通过输入、鼠标点击或键盘的上下键来改变数值大小。',
            demo: '<input-number :max="10" :min="1" v-model="value81"></input-number>',
            code: '<template>\n' +
                    '    <InputNumber :max="10" :min="1" v-model="value1"></InputNumber>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: 1\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '小数',
            info: '通过设置step属性控制每次改变的精度。',
            demo: '<input-number :max="10" :min="1" :step="1.2" v-model="value82"></input-number>',
            code: '<template>\n' +
                    '    <InputNumber :max="10" :min="1" :step="1.2" v-model="value2"></InputNumber>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value2: 1\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '尺寸',
            info: '通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。',
            demo: '<input-number v-model="value83" size="small"></input-number>\n' +
            '    <input-number v-model="value84"></input-number>\n' +
            '    <input-number v-model="value85" size="large"></input-number>',
            code: '<template>\n' +
                    '    <InputNumber v-model="value3" size="small"></InputNumber>\n' +
                    '    <InputNumber v-model="value4"></InputNumber>\n' +
                    '    <InputNumber v-model="value5" size="large"></InputNumber>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value3: 2,\n' +
                    '                value4: 2,\n' +
                    '                value5: 2\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '不可用',
            info: '通过设置disabled属性禁用输入框，点击按钮切换状态。',
            demo: '<input-number v-model="value86" :disabled="disabled"></input-number>\n' +
            '    <i-button type="primary" @click="disabled = !disabled">Toggle Disabled</i-button>',
            code: '<template>\n' +
                    '    <InputNumber v-model="value6" :disabled="disabled"></InputNumber>\n' +
                    '    <Button type="primary" @click="disabled = !disabled">Toggle Disabled</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                disabled: true,\n' +
                    '                value6: 1\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '只读',
            info: '通过设置readonly属性开启只读。',
            demo: '<input-number v-model="value87" readonly></input-number>',
            code: '<template>\n' +
                    '    <InputNumber v-model="value7" readonly></InputNumber>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value7: 1\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '不可编辑',
            info: '通过设置editable属性控制是否能编辑。',
            demo: '<input-number v-model="value98" :editable="false"></input-number>',
            code: '<template>\n' +
                    '    <InputNumber v-model="value8" :editable="false"></InputNumber>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value8: 1\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'InputNumber props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'max', explain:'最大值\t', type:'Number', default:'Infinity'},
                {attr: 'min', explain:'最小值\t', type:'Number', default:'-Infinity'},
                {attr: 'value', explain:'当前值，可以使用 v-model 双向绑定数据\t', type:'Number', default:'1'},
                {attr: 'step', explain:'每次改变的步伐，可以是小数\t', type:'Number', default:'1'},
                {attr: 'size', explain:'输入框尺寸，可选值为large、small、default或者不填\t', type:'String', default:'-'},
                {attr: 'disabled', explain:'设置禁用状态\t', type:'Boolean', default:'false'},
                {attr: 'readonly', explain:'是否设置为只读\t', type:'Boolean', default:'false'},
                {attr: 'editable', explain:'是否可编辑\t', type:'Boolean', default:'true'},
                {attr: 'precision', explain:'数值精度\t', type:'Number', default:'-'},
                {attr: 'element-id\t', explain:'给表单元素设置 id，详见 Form 用法。\t', type:'String', default:'-'},
            ]
        },
        {
            name: 'InputNumber events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值\n'},
                {attr: 'on-change', explain:'数值改变时的回调，返回当前值\t', default:'当前值\n'},
                {attr: 'on-focus\t', explain:'聚焦时触发\t', default:'-'},
                {attr: 'on-blur\t', explain:'失焦时触发\t', default:'-'},
            ]
        },
    ]
}