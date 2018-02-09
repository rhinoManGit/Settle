/*
*
* */
module.exports={
    name: 'Badge 徽标数',
    class: 'badge',
    outline: '主要用于通知未读数的角标，提醒用户点击。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '最简单的使用方法。\n' +
            '\n',
            demo: ' <Badge count="3">\n' +
            '        <a href="#" class="demo-badge"></a>\n' +
            '    </Badge>',
            code: '<style scoped>\n' +
                    '    .demo-badge{\n' +
                    '        width: 42px;\n' +
                    '        height: 42px;\n' +
                    '        background: #eee;\n' +
                    '        border-radius: 6px;\n' +
                    '        display: inline-block;\n' +
                    '    }\n' +
                    '</style>\n' +
                    '<template>\n' +
                    '    <Badge count="3">\n' +
                    '        <a href="#" class="demo-badge"></a>\n' +
                    '    </Badge>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '小红点',
            info: '强迫症患者慎用！\n' +
            '\n',
            demo: '<Badge dot>\n' +
            '        <a href="#" class="demo-badge"></a>\n' +
            '    </Badge>\n' +
            '    <Badge dot>\n' +
            '        <Icon type="ios-bell-outline" size="26"></Icon>\n' +
            '    </Badge>\n' +
            '    <Badge dot>\n' +
            '        <a href="#">可以是一个链接</a>\n' +
            '    </Badge>',
            code: '<template>\n' +
                    '    <Badge dot>\n' +
                    '        <a href="#" class="demo-badge"></a>\n' +
                    '    </Badge>\n' +
                    '    <Badge dot>\n' +
                    '        <Icon type="ios-bell-outline" size="26"></Icon>\n' +
                    '    </Badge>\n' +
                    '    <Badge dot>\n' +
                    '        <a href="#">可以是一个链接</a>\n' +
                    '    </Badge>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '封顶数字',
            info: '通过设置overflow-count属性设置一个封顶值，当超过时，会显示${overflowCount}+',
            demo: ' <Badge count="100">\n' +
            '        <a href="#" class="demo-badge"></a>\n' +
            '    </Badge>\n' +
            '    <Badge count="1000" overflow-count="999">\n' +
            '        <a href="#" class="demo-badge"></a>\n' +
            '    </Badge>',
            code: '<template>\n' +
                    '    <Badge count="100">\n' +
                    '        <a href="#" class="demo-badge"></a>\n' +
                    '    </Badge>\n' +
                    '    <Badge count="1000" overflow-count="999">\n' +
                    '        <a href="#" class="demo-badge"></a>\n' +
                    '    </Badge>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '独立使用及自定义样式',
            info: '可以没有 slot 独立展示。\n' +
            '\n',
            demo: '<Badge count="10"></Badge>\n' +
            '    <Badge count="20" class-name="demo-badge-alone"></Badge>',
            code: '<style>\n' +
                    '    .demo-badge-alone{\n' +
                    '        background: #5cb85c !important;\n' +
                    '    }\n' +
                    '</style>\n' +
                    '<template>\n' +
                    '    <Badge count="10"></Badge>\n' +
                    '    <Badge count="20" class-name="demo-badge-alone"></Badge>\n' +
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
            name: 'Badge props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'count', explain:'显示的数字，大于overflowCount时，显示${overflowCount}+，为 0 时隐藏\t', type:'Number | String', default:'-'},
                {attr: 'overflow-count\t', explain:'展示封顶的数字值\t', type:'Number | String', default:'99'},
                {attr: 'dot', explain:'不展示数字，只有一个小红点，如需隐藏 dot ，需要设置count为 0\t', type:'Boolean', default:'false'},
                {attr: 'class-name\t', explain:'自定义的class名称，dot 模式下无效\t', type:'String', default:'-'}
            ]
        }
    ]
}