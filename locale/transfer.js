/*
*
* */
module.exports={
    name: 'Transfer 穿梭框',
    class: 'transfer',
    outline: '双栏穿梭选择框，常用于将多个项目从一边移动到另一边。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: 'Transfer 组件主要基于以下四个 API 来使用：\n' +
            '\n' +
            ':data：总体数据，数组，每项为一个对象，且必须含有 key 值，组件基于此做索引。\n' +
            ':target-keys：目标列索引集合，数组，每项为数据的 key 值，Transfer 会将含有这些 key 值的数据筛选到右边。\n' +
            ':render-format：每行数据显示的格式函数，默认优先显示 label 值，没有时显示 key 值，可以自己组合出需要的数据格式。\n' +
            '@on-change：当点击转移按钮时，组件本身并不会转移数据，而是触发事件，由用户来操作数据。' +
            '<br>基本用法，展示了 data、target-keys、每行的渲染函数 render-format 以及回调函数 on-change 的用法。',
            demo: '<Transfer\n' +
            '        :data="data71"\n' +
            '        :target-keys="targetKeys1"\n' +
            '        :render-format="render1"\n' +
            '        @on-change="handleChange1"></Transfer>',
            code: '<template>\n' +
                    '    <Transfer\n' +
                    '        :data="data1"\n' +
                    '        :target-keys="targetKeys1"\n' +
                    '        :render-format="render1"\n' +
                    '        @on-change="handleChange1"></Transfer>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data1: this.getMockData(),\n' +
                    '                targetKeys1: this.getTargetKeys()\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            getMockData () {\n' +
                    '                let mockData = [];\n' +
                    '                for (let i = 1; i <= 20; i++) {\n' +
                    '                    mockData.push({\n' +
                    '                        key: i.toString(),\n' +
                    '                        label: \'Content \' + i,\n' +
                    '                        description: \'The desc of content  \' + i,\n' +
                    '                        disabled: Math.random() * 3 < 1\n' +
                    '                    });\n' +
                    '                }\n' +
                    '                return mockData;\n' +
                    '            },\n' +
                    '            getTargetKeys () {\n' +
                    '                return this.getMockData()\n' +
                    '                        .filter(() => Math.random() * 2 > 1)\n' +
                    '                        .map(item => item.key);\n' +
                    '            },\n' +
                    '            render1 (item) {\n' +
                    '                return item.label;\n' +
                    '            },\n' +
                    '            handleChange1 (newTargetKeys, direction, moveKeys) {\n' +
                    '                console.log(newTargetKeys);\n' +
                    '                console.log(direction);\n' +
                    '                console.log(moveKeys);\n' +
                    '                this.targetKeys1 = newTargetKeys;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '搜索',
            info: '通过设置属性 filterable 可以进行搜索，可以自定义搜索函数。',
            demo: '<Transfer\n' +
            '        :data="data72"\n' +
            '        :target-keys="targetKeys2"\n' +
            '        filterable\n' +
            '        :filter-method="filterMethod71"\n' +
            '        @on-change="handleChange2"></Transfer>',
            code: '<template>\n' +
                    '    <Transfer\n' +
                    '        :data="data2"\n' +
                    '        :target-keys="targetKeys2"\n' +
                    '        filterable\n' +
                    '        :filter-method="filterMethod71"\n' +
                    '        @on-change="handleChange2"></Transfer>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data2: this.getMockData(),\n' +
                    '                targetKeys2: this.getTargetKeys()\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            getMockData () {\n' +
                    '                let mockData = [];\n' +
                    '                for (let i = 1; i <= 20; i++) {\n' +
                    '                    mockData.push({\n' +
                    '                        key: i.toString(),\n' +
                    '                        label: \'Content \' + i,\n' +
                    '                        description: \'The desc of content  \' + i,\n' +
                    '                        disabled: Math.random() * 3 < 1\n' +
                    '                    });\n' +
                    '                }\n' +
                    '                return mockData;\n' +
                    '            },\n' +
                    '            getTargetKeys () {\n' +
                    '                return this.getMockData()\n' +
                    '                        .filter(() => Math.random() * 2 > 1)\n' +
                    '                        .map(item => item.key);\n' +
                    '            },\n' +
                    '            handleChange2 (newTargetKeys) {\n' +
                    '                this.targetKeys2 = newTargetKeys;\n' +
                    '            },\n' +
                    '            filterMethod (data, query) {\n' +
                    '                return data.label.indexOf(query) > -1;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '高级用法',
            info: '穿梭框高级用法，可以自定义两列的宽高、操作文案，以及底部自定义操作，更多配置见 API。',
            demo: '<Transfer\n' +
            '        :data="data73"\n' +
            '        :target-keys="targetKeys3"\n' +
            '        :list-style="listStyle"\n' +
            '        :render-format="render3"\n' +
            '        :operations="[\'To left\',\'To right\']"\n' +
            '        filterable\n' +
            '        @on-change="handleChange3">\n' +
            '        <div :style="{float: \'right\', margin: \'5px\'}">\n' +
            '            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>\n' +
            '        </div>\n' +
            '    </Transfer>',
            code: '<template>\n' +
                    '    <Transfer\n' +
                    '        :data="data3"\n' +
                    '        :target-keys="targetKeys3"\n' +
                    '        :list-style="listStyle"\n' +
                    '        :render-format="render3"\n' +
                    '        :operations="[\'To left\',\'To right\']"\n' +
                    '        filterable\n' +
                    '        @on-change="handleChange3">\n' +
                    '        <div :style="{float: \'right\', margin: \'5px\'}">\n' +
                    '            <Button type="ghost" size="small" @click="reloadMockData">Refresh</Button>\n' +
                    '        </div>\n' +
                    '    </Transfer>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data3: this.getMockData(),\n' +
                    '                targetKeys3: this.getTargetKeys(),\n' +
                    '                listStyle: {\n' +
                    '                    width: \'250px\',\n' +
                    '                    height: \'300px\'\n' +
                    '                }\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            getMockData () {\n' +
                    '                let mockData = [];\n' +
                    '                for (let i = 1; i <= 20; i++) {\n' +
                    '                    mockData.push({\n' +
                    '                        key: i.toString(),\n' +
                    '                        label: \'Content \' + i,\n' +
                    '                        description: \'The desc of content  \' + i,\n' +
                    '                        disabled: Math.random() * 3 < 1\n' +
                    '                    });\n' +
                    '                }\n' +
                    '                return mockData;\n' +
                    '            },\n' +
                    '            getTargetKeys () {\n' +
                    '                return this.getMockData()\n' +
                    '                        .filter(() => Math.random() * 2 > 1)\n' +
                    '                        .map(item => item.key);\n' +
                    '            },\n' +
                    '            handleChange3 (newTargetKeys) {\n' +
                    '                this.targetKeys3 = newTargetKeys;\n' +
                    '            },\n' +
                    '            render3 (item) {\n' +
                    '                return item.label + \' - \' + item.description;\n' +
                    '            },\n' +
                    '            reloadMockData () {\n' +
                    '                this.data3 = this.getMockData();\n' +
                    '                this.targetKeys3 = this.getTargetKeys();\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义渲染行数据',
            info: '可以通过 render-format 来渲染复杂的数据。',
            demo: '<Transfer\n' +
            '        :data="data74"\n' +
            '        :target-keys="targetKeys4"\n' +
            '        :render-format="render4"\n' +
            '        @on-change="handleChange4"></Transfer>',
            code: '<template>\n' +
                    '    <Transfer\n' +
                    '        :data="data4"\n' +
                    '        :target-keys="targetKeys4"\n' +
                    '        :render-format="render4"\n' +
                    '        @on-change="handleChange4"></Transfer>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                data4: this.getMockData(),\n' +
                    '                targetKeys4: this.getTargetKeys()\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            getMockData () {\n' +
                    '                let mockData = [];\n' +
                    '                for (let i = 1; i <= 20; i++) {\n' +
                    '                    mockData.push({\n' +
                    '                        key: i.toString(),\n' +
                    '                        label: \'Content \' + i,\n' +
                    '                        description: \'The desc of content  \' + i,\n' +
                    '                        disabled: Math.random() * 3 < 1\n' +
                    '                    });\n' +
                    '                }\n' +
                    '                return mockData;\n' +
                    '            },\n' +
                    '            getTargetKeys () {\n' +
                    '                return this.getMockData()\n' +
                    '                        .filter(() => Math.random() * 2 > 1)\n' +
                    '                        .map(item => item.key);\n' +
                    '            },\n' +
                    '            handleChange4 (newTargetKeys) {\n' +
                    '                this.targetKeys4 = newTargetKeys;\n' +
                    '            },\n' +
                    '            render4 (item) {\n' +
                    '                return item.label + \' - \' + item.description;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Transfer props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'data', explain:'数据源，其中的数据将会被渲染到左边一栏中，targetKeys 中指定的除外。', type:'Array', default:'[]'},
                {attr: 'targetKeys', explain:'显示在右侧框数据的key集合\t', type:'Array', default:'[]'},
                {attr: 'render-format\t', explain:'每行数据渲染函数，该函数的入参为 data 中的项\t', type:'Function', default:'默认显示label，没有时显示key'},
                {attr: 'selected-keys\t', explain:'设置哪些项应该被选中\t', type:'Array', default:'[]'},
                {attr: 'list-style\t', explain:'两个穿梭框的自定义样式\t', type:'Object', default:'{}'},
                {attr: 'titles', explain:'标题集合，顺序从左至右\t', type:'Array', default:'[\'源列表\', \'目的列表\']'},
                {attr: 'operations', explain:'操作文案集合，顺序从上至下\t', type:'Array', default:'[]'},
                {attr: 'filterable', explain:'是否显示搜索框\t', type:'Boolean', default:'false'},
                {attr: 'filter-placeholder', explain:'搜索框的占位\t', type:'String', default:'请输入搜索内容\n'},
                {attr: 'filter-method\t', explain:'自定义搜索函数，入参为 data 和 query，data 为项，query 为当前输入的搜索词\t', type:'Function', default:'默认搜索label\n'},
                {attr: 'not-found-text\t', explain:'当列表为空时显示的内容\t', type:'String', default:'列表为空\n'}
            ]
        },
        {
            name: 'Transfer events',
            list: [
                {attr: '事件名\t', explain:'说明', default:'返回值\n'},
                {attr: 'on-change', explain:'选项在两栏之间转移时的回调函数\t', default:'targetKeys, direction, moveKeys\n'},
                {attr: 'on-selected-change\t', explain:'选中项发生变化时触发\t', default:'sourceSelectedKeys, targetSelectedKeys\n'}
            ]
        },
        {
            name: 'Transfer slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'自定义底部内容\n'}
            ]
        },
    ]
}