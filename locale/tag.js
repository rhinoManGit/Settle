/*
*
* */
module.exports={
    name: 'Tag 标签',
    class: 'tag',
    outline: '对不同维度进行简单的标记和分类。',
    tips:'注意：非 template/render 模式下，Button 用 i-button，ButtonGroup用button-group。',
    list:[
        {
            title: '基本用法',
            info: '简单的展示，添加属性closable可以关闭标签。\n' +
            '\n' +
            '点击关闭标签时，会触发 on-close 事件，需自己实现关闭逻辑。',
            demo: '<Tag>标签一</Tag>\n' +
            '    <Tag>标签二</Tag>\n' +
            '    <Tag v-if="show33" closable @on-close="handleClose33">标签三</Tag>',
            code: '<template>\n' +
                    '    <Tag>标签一</Tag>\n' +
                    '    <Tag>标签二</Tag>\n' +
                    '    <Tag v-if="show" closable @on-close="handleClose">标签三</Tag>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                show: true\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleClose () {\n' +
                    '                this.show = false;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '样式类型',
            info: '通过设置 type 属性为 border 或 dot 来选择不同的样式类型。建议有关闭的某些场景下使用 border，图例的场景下使用 dot。',
            demo: '<Tag type="border">标签三</Tag>\n' +
            '    <Tag type="border" closable>标签四</Tag>\n' +
            '    <Tag type="dot">标签一</Tag>\n' +
            '    <Tag type="dot" closable>标签二</Tag>',
            code: '<template>\n' +
                    '    <Tag type="border">标签三</Tag>\n' +
                    '    <Tag type="border" closable>标签四</Tag>\n' +
                    '    <Tag type="dot">标签一</Tag>\n' +
                    '    <Tag type="dot" closable>标签二</Tag>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '各种颜色',
            info: '四种预设颜色，可自定义颜色',
            demo: '<Tag closable color="blue">标签一</Tag>\n' +
            '    <Tag closable color="green">标签二</Tag>\n' +
            '    <Tag closable color="red">标签三</Tag>\n' +
            '    <Tag closable color="yellow">标签四</Tag>\n' +
            '    <br><br>\n' +
            '    <Tag type="border" closable color="blue">标签一</Tag>\n' +
            '    <Tag type="border" closable color="green">标签二</Tag>\n' +
            '    <Tag type="border" closable color="red">标签三</Tag>\n' +
            '    <Tag type="border" closable color="yellow">标签四</Tag>\n' +
            '    <br><br>\n' +
            '    <Tag type="dot" closable color="blue">标签一</Tag>\n' +
            '    <Tag type="dot" closable color="green">标签二</Tag>\n' +
            '    <Tag type="dot" closable color="red">标签三</Tag>\n' +
            '    <Tag type="dot" closable color="yellow">标签四</Tag>\n' +
            '    <br><br>\n' +
            '    <Tag closable color="#EF6AFF" checkable>标签一</Tag>\n' +
            '    <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>\n' +
            '    <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>\n' +
            '    <Tag closable color="default" checkable>标签四</Tag>',
            code: '<template>\n' +
                    '    <Tag closable color="blue">标签一</Tag>\n' +
                    '    <Tag closable color="green">标签二</Tag>\n' +
                    '    <Tag closable color="red">标签三</Tag>\n' +
                    '    <Tag closable color="yellow">标签四</Tag>\n' +
                    '    <br><br>\n' +
                    '    <Tag type="border" closable color="blue">标签一</Tag>\n' +
                    '    <Tag type="border" closable color="green">标签二</Tag>\n' +
                    '    <Tag type="border" closable color="red">标签三</Tag>\n' +
                    '    <Tag type="border" closable color="yellow">标签四</Tag>\n' +
                    '    <br><br>\n' +
                    '    <Tag type="dot" closable color="blue">标签一</Tag>\n' +
                    '    <Tag type="dot" closable color="green">标签二</Tag>\n' +
                    '    <Tag type="dot" closable color="red">标签三</Tag>\n' +
                    '    <Tag type="dot" closable color="yellow">标签四</Tag>\n' +
                    '    <br><br>\n' +
                    '    <Tag closable color="#EF6AFF" checkable>标签一</Tag>\n' +
                    '    <Tag type="border" closable color="#EF6AFF" checkable>标签二</Tag>\n' +
                    '    <Tag type="dot" closable color="#EF6AFF" checkable>标签三</Tag>\n' +
                    '    <Tag closable color="default" checkable>标签四</Tag>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '可选择',
            info: '设置属性 checkable，可以对标签进行选择，属性 checked 控制当前选择状态。',
            demo: '<Tag checkable color="blue">标签一</Tag>\n' +
            '    <Tag checkable color="green">标签二</Tag>\n' +
            '    <Tag checkable color="red">标签三</Tag>\n' +
            '    <Tag checkable color="yellow">标签四</Tag>',
            code: '<template>\n' +
                    '    <Tag checkable color="blue">标签一</Tag>\n' +
                    '    <Tag checkable color="green">标签二</Tag>\n' +
                    '    <Tag checkable color="red">标签三</Tag>\n' +
                    '    <Tag checkable color="yellow">标签四</Tag>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '动态添加和删除',
            info: '用数组生成一组标签，可以动态添加和删除。\n' +
            '\n',
            demo: '<Tag v-for="item in count33" :key="item" :name="item" closable @on-close="handleClose332">标签{{ item + 1 }}</Tag>\n' +
            '    <i-button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd33">添加标签</i-button>',
            code: '<template>\n' +
                    '    <Tag v-for="item in count" :key="item" :name="item" closable @on-close="handleClose2">标签{{ item + 1 }}</Tag>\n' +
                    '    <Button icon="ios-plus-empty" type="dashed" size="small" @click="handleAdd">添加标签</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                count: [0, 1, 2]\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleAdd () {\n' +
                    '                if (this.count.length) {\n' +
                    '                    this.count.push(this.count[this.count.length - 1] + 1);\n' +
                    '                } else {\n' +
                    '                    this.count.push(0);\n' +
                    '                }\n' +
                    '            },\n' +
                    '            handleClose2 (event, name) {\n' +
                    '                const index = this.count.indexOf(name);\n' +
                    '                this.count.splice(index, 1);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Tag props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'closable', explain:'标签是否可以关闭\t', type:'Boolean', default:'false'},
                {attr: 'checkable', explain:'标签是否可以选择\t', type:'Boolean', default:'false'},
                {attr: 'checked', explain:'标签的选中状态\t', type:'Boolean', default:'true'},
                {attr: 'type', explain:'标签的样式类型，可选值为 border、dot或不填\t', type:'String', default:'-'},
                {attr: 'color', explain:'标签颜色，预设颜色值为blue、green、red、yellow、default，你也可以自定义颜色值。\t', type:'String', default:'-'},
                {attr: 'name', explain:'当前标签的名称，使用 v-for，并支持关闭时，会比较有用\t', type:'String | Number', default:'-'}
            ]
        },
        {
            name: 'Tag events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-close\t', explain:'关闭时触发\t', default:'event, name\n'}
            ]
        },
    ]
}