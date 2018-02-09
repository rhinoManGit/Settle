/*
*
* */
module.exports={
    name: 'Cascader 级联选择',
    class: 'cascader',
    outline: '从一组相关联的数据集合中进行选择，常用于省市区、公司级层、事务分类等。\n' +
    '\n' +
    '相比 Select 组件，可以一次性完成选择，体验更好。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '级联选择对数据有较严格要求，请参照示例的格式使用data，每项数据至少包含 value、label 两项，子集为 children，以此类推。\n' +
            '\n' +
            'value 为当前选择的数据的 value 值的数组，比如 [\'beijing\', \'gugong\'] ，按照级联顺序依次排序，使用 v-model 进行双向绑定。',
            demo: '<Cascader :data="data61" v-model="value61"></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data61" v-model="value1"></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: [],\n' +
                    '                data: [{\n' +
                    '                    value: \'beijing\',\n' +
                    '                    label: \'北京\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'gugong\',\n' +
                    '                            label: \'故宫\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'tiantan\',\n' +
                    '                            label: \'天坛\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'wangfujing\',\n' +
                    '                            label: \'王府井\'\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'nanjing\',\n' +
                    '                            label: \'南京\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'fuzimiao\',\n' +
                    '                                    label: \'夫子庙\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'suzhou\',\n' +
                    '                            label: \'苏州\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'zhuozhengyuan\',\n' +
                    '                                    label: \'拙政园\',\n' +
                    '                                },\n' +
                    '                                {\n' +
                    '                                    value: \'shizilin\',\n' +
                    '                                    label: \'狮子林\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        }\n' +
                    '                    ],\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '默认值',
            info: '指定 value 默认值，组件会在初始化时选定数据。',
            demo: '<Cascader :data="data62" v-model="value62"></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data" v-model="value2"></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value2: [\'jiangsu\', \'suzhou\', \'zhuozhengyuan\'],\n' +
                    '                data: [{\n' +
                    '                    value: \'beijing\',\n' +
                    '                    label: \'北京\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'gugong\',\n' +
                    '                            label: \'故宫\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'tiantan\',\n' +
                    '                            label: \'天坛\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'wangfujing\',\n' +
                    '                            label: \'王府井\'\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'nanjing\',\n' +
                    '                            label: \'南京\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'fuzimiao\',\n' +
                    '                                    label: \'夫子庙\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'suzhou\',\n' +
                    '                            label: \'苏州\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'zhuozhengyuan\',\n' +
                    '                                    label: \'拙政园\',\n' +
                    '                                },\n' +
                    '                                {\n' +
                    '                                    value: \'shizilin\',\n' +
                    '                                    label: \'狮子林\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        }\n' +
                    '                    ],\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '移入展开',
            info: '设置属性 trigger 为 hover，当鼠标悬停时就会展开子集。',
            demo: '<Cascader :data="data64" trigger="hover"></Cascader>',
            code: '<template>\n' +
                            '    <Cascader :data="data" trigger="hover"></Cascader>\n' +
                            '</template>\n' +
                            '<script>\n' +
                            '    export default {\n' +
                            '        data () {\n' +
                            '            return {\n' +
                            '                data: [{\n' +
                            '                    value: \'beijing\',\n' +
                            '                    label: \'北京\',\n' +
                            '                    children: [\n' +
                            '                        {\n' +
                            '                            value: \'gugong\',\n' +
                            '                            label: \'故宫\'\n' +
                            '                        },\n' +
                            '                        {\n' +
                            '                            value: \'tiantan\',\n' +
                            '                            label: \'天坛\'\n' +
                            '                        },\n' +
                            '                        {\n' +
                            '                            value: \'wangfujing\',\n' +
                            '                            label: \'王府井\'\n' +
                            '                        }\n' +
                            '                    ]\n' +
                            '                }, {\n' +
                            '                    value: \'jiangsu\',\n' +
                            '                    label: \'江苏\',\n' +
                            '                    children: [\n' +
                            '                        {\n' +
                            '                            value: \'nanjing\',\n' +
                            '                            label: \'南京\',\n' +
                            '                            children: [\n' +
                            '                                {\n' +
                            '                                    value: \'fuzimiao\',\n' +
                            '                                    label: \'夫子庙\',\n' +
                            '                                }\n' +
                            '                            ]\n' +
                            '                        },\n' +
                            '                        {\n' +
                            '                            value: \'suzhou\',\n' +
                            '                            label: \'苏州\',\n' +
                            '                            children: [\n' +
                            '                                {\n' +
                            '                                    value: \'zhuozhengyuan\',\n' +
                            '                                    label: \'拙政园\',\n' +
                            '                                },\n' +
                            '                                {\n' +
                            '                                    value: \'shizilin\',\n' +
                            '                                    label: \'狮子林\',\n' +
                            '                                }\n' +
                            '                            ]\n' +
                            '                        }\n' +
                            '                    ],\n' +
                            '                }]\n' +
                            '            }\n' +
                            '        }\n' +
                            '    }\n' +
                            '</script>'
        },
        {
            title: '自定义显示',
            info: '通过设置 slot 可以自定义显示内容，不局限于输入框。',
            demo: '{{ text }}\n' +
            '    <Cascader :data="data63" @on-change="handleChange">\n' +
            '        <a href="javascript:void(0)">选择</a>\n' +
            '    </Cascader>',
            code: '<template>\n' +
                    '    {{ text }}\n' +
                    '    <Cascader :data="data" @on-change="handleChange">\n' +
                    '        <a href="javascript:void(0)">选择</a>\n' +
                    '    </Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                text: \'未选择\',\n' +
                    '                data: [{\n' +
                    '                    value: \'beijing\',\n' +
                    '                    label: \'北京\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'gugong\',\n' +
                    '                            label: \'故宫\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'tiantan\',\n' +
                    '                            label: \'天坛\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'wangfujing\',\n' +
                    '                            label: \'王府井\'\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'nanjing\',\n' +
                    '                            label: \'南京\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'fuzimiao\',\n' +
                    '                                    label: \'夫子庙\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'suzhou\',\n' +
                    '                            label: \'苏州\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'zhuozhengyuan\',\n' +
                    '                                    label: \'拙政园\',\n' +
                    '                                },\n' +
                    '                                {\n' +
                    '                                    value: \'shizilin\',\n' +
                    '                                    label: \'狮子林\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        }\n' +
                    '                    ],\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleChange (value, selectedData) {\n' +
                    '                this.text = selectedData.map(o => o.label).join(\', \');\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '禁用',
            info: '设置属性 disabled 可以禁用组件。\n' +
            '\n' +
            '给某项数据设置 disabled: true 可以禁用某一项。',
            demo: '    <Cascader :data="data62" disabled></Cascader>\n' +
            '    <Cascader :data="data62"></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data2" disabled></Cascader>\n' +
                    '    <Cascader :data="data2"></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data2: [{\n' +
                    '                    value: \'zhejiang\',\n' +
                    '                    label: \'浙江\',\n' +
                    '                    children: [{\n' +
                    '                        value: \'hangzhou\',\n' +
                    '                        label: \'杭州\',\n' +
                    '                        children: [{\n' +
                    '                            value: \'xihu\',\n' +
                    '                            label: \'西湖\'\n' +
                    '                        }]\n' +
                    '                    }]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    disabled: true,\n' +
                    '                    children: [{\n' +
                    '                        value: \'nanjing\',\n' +
                    '                        label: \'南京\',\n' +
                    '                        children: [{\n' +
                    '                            value: \'zhonghuamen\',\n' +
                    '                            label: \'中华门\'\n' +
                    '                        }]\n' +
                    '                    }]\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '选择即改变',
            info: '设置属性 change-on-select 点任何一级都可以选择。',
            demo: '<Cascader :data="data62" change-on-select></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data" change-on-select></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data: [{\n' +
                    '                    value: \'beijing\',\n' +
                    '                    label: \'北京\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'gugong\',\n' +
                    '                            label: \'故宫\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'tiantan\',\n' +
                    '                            label: \'天坛\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'wangfujing\',\n' +
                    '                            label: \'王府井\'\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'nanjing\',\n' +
                    '                            label: \'南京\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'fuzimiao\',\n' +
                    '                                    label: \'夫子庙\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'suzhou\',\n' +
                    '                            label: \'苏州\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'zhuozhengyuan\',\n' +
                    '                                    label: \'拙政园\',\n' +
                    '                                },\n' +
                    '                                {\n' +
                    '                                    value: \'shizilin\',\n' +
                    '                                    label: \'狮子林\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        }\n' +
                    '                    ],\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义已选项',
            info: '对于显示的结果，可以通过 render-format 接收一个函数来自定义。\n' +
            '\n' +
            '其中第一个参数 labels 是当前选择的label的集合，第二个参数 selectedData 是当前选择的数据集合，可以利用它们组合出你想要显示的内容。',
            demo: '<Cascader :data="data63" :render-format="format"></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data3" :render-format="format"></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data3: [{\n' +
                    '                    value: \'zhejiang\',\n' +
                    '                    label: \'浙江\',\n' +
                    '                    children: [{\n' +
                    '                        value: \'hangzhou\',\n' +
                    '                        label: \'杭州\',\n' +
                    '                        children: [{\n' +
                    '                            value: \'xihu\',\n' +
                    '                            label: \'西湖\',\n' +
                    '                            code: 310000\n' +
                    '                        }]\n' +
                    '                    }]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [{\n' +
                    '                        value: \'nanjing\',\n' +
                    '                        label: \'南京\',\n' +
                    '                        children: [{\n' +
                    '                            value: \'zhonghuamen\',\n' +
                    '                            label: \'中华门\',\n' +
                    '                            code: 210000\n' +
                    '                        }]\n' +
                    '                    }]\n' +
                    '                }]\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            format (labels, selectedData) {\n' +
                    '                const index = labels.length - 1;\n' +
                    '                const data = selectedData[index] || false;\n' +
                    '                if (data && data.code) {\n' +
                    '                    return labels[index] + \' - \' + data.code;\n' +
                    '                }\n' +
                    '                return labels[index];\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '尺寸',
            info: '通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。',
            demo: '<Cascader :data="data62" size="large"></Cascader>\n' +
            '    <br>\n' +
            '    <Cascader :data="data62"></Cascader>\n' +
            '    <br>\n' +
            '    <Cascader :data="data62" size="small"></Cascader>',
            code: '<template>\n' +
                    '    <Cascader :data="data4" :load-data="loadData"></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data4: [\n' +
                    '                    {\n' +
                    '                        value: \'beijing\',\n' +
                    '                        label: \'北京\',\n' +
                    '                        children: [],\n' +
                    '                        loading: false\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'hangzhou\',\n' +
                    '                        label: \'杭州\',\n' +
                    '                        children: [],\n' +
                    '                        loading:false\n' +
                    '                    }\n' +
                    '                ]\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            loadData (item, callback) {\n' +
                    '                item.loading = true;\n' +
                    '                setTimeout(() => {\n' +
                    '                    if (item.value === \'beijing\') {\n' +
                    '                        item.children = [\n' +
                    '                            {\n' +
                    '                                value: \'talkingdata\',\n' +
                    '                                label: \'TalkingData\'\n' +
                    '                            },\n' +
                    '                            {\n' +
                    '                                value: \'baidu\',\n' +
                    '                                label: \'百度\'\n' +
                    '                            },\n' +
                    '                            {\n' +
                    '                                value: \'sina\',\n' +
                    '                                label: \'新浪\'\n' +
                    '                            }\n' +
                    '                        ];\n' +
                    '                    } else if (item.value === \'hangzhou\') {\n' +
                    '                        item.children = [\n' +
                    '                            {\n' +
                    '                                value: \'ali\',\n' +
                    '                                label: \'阿里巴巴\'\n' +
                    '                            },\n' +
                    '                            {\n' +
                    '                                value: \'163\',\n' +
                    '                                label: \'网易\'\n' +
                    '                            }\n' +
                    '                        ];\n' +
                    '                    }\n' +
                    '                    item.loading = false;\n' +
                    '                    callback();\n' +
                    '                }, 1000);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '搜索',
            info: '使用属性 filterable 可直接搜索选项并选择。\n' +
            '\n' +
            '暂不支持服务端搜索。',
            demo: '<Cascader v-model="value63" :data="data62" filterable></Cascader>',
            code: '<template>\n' +
                    '    <Cascader v-model="value3" :data="data" filterable></Cascader>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data: [{\n' +
                    '                    value: \'beijing\',\n' +
                    '                    label: \'北京\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'gugong\',\n' +
                    '                            label: \'故宫\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'tiantan\',\n' +
                    '                            label: \'天坛\'\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'wangfujing\',\n' +
                    '                            label: \'王府井\'\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }, {\n' +
                    '                    value: \'jiangsu\',\n' +
                    '                    label: \'江苏\',\n' +
                    '                    children: [\n' +
                    '                        {\n' +
                    '                            value: \'nanjing\',\n' +
                    '                            label: \'南京\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'fuzimiao\',\n' +
                    '                                    label: \'夫子庙\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            value: \'suzhou\',\n' +
                    '                            label: \'苏州\',\n' +
                    '                            children: [\n' +
                    '                                {\n' +
                    '                                    value: \'zhuozhengyuan\',\n' +
                    '                                    label: \'拙政园\',\n' +
                    '                                },\n' +
                    '                                {\n' +
                    '                                    value: \'shizilin\',\n' +
                    '                                    label: \'狮子林\',\n' +
                    '                                }\n' +
                    '                            ]\n' +
                    '                        }\n' +
                    '                    ],\n' +
                    '                }],\n' +
                    '                value3: []\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Cascader props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'data', explain:'可选项的数据源，格式参照示例说明', type:'Array', default:'\t[]\n'},
                {attr: 'value', explain:'当前已选项的数据，格式参照示例说明\t', type:'Array', default:'\t[]\n'},
                {attr: 'render-format', explain:'选择后展示的函数，用于自定义显示格式\t', type:'Function', default:'label => label.join(\' / \')'},
                {attr: 'disabled', explain:'是否禁用选择器\t', type:'Boolean', default:'false'},
                {attr: 'clearable', explain:'是否支持清除\t', type:'Boolean', default:'true'},
                {attr: 'placeholder', explain:'输入框占位符\t', type:'String', default:'\t请选择'},
                {attr: 'trigger', explain:'次级菜单展开方式，可选值为 click 或 hover', type:'String', default:'click'},
                {attr: 'change-on-select', explain:'当此项为 true 时，点选每级菜单选项值都会发生变化，具体见上面的示例', type:'Boolean', default:'false'},
                {attr: 'size', explain:'输入框大小，可选值为large和small或者不填', type:'String', default:'-'},
                {attr: 'load-data', explain:'动态获取数据，数据源需标识 loading\t', type:'Function', default:'-'},
                {attr: 'filterable', explain:'是否支持搜索\t', type:'Boolean', default:'false'},
                {attr: 'not-found-text', explain:'当搜索列表为空时显示的内容\t', type:'String', default:'无匹配数据\n'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type:'Boolean', default:'false'},
                {attr: 'element-id\t', explain:'给表单元素设置 id，详见 Form 用法。', type:'String', default:'-'}
            ]
        },
        {
            name: 'ButtonGroup props',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'选择完成后的回调，返回值 value 即已选值 value，selectedData 为已选项的具体数据', default:'value, selectedData'},
                {attr: 'on-visible-change', explain:'展开和关闭弹窗时触发\t', default:'显示状态，Boolean\n'}
            ]
        },
    ]
}