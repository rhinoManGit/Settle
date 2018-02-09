/*
*
* */
module.exports={
    name: 'Radio 单选框',
    class: 'radio',
    outline: '基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。',
    tips:'注意：非 template/render 模式下，RadioGroup 需使用 radio-group。',
    list:[
        {
            title: '单独使用',
            info: '使用 v-model 可以双向绑定数据。',
            demo: '<Radio v-model="single">Radio</Radio>',
            code: '<template>\n' +
                    '    <Radio v-model="single">Radio</Radio>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                single: false\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '组合使用',
            info: '使用RadioGroup实现一组互斥的选项组。在组合使用时，Radio 使用 label 来自动判断。每个 Radio 的内容可以自定义，如不填写则默认使用 label 的值。',
            demo: '<radio-group v-model="phone">\n' +
            '        <Radio label="apple">\n' +
            '            <Icon type="social-apple"></Icon>\n' +
            '            <span>Apple</span>\n' +
            '        </Radio>\n' +
            '        <Radio label="android">\n' +
            '            <Icon type="social-android"></Icon>\n' +
            '            <span>Android</span>\n' +
            '        </Radio>\n' +
            '        <Radio label="windows">\n' +
            '            <Icon type="social-windows"></Icon>\n' +
            '            <span>Windows</span>\n' +
            '        </Radio>\n' +
            '    </radio-group>\n' +
            '    <radio-group v-model="animal">\n' +
            '        <Radio label="金斑蝶"></Radio>\n' +
            '        <Radio label="爪哇犀牛"></Radio>\n' +
            '        <Radio label="印度黑羚"></Radio>\n' +
            '    </radio-group>',
            code: '<template>\n' +
                    '    <RadioGroup v-model="phone">\n' +
                    '        <Radio label="apple">\n' +
                    '            <Icon type="social-apple"></Icon>\n' +
                    '            <span>Apple</span>\n' +
                    '        </Radio>\n' +
                    '        <Radio label="android">\n' +
                    '            <Icon type="social-android"></Icon>\n' +
                    '            <span>Android</span>\n' +
                    '        </Radio>\n' +
                    '        <Radio label="windows">\n' +
                    '            <Icon type="social-windows"></Icon>\n' +
                    '            <span>Windows</span>\n' +
                    '        </Radio>\n' +
                    '    </RadioGroup>\n' +
                    '    <RadioGroup v-model="animal">\n' +
                    '        <Radio label="金斑蝶"></Radio>\n' +
                    '        <Radio label="爪哇犀牛"></Radio>\n' +
                    '        <Radio label="印度黑羚"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                phone: \'apple\',\n' +
                    '                animal: \'爪哇犀牛\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不可用',
            info: '通过设置disabled属性来禁用单选框。',
            demo: ' <Radio v-model="disabledSingle" disabled>Radio</Radio>\n' +
            '    <radio-group v-model="disabledGroup">\n' +
            '        <Radio label="金斑蝶" disabled></Radio>\n' +
            '        <Radio label="爪哇犀牛"></Radio>\n' +
            '        <Radio label="印度黑羚"></Radio>\n' +
            '    </radio-group>',
            code: '<template>\n' +
                    '    <Radio v-model="disabledSingle" disabled>Radio</Radio>\n' +
                    '    <RadioGroup v-model="disabledGroup">\n' +
                    '        <Radio label="金斑蝶" disabled></Radio>\n' +
                    '        <Radio label="爪哇犀牛"></Radio>\n' +
                    '        <Radio label="印度黑羚"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                disabledSingle: true,\n' +
                    '                disabledGroup: \'爪哇犀牛\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '垂直',
            info: '设置属性 vertical 可以垂直显示，按钮样式下无效。',
            demo: '<radio-group v-model="vertical" vertical>\n' +
            '        <Radio label="apple">\n' +
            '            <Icon type="social-apple"></Icon>\n' +
            '            <span>Apple</span>\n' +
            '        </Radio>\n' +
            '        <Radio label="android">\n' +
            '            <Icon type="social-android"></Icon>\n' +
            '            <span>Android</span>\n' +
            '        </Radio>\n' +
            '        <Radio label="windows">\n' +
            '            <Icon type="social-windows"></Icon>\n' +
            '            <span>Windows</span>\n' +
            '        </Radio>\n' +
            '    </radio-group>',
            code: '<template>\n' +
                    '    <RadioGroup v-model="vertical" vertical>\n' +
                    '        <Radio label="apple">\n' +
                    '            <Icon type="social-apple"></Icon>\n' +
                    '            <span>Apple</span>\n' +
                    '        </Radio>\n' +
                    '        <Radio label="android">\n' +
                    '            <Icon type="social-android"></Icon>\n' +
                    '            <span>Android</span>\n' +
                    '        </Radio>\n' +
                    '        <Radio label="windows">\n' +
                    '            <Icon type="social-windows"></Icon>\n' +
                    '            <span>Windows</span>\n' +
                    '        </Radio>\n' +
                    '    </RadioGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                vertical: \'apple\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '按钮样式',
            info: '组合使用时可以设置属性type为 button 来应用按钮的样式。',
            demo: '<radio-group v-model="button1" type="button">\n' +
            '        <Radio label="北京"></Radio>\n' +
            '        <Radio label="上海"></Radio>\n' +
            '        <Radio label="深圳"></Radio>\n' +
            '        <Radio label="杭州"></Radio>\n' +
            '    </radio-group>\n' +
            '    <radio-group v-model="button2" type="button">\n' +
            '        <Radio label="北京"></Radio>\n' +
            '        <Radio label="上海" disabled></Radio>\n' +
            '        <Radio label="深圳"></Radio>\n' +
            '        <Radio label="杭州"></Radio>\n' +
            '    </radio-group>\n' +
            '    <radio-group v-model="button3" type="button">\n' +
            '        <Radio label="北京" disabled></Radio>\n' +
            '        <Radio label="上海" disabled></Radio>\n' +
            '        <Radio label="深圳" disabled></Radio>\n' +
            '        <Radio label="杭州" disabled></Radio>\n' +
            '    </radio-group>',
            code: '<template>\n' +
                    '    <RadioGroup v-model="button1" type="button">\n' +
                    '        <Radio label="北京"></Radio>\n' +
                    '        <Radio label="上海"></Radio>\n' +
                    '        <Radio label="深圳"></Radio>\n' +
                    '        <Radio label="杭州"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '    <RadioGroup v-model="button2" type="button">\n' +
                    '        <Radio label="北京"></Radio>\n' +
                    '        <Radio label="上海" disabled></Radio>\n' +
                    '        <Radio label="深圳"></Radio>\n' +
                    '        <Radio label="杭州"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '    <RadioGroup v-model="button3" type="button">\n' +
                    '        <Radio label="北京" disabled></Radio>\n' +
                    '        <Radio label="上海" disabled></Radio>\n' +
                    '        <Radio label="深圳" disabled></Radio>\n' +
                    '        <Radio label="杭州" disabled></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                button1: \'北京\',\n' +
                    '                button2: \'北京\',\n' +
                    '                button3: \'北京\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
          title: '尺寸',
            info: '通过设置属性size为large或small将按钮样式设置为大和小尺寸，不设置为默认(中)尺寸。',
            demo: '<radio-group v-model="button4" type="button" size="large">\n' +
            '        <Radio label="北京"></Radio>\n' +
            '        <Radio label="上海"></Radio>\n' +
            '        <Radio label="深圳"></Radio>\n' +
            '        <Radio label="杭州"></Radio>\n' +
            '    </radio-group>\n' +
            '    <radio-group v-model="button5" type="button">\n' +
            '        <Radio label="北京"></Radio>\n' +
            '        <Radio label="上海"></Radio>\n' +
            '        <Radio label="深圳"></Radio>\n' +
            '        <Radio label="杭州"></Radio>\n' +
            '    </radio-group>\n' +
            '    <radio-group v-model="button6" type="button" size="small">\n' +
            '        <Radio label="北京"></Radio>\n' +
            '        <Radio label="上海"></Radio>\n' +
            '        <Radio label="深圳"></Radio>\n' +
            '        <Radio label="杭州"></Radio>\n' +
            '    </radio-group>',
            code: '<template>\n' +
                    '    <RadioGroup v-model="button4" type="button" size="large">\n' +
                    '        <Radio label="北京"></Radio>\n' +
                    '        <Radio label="上海"></Radio>\n' +
                    '        <Radio label="深圳"></Radio>\n' +
                    '        <Radio label="杭州"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '    <RadioGroup v-model="button5" type="button">\n' +
                    '        <Radio label="北京"></Radio>\n' +
                    '        <Radio label="上海"></Radio>\n' +
                    '        <Radio label="深圳"></Radio>\n' +
                    '        <Radio label="杭州"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '    <RadioGroup v-model="button6" type="button" size="small">\n' +
                    '        <Radio label="北京"></Radio>\n' +
                    '        <Radio label="上海"></Radio>\n' +
                    '        <Radio label="深圳"></Radio>\n' +
                    '        <Radio label="杭州"></Radio>\n' +
                    '    </RadioGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                button4: \'北京\',\n' +
                    '                button5: \'北京\',\n' +
                    '                button6: \'北京\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Radio props ',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'只在单独使用时有效。可以使用 v-model 双向绑定数据', type:'Boolean', default:'false'},
                {attr: 'label', explain:'只在组合使用时有效。指定当前选项的 value 值，组合会自动判断当前选择的项目', type:'String | Number', default:''},
                {attr: 'disabled', explain:'是否禁用当前项',
                    type:'Boolean', default:'false'},
                {attr: 'size', explain:'单选框的尺寸，可选值为 large、small、default 或者不设置',
                    type:'String', default:''},
                {attr: 'true-value', explain:'选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用', type:'String, Number, Boolean', default:'true'},
                {attr: 'false-value', explain:'没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用', type:'String, Number, Boolean', default:'false'}
            ]
        },
        {
            name: 'Radio events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发', default:'...'}
            ]
        },
        {
            name: 'RadioGroup props',
            list: [
                {attr: '名称', explain:'说明', type:'', default: ''},
                {attr: 'value', explain:'指定当前选中的项目数据。可以使用 v-model 双向绑定数据', type:'String | Number', default: ''},
                {attr: 'type', explain:'可选值为 button 或不填，为 button 时使用按钮样式', type:'String', default: ''},
                {attr: 'size', explain:'尺寸，可选值为large、small、default或者不设置', type:'String', default: ''},
                {attr: 'vertical', explain:'是否垂直排列，按钮样式下无效', type:'Boolean', default: ''}
            ]
        },
        {
            name: 'RadioGroup events',
            list: [
                {attr: '事件名', explain:'说明', param:'返回值'},
                {attr: 'on-change', explain:'在选项状态发生改变时触发，返回当前选中的项。通过修改外部的数据改变时不会触发', param:'...'}
            ]
        }
    ]
}