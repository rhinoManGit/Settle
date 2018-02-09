/*
*
* */
module.exports={
    name: 'Input 输入框',
    class: 'input',
    outline: '基本表单组件，支持 input 和 textarea，并在原生控件基础上进行了功能扩展，可以组合使用。',
    tips:'注意：非 template/render 模式下，需使用 i-input。',
    list:[
        {
            title: '基础用法',
            info: '基本用法，可以使用 v-model 实现数据的双向绑定。\n' +
            '\n' +
            '可以直接设置 style 来改变输入框的宽度，默认 100%。',
            demo: '<i-input v-model="value" placeholder="Enter something..." style="width: 300px"></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '尺寸',
            info: '输入框有三种尺寸：大、默认（中）、小\n' +
            '\n' +
            '通过设置size为large和small设置为大和小尺寸，不设置为默认（中）尺寸。',
            demo: ' <i-input v-model="value1" size="large" placeholder="large size"></i-input>\n' +
            '    <br/>\n' +
            '    <i-input v-model="value2" placeholder="default size"></i-input>\n' +
            '    <br/>\n' +
            '    <i-input v-model="value3" size="small" placeholder="small size"></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value1" size="large" placeholder="large size"></Input>\n' +
                    '    <br>\n' +
                    '    <Input v-model="value2" placeholder="default size"></Input>\n' +
                    '    <br>\n' +
                    '    <Input v-model="value3" size="small" placeholder="small size"></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: \'\',\n' +
                    '                value2: \'\',\n' +
                    '                value3: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '可清空',
            info: '开启属性 clearable 可显示清空按钮。',
            demo: '<i-input v-model="value14" placeholder="Enter something..." ' +
            'clearable style="width: 200px"></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value14" placeholder="Enter something..." ' +
                    'clearable style="width: 200px"></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value14: \'Hello World\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '带Icon的输入框',
            info: '通过 icon 属性可以在输入框右边加一个图标。\n' +
            '\n' +
            '点击图标，会触发 on-click 事件。',
            demo: '<i-input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value4" icon="ios-clock-outline" placeholder="Enter something..." style="width: 200px"></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value4: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '文本域',
            info: '通过设置属性 type 为 textarea 来使用文本域，用于多行输入。\n' +
            '\n' +
            '通过设置属性 rows 控制文本域默认显示的行数。',
            demo: '<i-input v-model="value5" type="textarea" placeholder="Enter something..."></i-input>\n' +
            '    <i-input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>\n' +
                    '    <Input v-model="value6" type="textarea" :rows="4" placeholder="Enter something..."></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value5: \'\',\n' +
                    '                value6: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '适应文本高度的文本域',
            info: '设置属性 autosize，文本域会自动适应高度的变化。\n' +
            '\n' +
            'autosize也可以设定为一个对象，指定最小行数和最大行数。',
            demo: ' <i-input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></i-input>\n' +
            '    <i-input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value7" type="textarea" :autosize="true" placeholder="Enter something..."></Input>\n' +
                    '    <Input v-model="value8" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value7: \'\',\n' +
                    '                value8: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '禁用状态',
            info: '通过添加disabled属性可设置为不可用状态。',
            demo: ' <i-input v-model="value9" disabled placeholder="Enter something..."></i-input>\n' +
            '    <i-input v-model="value10" disabled type="textarea" placeholder="Enter something..."></i-input>',
            code: '<template>\n' +
                    '    <Input v-model="value9" disabled placeholder="Enter something..."></Input>\n' +
                    '    <Input v-model="value10" disabled type="textarea" placeholder="Enter something..."></Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value9: \'\',\n' +
                    '                value10: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '复合型输入框',
            info: '通过前置和后置的 slot 可以实现复合型的输入框。',
            demo:'<i-input v-model="value11">\n' +
            '        <span slot="prepend">http://</span>\n' +
            '        <span slot="append">.com</span>\n' +
            '    </i-input>\n' +
            '    <br>' +
            '<i-input v-model="value12">\n' +
            '        <i-select v-model="select1" slot="prepend" style="width: 80px">\n' +
            '            <i-option value="http">http://</i-option>\n' +
            '            <i-option value="https">https://</i-option>\n' +
            '        </i-select>\n' +
            '        <i-select v-model="select2" slot="append" style="width: 70px">\n' +
            '            <i-option value="com">.com</i-option>\n' +
            '            <i-option value="org">.org</i-option>\n' +
            '            <i-option value="io">.io</i-option>\n' +
            '        </i-select>\n' +
            '    </i-input>' +
            ' <i-input v-model="value13">\n' +
            '        <i-select v-model="select3" slot="prepend" style="width: 80px">\n' +
            '            <i-option value="day">Day</i-option>\n' +
            '            <i-option value="month">Month</i-option>\n' +
            '        </i-select>\n' +
            '        <i-button slot="append" icon="ios-search"></i-button>\n' +
            '    </i-inpu>',

            code: '<template>\n' +
                    '    <Input v-model="value11">\n' +
                    '        <span slot="prepend">http://</span>\n' +
                    '        <span slot="append">.com</span>\n' +
                    '    </Input>\n' +
                    '    <br>\n' +
                    '    <Input v-model="value12">\n' +
                    '        <Select v-model="select1" slot="prepend" style="width: 80px">\n' +
                    '            <Option value="http">http://</Option>\n' +
                    '            <Option value="https">https://</Option>\n' +
                    '        </i-select>\n' +
                    '        <Select v-model="select2" slot="append" style="width: 70px">\n' +
                    '            <Option value="com">.com</Option>\n' +
                    '            <Option value="org">.org</Option>\n' +
                    '            <Option value="io">.io</Option>\n' +
                    '        </Select>\n' +
                    '    </Input>\n' +
                    '    <br>\n' +
                    '    <Input v-model="value13">\n' +
                    '        <Select v-model="select3" slot="prepend" style="width: 80px">\n' +
                    '            <Option value="day">Day</i-option>\n' +
                    '            <Option value="month">Month</Option>\n' +
                    '        </Select>\n' +
                    '        <Button slot="append" icon="ios-search"></Button>\n' +
                    '    </Input>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value11: \'\',\n' +
                    '                value12: \'\',\n' +
                    '                value13: \'\',\n' +
                    '                select1: \'http\',\n' +
                    '                select2: \'com\',\n' +
                    '                select3: \'day\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Input props ',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'type', explain:'输入框类型，可选值为 text、password、textarea、' +
                'url、email、date', type:'String', default:'text'},
                {attr: 'value', explain:'绑定的值，可使用 v-model 双向绑定',
                    type:'String | Number', default:''},
                {attr: 'size', explain:'输入框尺寸，可选值为large、small、default或者不设置',
                    type:'String', default:''},
                {attr: 'placeholder', explain:'占位文本',
                    type:'String', false:''},
                {attr: 'clearable', explain:'是否显示清空按钮', type:'Boolean',
                    default:'false'},
                {attr: 'disabled', explain:'设置输入框为禁用状态', type:'Boolean',
                    default:'false'},
                {attr: 'readonly', explain:'设置输入框为只读',type:'Boolean',
                    default:'false'},
                {attr: 'maxlength', explain:'最大输入长度', type:'Number', default:''},
                {attr: 'icon', explain:'输入框尾部图标，仅在 text 类型下有效',
                    type:'String ', default:''},
                {attr: 'rows', explain:'文本域默认行数，仅在 textarea 类型下有效',
                    type:'Number ', default:'2'},
                {attr: 'autosize', explain:'自适应内容高度，仅在 textarea 类型下有效，可传入对象，' +
                '如 { minRows: 2, maxRows: 6 }',
                    type:'Boolean | Object ', default:'false'},
                {attr: 'number', explain:'将用户的输入转换为 Number 类型',
                    type:'Boolean ', default:'false'},
                {attr: 'autofocus', explain:'自动获取焦点',
                    type:'Boolean ', default:'false'},
                {attr: 'autocomplete', explain:'原生的自动完成功能，可选值为 off 和 on',
                    type:'String ', default:'off'},
                {attr: 'element-id', explain:'给表单元素设置 id，详见 Form 用法。',
                    type:'String ', default:''},
                {attr: 'spellcheck', explain:'原生的 spellcheck 属性',
                    type:'Boolean ', default:'false'},
            ]
        },
        {
            name: 'Input events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-enter', explain:'按下回车键时触发', default:'无'},
                {attr: 'on-click', explain:'设置 icon 属性后，点击图标时触发',
                    default:'无'},
                {attr: 'on-change', explain:'数据改变时触发', default:'event'},
                {attr: 'on-focus', explain:'输入框聚焦时触发', default:'无'},
                {attr: 'on-blur', explain:'输入框失去焦点时触发\t', default:'无'},
                {attr: 'on-keyup', explain:'原生的 keyup 事件', default:'event'},
                {attr: 'on-keydown', explain:'原生的 keydown 事件', default:'event'},
                {attr: 'on-keypress', explain:'原生的 keypress 事件', default:'event'}
            ]
        },
        {
            name: 'Input slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: 'prepend', explain:'前置内容，仅在 text 类型下有效'},
                {attr: 'append', explain:'后置内容，仅在 text 类型下有效'}
            ]
        },
        {
            name: 'Input methods',
            list: [
                {attr: '方法名', explain:'说明', param:'参数'},
                {attr: 'focus', explain:'手动聚焦输入框', param:'无'}
            ]
        }
    ]
}