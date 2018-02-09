/*
*
* */
module.exports={
    name: 'Tooltip 文字提示',
    class: 'tooltip',
    outline: '文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '最简单的用法。<br/>\n' +
            '\n' +
            '注意 Tooltip 内的文本使用了 white-space: nowrap;，即不自动换行，如需展示很多内容并自动换行时，建议给内容 slot 增加样式 white-space: normal;。',
            demo: ' <Tooltip content="这里是提示文字">\n' +
            '        当鼠标经过这段文字时，会显示一个气泡框\n' +
            '    </Tooltip>',
            code: '<template>\n' +
                    '    <Tooltip content="这里是提示文字">\n' +
                    '        当鼠标经过这段文字时，会显示一个气泡框\n' +
                    '    </Tooltip>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '位置',
            info: '组件提供了12个不同的方向显示Tooltip，具体配置可查看API。\n' +
            '\n',
            demo: '<div class="top">\n' +
            '        <Tooltip content="Top Left 文字提示" placement="top-start">\n' +
            '            <i-button>上左</i-button>\n' +
            '        </Tooltip>\n' +
            '        <Tooltip content="Top Center 文字提示" placement="top">\n' +
            '            <i-button>上边</i-button>\n' +
            '        </Tooltip>\n' +
            '        <Tooltip content="Top Right 文字提示" placement="top-end">\n' +
            '            <i-button>上右</i-button>\n' +
            '        </Tooltip>\n' +
            '    </div>\n' +
            '    <div class="center">\n' +
            '        <div class="center-left">\n' +
            '            <Tooltip content="Left Top 文字提示" placement="left-start">\n' +
            '                <i-button>左上</i-button>\n' +
            '            </Tooltip><br><br>\n' +
            '            <Tooltip content="Left Center 文字提示" placement="left">\n' +
            '                <i-button>左边</i-button>\n' +
            '            </Tooltip><br><br>\n' +
            '            <Tooltip content="Left Bottom 文字提示" placement="left-end">\n' +
            '                <i-button>左下</i-button>\n' +
            '            </Tooltip>\n' +
            '        </div>\n' +
            '        <div class="center-right">\n' +
            '            <Tooltip content="Right Top 文字提示" placement="right-start">\n' +
            '                <i-button>右上</i-button>\n' +
            '            </Tooltip><br><br>\n' +
            '            <Tooltip content="Right Center 文字提示" placement="right">\n' +
            '                <i-button>右边</i-button>\n' +
            '            </Tooltip><br><br>\n' +
            '            <Tooltip content="Right Bottom 文字提示" placement="right-end">\n' +
            '                <i-button>右下</i-button>\n' +
            '            </Tooltip>\n' +
            '        </div>\n' +
            '    </div>\n' +
            '    <div class="bottom">\n' +
            '        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">\n' +
            '            <i-button>下左</i-button>\n' +
            '        </Tooltip>\n' +
            '        <Tooltip content="Bottom Center 文字提示" placement="bottom">\n' +
            '            <i-button>下边</i-button>\n' +
            '        </Tooltip>\n' +
            '        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">\n' +
            '            <i-button>下右</i-button>\n' +
            '        </Tooltip>\n' +
            '    </div>',
            code: '<style scoped>\n' +
                    '    .top,.bottom{\n' +
                    '        text-align: center;\n' +
                    '    }\n' +
                    '    .center{\n' +
                    '        width: 300px;\n' +
                    '        margin: 10px auto;\n' +
                    '        overflow: hidden;\n' +
                    '    }\n' +
                    '    .center-left{\n' +
                    '        float: left;\n' +
                    '    }\n' +
                    '    .center-right{\n' +
                    '        float: right;\n' +
                    '    }\n' +
                    '</style>\n' +
                    '<template>\n' +
                    '    <div class="top">\n' +
                    '        <Tooltip content="Top Left 文字提示" placement="top-start">\n' +
                    '            <Button>上左</Button>\n' +
                    '        </Tooltip>\n' +
                    '        <Tooltip content="Top Center 文字提示" placement="top">\n' +
                    '            <Button>上边</Button>\n' +
                    '        </Tooltip>\n' +
                    '        <Tooltip content="Top Right 文字提示" placement="top-end">\n' +
                    '            <Button>上右</Button>\n' +
                    '        </Tooltip>\n' +
                    '    </div>\n' +
                    '    <div class="center">\n' +
                    '        <div class="center-left">\n' +
                    '            <Tooltip content="Left Top 文字提示" placement="left-start">\n' +
                    '                <Button>左上</Button>\n' +
                    '            </Tooltip><br><br>\n' +
                    '            <Tooltip content="Left Center 文字提示" placement="left">\n' +
                    '                <Button>左边</Button>\n' +
                    '            </Tooltip><br><br>\n' +
                    '            <Tooltip content="Left Bottom 文字提示" placement="left-end">\n' +
                    '                <Button>左下</Button>\n' +
                    '            </Tooltip>\n' +
                    '        </div>\n' +
                    '        <div class="center-right">\n' +
                    '            <Tooltip content="Right Top 文字提示" placement="right-start">\n' +
                    '                <Button>右上</Button>\n' +
                    '            </Tooltip><br><br>\n' +
                    '            <Tooltip content="Right Center 文字提示" placement="right">\n' +
                    '                <Button>右边</Button>\n' +
                    '            </Tooltip><br><br>\n' +
                    '            <Tooltip content="Right Bottom 文字提示" placement="right-end">\n' +
                    '                <Button>右下</Button>\n' +
                    '            </Tooltip>\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '    <div class="bottom">\n' +
                    '        <Tooltip content="Bottom Left 文字提示" placement="bottom-start">\n' +
                    '            <Button>下左</Button>\n' +
                    '        </Tooltip>\n' +
                    '        <Tooltip content="Bottom Center 文字提示" placement="bottom">\n' +
                    '            <Button>下边</Button>\n' +
                    '        </Tooltip>\n' +
                    '        <Tooltip content="Bottom Right 文字提示" placement="bottom-end">\n' +
                    '            <Button>下右</Button>\n' +
                    '        </Tooltip>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义内容',
            info: '通过自定义 slot 显示多行文本或更复杂的样式。\n' +
            '\n',
            demo: '<Tooltip placement="top">\n' +
            '        <i-button>多行</i-button>\n' +
            '        <div slot="content">\n' +
            '            <p>显示多行信息</p>\n' +
            '            <p><i>可以自定义样式</i></p>\n' +
            '        </div>\n' +
            '    </Tooltip>',
            code: '<template>\n' +
                    '    <Tooltip placement="top">\n' +
                    '        <Button>多行</Button>\n' +
                    '        <div slot="content">\n' +
                    '            <p>显示多行信息</p>\n' +
                    '            <p><i>可以自定义样式</i></p>\n' +
                    '        </div>\n' +
                    '    </Tooltip>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '禁用',
            info: '通过设置属性disabled可以禁用文字提示。',
            demo: '<Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">\n' +
            '        <i-button @click="disabled = true">点击关闭提示</i-button>\n' +
            '    </Tooltip>',
            code: '<template>\n' +
                    '    <Tooltip placement="top" content="可以禁用文字提示" :disabled="disabled">\n' +
                    '        <Button @click="disabled = true">点击关闭提示</Button>\n' +
                    '    </Tooltip>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                disabled: false\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
            title: '延时',
            info: '通过设置属性delay可以延时显示文字提示，单位毫秒。\n' +
            '\n',
            demo: '<Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">\n' +
            '        <i-button @click="disabled = true">延时1秒显示</i-button>\n' +
            '    </Tooltip>',
            code: '<template>\n' +
                    '    <Tooltip placement="top" content="Tooltip 文字提示" :delay="1000">\n' +
                    '        <Button @click="disabled = true">延时1秒显示</Button>\n' +
                    '    </Tooltip>\n' +
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
            name: 'Tooltip props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'content', explain:'显示的内容\t', type:'String | Number\t', default:'空'},
                {attr: 'placement', explain:'提示框出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end\t', type:'String', default:'bottom'},
                {attr: 'disabled', explain:'是否禁用提示框\t', type:'Boolean', default:'false'},
                {attr: 'delay', explain:'延迟显示，单位毫秒\t', type:'Number', default:'0'},
                {attr: 'always', explain:'是否总是可见\t', type:'Boolean', default:'false'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果\t', type:'Boolean', default:'false'}
            ]
        },
        {
            name: 'Tooltip events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-popper-show\t', explain:'在提示框显示时触发\t', default:'无'},
                {attr: 'on-popper-hide\t', explain:'在提示框消失时触发\t', default:'无'}
            ]
        },
        {
            name: 'Tooltip slot ',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'主体内容\n'},
                {attr: 'content', explain:'提示框的内容，定义此 slot 时，会覆盖 props content。\n'}
            ]
        },
    ]
}