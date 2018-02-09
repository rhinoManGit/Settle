/*
*
* */
module.exports={
    name: 'Slider 滑块',
    class: 'slider',
    outline: '滑动输入器，用于在数值区间/自定义区间内进行选择，支持连续或离散值。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '滑块的基本用法，可以使用 v-model 双向绑定数据。\n' +
            '\n' +
            '通过设置属性 range 开启双滑块，通过设置属性 disabled 禁用滑块。\n' +
            '\n' +
            '注意，单滑块时，value 格式为数字，当开启双滑块时，value 为长度是2的数组，且每项为数字。',
            demo: ' <Slider v-model="value111"></Slider>\n' +
            '    <Slider v-model="value22" range></Slider>\n' +
            '    <Slider v-model="value33" range disabled></Slider>',
            code: '<template>\n' +
                    '    <Slider v-model="value1"></Slider>\n' +
                    '    <Slider v-model="value2" range></Slider>\n' +
                    '    <Slider v-model="value3" range disabled></Slider>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: 25,\n' +
                    '                value2: [20, 50],\n' +
                    '                value3: [20, 50]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '离散值',
            info: '通过设置属性 step 可以控制每次滑动的间隔。',
            demo: '<Slider v-model="value44" :step="10"></Slider>\n' +
            '    <Slider v-model="value55" :step="10" range></Slider>',
            code: '<template>\n' +
                    '    <Slider v-model="value4" :step="10"></Slider>\n' +
                    '    <Slider v-model="value5" :step="10" range></Slider>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value4: 30,\n' +
                    '                value5: [20, 50]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '显示间断点 #\n',
            info: '通过设置属性 show-stops 可以显示间断点，建议在 step 间隔不密集时使用。\n' +
            '\n',
            demo: ' <Slider v-model="value66" :step="10" show-stops></Slider>\n' +
            '    <Slider v-model="value77" :step="10" show-stops range></Slider>',
            code: '<template>\n' +
                    '    <Slider v-model="value6" :step="10" show-stops></Slider>\n' +
                    '    <Slider v-model="value7" :step="10" show-stops range></Slider>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value6: 30,\n' +
                    '                value7: [20, 50]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '带有输入框',
            info: '通过设置属性 show-input 可以显示数字输入框，配合使用，仅在单滑块模式下有效。',
            demo: '<Slider v-model="value88" show-input></Slider>',
            code: '<template>\n' +
                    '    <Slider v-model="value8" show-input></Slider>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value8: 25\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '自定义提示',
            info: 'Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip。',
            demo: '<Slider v-model="value99" :tip-format="formatSlider"></Slider>\n' +
            '    <Slider v-model="value1010" :tip-format="hideFormat"></Slider>',
            code: '<template>\n' +
                    '    <Slider v-model="value9" :tip-format="format"></Slider>\n' +
                    '    <Slider v-model="value10" :tip-format="hideFormat"></Slider>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value9: 25,\n' +
                    '                value10: 25\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            format (val) {\n' +
                    '                return \'Progress: \' + val + \'%\';\n' +
                    '            },\n' +
                    '            hideFormat () {\n' +
                    '                return null;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n' +
                    ' \n'
        }
    ],

    api: [
        {
            name: 'Slider props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'滑块选定的值，可以使用 v-model 双向绑定数据。普通模式下，数据格式为数字，在双滑块模式下，数据格式为长度是2的数组，且每项都为数字', type:'Number | Array', default:'0'},
                {attr: 'min', explain:'最小值', type:'Number', default:'0'},
                {attr: 'max', explain:'最大值\t', type:'Number', default:'100'},
                {attr: 'step', explain:'步长，取值建议能被（max - min）整除', type:'Number', default:'1'},
                {attr: 'disabled', explain:'是否禁用滑块', type:'Boolean', default:'false'},
                {attr: 'range', explain:'是否开启双滑块模式', type:'Boolean', default:'false'},
                {attr: 'show-input', explain:'是否显示数字输入框，仅在单滑块模式下有效\t', type:'Boolean', default:'false'},
                {attr: 'show-stops', explain:'是否显示间断点，建议在 step 不密集时使用', type:'Boolean', default:'false'},
                {attr: 'show-tip', explain:'提示的显示控制，可选值为 hover（悬停，默认）、always（总是可见）、never（不可见）', type:'Boolean', default:'false'},
                {attr: 'tip-format', explain:'Slider 会把当前值传给 tip-format，并在 Tooltip 中显示 tip-format 的返回值，若为 null，则隐藏 Tooltip', type:'Function', default:'value'}
            ]
        },
        {
            name: 'Slider events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'在松开滑动时触发，返回当前的选值，在滑动过程中不会触发', default:'value'},
                {attr: 'on-input', explain:'滑动条数据变化时触发，返回当前的选值，在滑动过程中实时触发', default:'value'}
            ]
        }
    ]
}