/*
*
* */
module.exports={
    name: 'Checkbox 多选框',
    class: 'checkbox',
    outline: '基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。',
    tips:'注意：非 template/render 模式下，CheckboxGroup 需使用 checkbox-group。',
    list:[
        {
            title: '单独使用',
            info: '使用 v-model 可以双向绑定数据。',
            demo: '<Checkbox v-model="single">Checkbox</Checkbox>',
            code: '<template>\n' +
                    '    <Checkbox v-model="single">Checkbox</Checkbox>\n' +
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
            info: '使用CheckboxGroup配合数组来生成组合。在组合使用时，Checkbox 使用 label 来自动判断选中状态。每个 Checkbox 的内容可以自定义，如不填写则默认使用 label 的值。',
            demo: ' <checkbox-group v-model="social">\n' +
            '        <Checkbox label="twitter">\n' +
            '            <Icon type="social-twitter"></Icon>\n' +
            '            <span>Twitter</span>\n' +
            '        </Checkbox>\n' +
            '        <Checkbox label="facebook">\n' +
            '            <Icon type="social-facebook"></Icon>\n' +
            '            <span>Facebook</span>\n' +
            '        </Checkbox>\n' +
            '        <Checkbox label="github">\n' +
            '            <Icon type="social-github"></Icon>\n' +
            '            <span>Github</span>\n' +
            '        </Checkbox>\n' +
            '        <Checkbox label="snapchat">\n' +
            '            <Icon type="social-snapchat"></Icon>\n' +
            '            <span>Snapchat</span>\n' +
            '        </Checkbox>\n' +
            '    </checkbox-group>\n' +
            '    <checkbox-group v-model="fruit">\n' +
            '        <Checkbox label="香蕉"></Checkbox>\n' +
            '        <Checkbox label="苹果"></Checkbox>\n' +
            '        <Checkbox label="西瓜"></Checkbox>\n' +
            '    </checkbox-group>',
            code: '<template>\n' +
                    '    <CheckboxGroup v-model="social">\n' +
                    '        <Checkbox label="twitter">\n' +
                    '            <Icon type="social-twitter"></Icon>\n' +
                    '            <span>Twitter</span>\n' +
                    '        </Checkbox>\n' +
                    '        <Checkbox label="facebook">\n' +
                    '            <Icon type="social-facebook"></Icon>\n' +
                    '            <span>Facebook</span>\n' +
                    '        </Checkbox>\n' +
                    '        <Checkbox label="github">\n' +
                    '            <Icon type="social-github"></Icon>\n' +
                    '            <span>Github</span>\n' +
                    '        </Checkbox>\n' +
                    '        <Checkbox label="snapchat">\n' +
                    '            <Icon type="social-snapchat"></Icon>\n' +
                    '            <span>Snapchat</span>\n' +
                    '        </Checkbox>\n' +
                    '    </CheckboxGroup>\n' +
                    '    <CheckboxGroup v-model="fruit">\n' +
                    '        <Checkbox label="香蕉"></Checkbox>\n' +
                    '        <Checkbox label="苹果"></Checkbox>\n' +
                    '        <Checkbox label="西瓜"></Checkbox>\n' +
                    '    </CheckboxGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                social: [\'facebook\', \'github\'],\n' +
                    '                fruit: [\'苹果\']\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不可用',
            info: '通过设置disabled属性来禁用单选框。',
            demo: '<Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>\n' +
            '    <checkbox-group v-model="disabledGroup">\n' +
            '        <Checkbox label="香蕉" disabled></Checkbox>\n' +
            '        <Checkbox label="苹果" disabled></Checkbox>\n' +
            '        <Checkbox label="西瓜"></Checkbox>\n' +
            '    </checkbox-group>',
            code: '<template>\n' +
                    '    <Checkbox v-model="disabledSingle" disabled>Checkbox</Checkbox>\n' +
                    '    <CheckboxGroup v-model="disabledGroup">\n' +
                    '        <Checkbox label="香蕉" disabled></Checkbox>\n' +
                    '        <Checkbox label="苹果" disabled></Checkbox>\n' +
                    '        <Checkbox label="西瓜"></Checkbox>\n' +
                    '    </CheckboxGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                disabledSingle: true,\n' +
                    '                disabledGroup: [\'苹果\']\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '与其它组件通信',
            info: '与其它组件进行数据联动。',
            demo: '<Checkbox v-model="checked" :disabled="disabled">\n' +
            '        <span v-if="checked">Checked</span>\n' +
            '        <span v-else>Unchecked</span>\n' +
            '         - \n' +
            '        <span v-if="!disabled">Usable</span>\n' +
            '        <span v-else>Disabled</span>\n' +
            '    </Checkbox>\n' +
            '    <br>\n' +
            '    <i-button type="primary" @click="checked = !checked">\n' +
            '        <span v-if="!checked">Checked</span>\n' +
            '        <span v-else>Unchecked</span>\n' +
            '    </i-button>\n' +
            '    <i-button type="primary" @click="disabled = !disabled">\n' +
            '        <span v-if="disabled">Usable</span>\n' +
            '        <span v-else>Disabled</span>\n' +
            '    </i-button>',
            code: '<template>\n' +
                    '    <Checkbox v-model="checked" :disabled="disabled">\n' +
                    '        <span v-if="checked">Checked</span>\n' +
                    '        <span v-else>Unchecked</span>\n' +
                    '         - \n' +
                    '        <span v-if="!disabled">Usable</span>\n' +
                    '        <span v-else>Disabled</span>\n' +
                    '    </Checkbox>\n' +
                    '    <br>\n' +
                    '    <Button type="primary" @click="checked = !checked">\n' +
                    '        <span v-if="!checked">Checked</span>\n' +
                    '        <span v-else>Unchecked</span>\n' +
                    '    </Button>\n' +
                    '    <Button type="primary" @click="disabled = !disabled">\n' +
                    '        <span v-if="disabled">Usable</span>\n' +
                    '        <span v-else>Disabled</span>\n' +
                    '    </Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                checked: true,\n' +
                    '                disabled: false\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '全选',
            info: '在实现全选效果时，你可能会用到 indeterminate 属性。示例代码只是一种写法，业务中可以用更多的方法，比如计算属性。',
            demo: ' <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">\n' +
            '        <Checkbox\n' +
            '            :indeterminate="indeterminate"\n' +
            '            :value="checkAll"\n' +
            '            @click.prevent.native="handleCheckAll">全选</Checkbox>\n' +
            '    </div>\n' +
            '    <checkbox-group v-model="checkAllGroup" @on-change="checkAllGroupChange">\n' +
            '        <Checkbox label="香蕉"></Checkbox>\n' +
            '        <Checkbox label="苹果"></Checkbox>\n' +
            '        <Checkbox label="西瓜"></Checkbox>\n' +
            '    </checkbox-group>',
            code: '<template>\n' +
                    '    <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">\n' +
                    '        <Checkbox\n' +
                    '            :indeterminate="indeterminate"\n' +
                    '            :value="checkAll"\n' +
                    '            @click.prevent.native="handleCheckAll">全选</Checkbox>\n' +
                    '    </div>\n' +
                    '    <CheckboxGroup v-model="checkAllGroup" @on-change="checkAllGroupChange">\n' +
                    '        <Checkbox label="香蕉"></Checkbox>\n' +
                    '        <Checkbox label="苹果"></Checkbox>\n' +
                    '        <Checkbox label="西瓜"></Checkbox>\n' +
                    '    </CheckboxGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                indeterminate: true,\n' +
                    '                checkAll: false,\n' +
                    '                checkAllGroup: [\'香蕉\', \'西瓜\']\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleCheckAll () {\n' +
                    '                if (this.indeterminate) {\n' +
                    '                    this.checkAll = false;\n' +
                    '                } else {\n' +
                    '                    this.checkAll = !this.checkAll;\n' +
                    '                }\n' +
                    '                this.indeterminate = false;\n' +
                    '\n' +
                    '                if (this.checkAll) {\n' +
                    '                    this.checkAllGroup = [\'香蕉\', \'苹果\', \'西瓜\'];\n' +
                    '                } else {\n' +
                    '                    this.checkAllGroup = [];\n' +
                    '                }\n' +
                    '            },\n' +
                    '            checkAllGroupChange (data) {\n' +
                    '                if (data.length === 3) {\n' +
                    '                    this.indeterminate = false;\n' +
                    '                    this.checkAll = true;\n' +
                    '                } else if (data.length > 0) {\n' +
                    '                    this.indeterminate = true;\n' +
                    '                    this.checkAll = false;\n' +
                    '                } else {\n' +
                    '                    this.indeterminate = false;\n' +
                    '                    this.checkAll = false;\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Checkbox props ',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'只在单独使用时有效。可以使用 v-model 双向绑定数据', type:'Boolean', default:'false'},
                {attr: 'label', explain:'只在组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中', type:'String | Number | Boolean', default:'-'},
                {attr: 'disabled', explain:'是否禁用当前项',
                    type:'Boolean', default:'false'},
                {attr: 'indeterminate', explain:'设置 indeterminate 状态，只负责样式控制',
                    type:'Boolean', default:'false'},
                {attr: 'size', explain:'多选框的尺寸，可选值为 large、small、default 或者不设置',
                    type:'String', default:''},
                {attr: 'true-value', explain:'选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用', type:'String, Number, Boolean', default:'true'},
                {attr: 'false-value', explain:'没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用', type:'String, Number, Boolean', default:'false'}
            ]
        },
        {
            name: 'Checkbox events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发', default:'true | false'}
            ]
        },
        {
            name: 'CheckboxGroup props',
            list: [
                {attr: '名称', explain:'说明', type:'', default: ''},
                {attr: 'value', explain:'指定选中项目的集合，可以使用 v-model 双向绑定数据', type:'Array', default: '[]'},
                {attr: 'size', explain:'多选框组的尺寸，可选值为 large、small、default 或者不设置', type:'String', default: ''}
            ]
        },
        {
            name: 'RadioGroup events',
            list: [
                {attr: '事件名', explain:'说明', param:'返回值'},
                {attr: 'on-change', explain:'在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发', param:'[...]'}
            ]
        }
    ]
}