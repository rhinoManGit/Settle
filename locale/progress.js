/*
*
* */
module.exports={
    name: 'Progress 进度条',
    class: 'progress',
    outline: '展示操作或任务的当前进度，比如上传文件。',
    tips:'注意：非 template/render 模式下，需使用 i-progress。',
    list:[
        {
            title: '基本用法',
            info: '处在不同状态下的进度条，当 percent 为 100 时，自动将状态置为 success。',
            demo: '<i-progress :percent="25"></i-progress>\n' +
            '    <i-progress :percent="45" status="active"></i-progress>\n' +
            '    <i-progress :percent="65" status="wrong"></i-progress>\n' +
            '    <i-progress :percent="100"></i-progress>\n' +
            '    <i-progress :percent="25" hide-info></i-progress>',
            code: '<template>\n' +
                    '    <Progress :percent="25"></Progress>\n' +
                    '    <Progress :percent="45" status="active"></Progress>\n' +
                    '    <Progress :percent="65" status="wrong"></Progress>\n' +
                    '    <Progress :percent="100"></Progress>\n' +
                    '    <Progress :percent="25" hide-info></Progress>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '垂直方向',
            info: '设置属性 vertical 将以垂直方向显示。',
            demo: '<div style="height: 100px;">\n' +
            '        <i-progress vertical :percent="25"></i-progress>\n' +
            '        <i-progress vertical :percent="45" status="active"></i-progress>\n' +
            '        <i-progress vertical :percent="65" status="wrong"></i-progress>\n' +
            '        <i-progress vertical :percent="100"></i-progress>\n' +
            '        <i-progress vertical :percent="25" hide-info></i-progress>\n' +
            '    </div>',
            code: '<template>\n' +
                    '    <div style="height: 100px;">\n' +
                    '        <Progress vertical :percent="25"></Progress>\n' +
                    '        <Progress vertical :percent="45" status="active"></Progress>\n' +
                    '        <Progress vertical :percent="65" status="wrong"></Progress>\n' +
                    '        <Progress vertical :percent="100"></Progress>\n' +
                    '        <Progress vertical :percent="25" hide-info></Progress>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '配合外部组件使用',
            info: '通过数据的联动和逻辑控制，实现动态效果。\n' +
            '\n',
            demo: '<i-progress :percent="percent"></i-progress>\n' +
            '    <button-group size="large">\n' +
            '        <i-button icon="ios-plus-empty" @click="add"></i-button>\n' +
            '        <i-button icon="ios-minus-empty" @click="minus"></i-button>\n' +
            '    </button-group>',
            code: '<template>\n' +
                    '    <Progress :percent="percent"></Progress>\n' +
                    '    <ButtonGroup size="large">\n' +
                    '        <Button icon="ios-plus-empty" @click="add"></Button>\n' +
                    '        <Button icon="ios-minus-empty" @click="minus"></Button>\n' +
                    '    </ButtonGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                percent: 0\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            add () {\n' +
                    '                if (this.percent >= 100) {\n' +
                    '                    return false;\n' +
                    '                }\n' +
                    '                this.percent += 10;\n' +
                    '            },\n' +
                    '            minus () {\n' +
                    '                if (this.percent <= 0) {\n' +
                    '                    return false;\n' +
                    '                }\n' +
                    '                this.percent -= 10;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }'
        },
        {
            title: '自定义更多样式 ',
            info: '通过自定义slot和属性stroke-width改变进度条效果。',
            demo: '<i-progress :percent="25" :stroke-width="5"></i-progress>\n' +
            '    <i-progress :percent="100">\n' +
            '        <Icon type="checkmark-circled"></Icon>\n' +
            '        <span>成功</span>\n' +
            '    </i-progress>',
            code: '<template>\n' +
                    '    <Progress :percent="25" :stroke-width="5"></Progress>\n' +
                    '    <Progress :percent="100">\n' +
                    '        <Icon type="checkmark-circled"></Icon>\n' +
                    '        <span>成功</span>\n' +
                    '    </Progress>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
            '        \n' +
            '    }\n' +
            '</script>'
        }
    ],

    api: [
        {
            name: 'Progress props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'percent', explain:'百分比\t', type:'Number', default:'0'},
                {attr: 'status', explain:'状态，可选值为normal、active、wrong、success\t', type:'String', default:'normal'},
                {attr: 'stroke-width\t', explain:'进度条的线宽，单位 px\t', type:'Number', default:'10'},
                {attr: 'hide-info\t', explain:'隐藏数值或状态图标\t', type:'Boolean', default:'false'},
                {attr: 'vertical', explain:'是否在垂直方向显示\t', type:'Boolean', default:'false'},
            ]
        },
        {
            name: 'Progress slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'自定义显示状态内容\n'}
            ]
        },
    ]
}