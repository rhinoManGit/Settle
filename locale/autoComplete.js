/*
*
* */
module.exports={
    name: 'AutoComplete 自动完成',
    class: 'autocomplete',
    outline: '输入框自动完成功能。',
    tips:'注意：非 template/render 模式下，AutoComplete需使用 auto-complete。',
    list:[
        {
            title: '基础用法',
            info: '基本用法，通过 data 设置自动完成的数据源。',
            demo: '<auto-complete\n' +
            '        v-model="value1"\n' +
            '        :data="data1"\n' +
            '        @on-search="handleSearch1"\n' +
            '        placeholder="input here"\n' +
            '        style="width:200px"></auto-complete>',
            code: '<template>\n' +
                    '    <AutoComplete\n' +
                    '        v-model="value1"\n' +
                    '        :data="data1"\n' +
                    '        @on-search="handleSearch1"\n' +
                    '        placeholder="input here"\n' +
                    '        style="width:200px"></AutoComplete>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: \'\',\n' +
                    '                data1: []\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSearch1 (value) {\n' +
                    '                this.data1 = !value ? [] : [\n' +
                    '                    value,\n' +
                    '                    value + value,\n' +
                    '                    value + value + value\n' +
                    '                ];\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义选项',
            info: '除了使用 data，还可以直接传入 Option 组件作为 slot 使用，这样可以自定义显示效果。',
            demo: ' <auto-complete\n' +
            '        v-model="value2"\n' +
            '        @on-search="handleSearch2"\n' +
            '        placeholder="input here"\n' +
            '        style="width:200px">\n' +
            '        <i-option v-for="item in data2" :value="item" :key="item">{{ item }}</i-option>\n' +
            '    </auto-complete>',
            code: '<template>\n' +
                    '    <AutoComplete\n' +
                    '        v-model="value2"\n' +
                    '        @on-search="handleSearch2"\n' +
                    '        placeholder="input here"\n' +
                    '        style="width:200px">\n' +
                    '        <Option v-for="item in data2" :value="item" :key="item">{{ item }}</Option>\n' +
                    '    </AutoComplete>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value2: \'\',\n' +
                    '                data2: []\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSearch2 (value) {\n' +
                    '                this.data2 = !value || value.indexOf(\'@\') >= 0 ? [] : [\n' +
                    '                    value + \'@qq.com\',\n' +
                    '                    value + \'@sina.com\',\n' +
                    '                    value + \'@163.com\'\n' +
                    '                ];\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不区分大小写',
            info: '不区分大小写的 AutoComplete，及过滤的用法。',
            demo: ' <auto-complete\n' +
            '        v-model="value3"\n' +
            '        :data="data3"\n' +
            '        :filter-method="filterMethod"\n' +
            '        placeholder="input here"\n' +
            '        style="width:200px">\n' +
            '    </auto-complete>',
            code: '<template>\n' +
                    '    <AutoComplete\n' +
                    '        v-model="value3"\n' +
                    '        :data="data3"\n' +
                    '        :filter-method="filterMethod"\n' +
                    '        placeholder="input here"\n' +
                    '        style="width:200px">\n' +
                    '    </AutoComplete>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value3: \'\',\n' +
                    '                data3: [\'Steve Jobs\', \'Stephen Gary Wozniak\', \'Jonathan Paul Ive\']\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            filterMethod (value, option) {\n' +
                    '                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '查询模式',
            info: '完全自定义 Option，显示复杂的布局。',
            demo: ' <auto-complete\n' +
            '        v-model="value4"\n' +
            '        icon="ios-search"\n' +
            '        placeholder="input here"\n' +
            '        style="width:300px">\n' +
            '        <div class="demo-auto-complete-item" v-for="item in data4">\n' +
            '            <div class="demo-auto-complete-group">\n' +
            '                <span>{{ item.title }}</span>\n' +
            '                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>\n' +
            '            </div>\n' +
            '            <i-option v-for="option in item.children" :value="option.title" :key="option.title">\n' +
            '                <span class="demo-auto-complete-title">{{ option.title }}</span>\n' +
            '                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>\n' +
            '            </i-option>\n' +
            '        </div>\n' +
            '        <a href="" target="_blank" class="demo-auto-complete-more">查看所有结果</a>\n' +
            '    </auto-complete>',
            code: '<template>\n' +
                    '    <AutoComplete\n' +
                    '        v-model="value4"\n' +
                    '        icon="ios-search"\n' +
                    '        placeholder="input here"\n' +
                    '        style="width:300px">\n' +
                    '        <div class="demo-auto-complete-item" v-for="item in data4">\n' +
                    '            <div class="demo-auto-complete-group">\n' +
                    '                <span>{{ item.title }}</span>\n' +
                    '                <a href="https://www.google.com/search?q=iView" target="_blank">更多</a>\n' +
                    '            </div>\n' +
                    '            <Option v-for="option in item.children" :value="option.title" :key="option.title">\n' +
                    '                <span class="demo-auto-complete-title">{{ option.title }}</span>\n' +
                    '                <span class="demo-auto-complete-count">{{ option.count }} 人关注</span>\n' +
                    '            </Option>\n' +
                    '        </div>\n' +
                    '        <a href="https://www.google.com/search?q=iView" target="_blank" class="demo-auto-complete-more">查看所有结果</a>\n' +
                    '    </AutoComplete>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value4: \'\',\n' +
                    '                data4: [\n' +
                    '                    {\n' +
                    '                        title: \'话题\',\n' +
                    '                        children: [\n' +
                    '                            {\n' +
                    '                                title: \'iView\',\n' +
                    '                                count: 10000,\n' +
                    '\n' +
                    '                            },\n' +
                    '                            {\n' +
                    '                                title: \'iView UI\',\n' +
                    '                                count: 10600,\n' +
                    '\n' +
                    '                            }\n' +
                    '                        ]\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        title: \'问题\',\n' +
                    '                        children: [\n' +
                    '                            {\n' +
                    '                                title: \'iView UI 有多好\',\n' +
                    '                                count: 60100,\n' +
                    '\n' +
                    '                            },\n' +
                    '                            {\n' +
                    '                                title: \'iView 是啥\',\n' +
                    '                                count: 30010,\n' +
                    '\n' +
                    '                            }\n' +
                    '                        ]\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        title: \'文章\',\n' +
                    '                        children: [\n' +
                    '                            {\n' +
                    '                                title: \'iView 是一个设计语言\',\n' +
                    '                                count: 100000,\n' +
                    '\n' +
                    '                            }\n' +
                    '                        ]\n' +
                    '                    }\n' +
                    '                ]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n' +
                    '<style>\n' +
                    '    .demo-auto-complete-item{\n' +
                    '        padding: 4px 0;\n' +
                    '        border-bottom: 1px solid #F6F6F6;\n' +
                    '    }\n' +
                    '    .demo-auto-complete-group{\n' +
                    '        font-size: 12px;\n' +
                    '        padding: 4px 6px;\n' +
                    '    }\n' +
                    '    .demo-auto-complete-group span{\n' +
                    '        color: #666;\n' +
                    '        font-weight: bold;\n' +
                    '    }\n' +
                    '    .demo-auto-complete-group a{\n' +
                    '        float: right;\n' +
                    '    }\n' +
                    '    .demo-auto-complete-count{\n' +
                    '        float: right;\n' +
                    '        color: #999;\n' +
                    '    }\n' +
                    '    .demo-auto-complete-more{\n' +
                    '        display: block;\n' +
                    '        margin: 0 auto;\n' +
                    '        padding: 4px;\n' +
                    '        text-align: center;\n' +
                    '        font-size: 12px;\n' +
                    '    }\n' +
                    '</style>'
        }
    ],

    api: [
        {
            name: 'AutoComplete props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'说明', type:'String | Number', default:'-'},
                {attr: 'data', explain:'说明', type:'Array', default:'[]'},
                {attr: 'clearable', explain:'说明', type:'Boolean', default:'false'},
                {attr: 'disabled', explain:'说明', type:'Boolean', default:'false'},
                {attr: 'placeholder', explain:'说明', type:'String', default:'-'},
                {attr: 'size', explain:'说明', type:'String', default:'-'},
                {attr: 'icon', explain:'说明', type:'String', default:'-'},
                {attr: 'filter-method', explain:'说明', type:'Function | Boolean', default:'false'},
                {attr: 'placement', explain:'说明', type:'String', default:'bottom'},
                {attr: 'transfer', explain:'说明', type:'Boolean', default:'false'},
                {attr: 'element-id\t', explain:'说明', type:'String', default:'-'}
            ]
        },
        {
            name: 'AutoComplete events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'选中 option，或 input 的 value ' +
                '变化时，调用此函数', default:'value'},
                {attr: 'on-select', explain:'被选中时调用，参数为选中项的 value 值', default:'value'},
                {attr: 'on-search', explain:'搜索补全项的时候调用\t', default:'query'}
            ]
        }
    ]
}