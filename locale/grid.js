/*
*
* */
module.exports={
  name: "栅格布局",
  class: 'grid',
    tips:'注意：非 template/render 模式下，需使用 i-col。',
  outline: "我们采用了24栅格系统，将区域进行24等分，这样可以轻松应对大部分布局问题。使用栅格系统进行网" +
  "页布局，可以使页面排版美观、舒适。我们定义了两个概念，行row和列col，具体使用方法如下：使用row在水平方向" +
  "创建一将一组col插入在row中在每个col中，键入自己的内容通过设置col的span参数，指定跨越的范围，其范围是1到24" +
  "每个row中的col总和应该为24",
    list:[
        {
            title: '基础用法',
            info: '水平排列的布局。col必须放在row里面。',
            demo: '<Row>\n' +
            '                            <i-Col span="12">col-12</i-Col>\n' +
            '                            <i-Col span="12">col-12</i-Col>\n' +
            '                        </Row>\n' +
            '                        <br>\n' +
            '                        <Row>\n' +
            '                            <i-Col span="8">col-8</i-Col>\n' +
            '                            <i-Col span="8">col-8</i-Col>\n' +
            '                            <i-Col span="8">col-8</i-Col>\n' +
            '                        </Row>\n' +
            '                        <br>\n' +
            '                        <Row>\n' +
            '                            <i-Col span="6">col-6</i-Col>\n' +
            '                            <i-Col span="6">col-6</i-Col>\n' +
            '                            <i-Col span="6">col-6</i-Col>\n' +
            '                            <i-Col span="6">col-6</i-Col>\n' +
            '                        </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">col-12</Col>\n' +
                    '        <Col span="12">col-12</Col>\n' +
                    '    </Row>\n' +
                    '    <br>\n' +
                    '    <Row>\n' +
                    '        <Col span="8">col-8</Col>\n' +
                    '        <Col span="8">col-8</Col>\n' +
                    '        <Col span="8">col-8</Col>\n' +
                    '    </Row>\n' +
                    '    <br>\n' +
                    '    <Row>\n' +
                    '        <Col span="6">col-6</Col>\n' +
                    '        <Col span="6">col-6</Col>\n' +
                    '        <Col span="6">col-6</Col>\n' +
                    '        <Col span="6">col-6</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '区域间隔',
            info: '通过给 row 添加 gutter 属性，可以给下属的 col 添加间距，\n' +
            '                推荐使用 (16+8n)px 作为栅格间隔。',
            demo: '<Row :gutter="16" type="flex">\n' +
            '                        <i-Col span="6">\n' +
            '                        <div>col-6</div>\n' +
            '                        </i-Col>\n' +
            '                        <i-Col span="6">\n' +
            '                        <div>col-6</div>\n' +
            '                        </i-Col>\n' +
            '                        <i-Col span="6">\n' +
            '                        <div>col-6</div>\n' +
            '                        </i-Col>\n' +
            '                        <i-Col span="6">\n' +
            '                        <div>col-6</div>\n' +
            '                        </i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
'                            <Row :gutter="16">\n' +
'                                <i-Col span="6">\n' +
'                                    <div>col-6</div>\n' +
'                                </i-Col>\n' +
'                                <i-Col span="6">\n' +
'                                    <div>col-6</div>\n' +
'                                </i-Col>\n' +
'                                <i-Col span="6">\n' +
'                                    <div>col-6</div>\n' +
'                                </i-Col>\n' +
'                                <i-Col span="6">\n' +
'                                    <div>col-6</div>\n' +
'                                </i-Col>\n' +
'                            </Row>\n' +
'                        </template>\n' +
'                        <script>\n' +
'                            export default {\n' +
'\n' +
'                            }\n' +
'                        </script>'
        },
        {
          title: '栅格顺序(Flex)',
            info: '通过 Flex 布局的order来改变栅格的顺序。',
            demo: '<Row type="flex">\n' +
            '                        <i-Col span="6" order="4">1 | order-4</i-Col>\n' +
            '                        <i-Col span="6" order="3">2 | order-3</i-Col>\n' +
            '                        <i-Col span="6" order="2">3 | order-2</i-Col>\n' +
            '                        <i-Col span="6" order="1">4 | order-1</i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <Row type="flex">\n' +
                    '        <Col span="6" order="4">1 | order-4</Col>\n' +
                    '        <Col span="6" order="3">2 | order-3</Col>\n' +
                    '        <Col span="6" order="2">3 | order-2</Col>\n' +
                    '        <Col span="6" order="1">4 | order-1</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '栅格顺序',
            info: '通过设置push和pull来改变栅格的顺序。',
            demo: '<Row>\n' +
            '                        <i-Col span="18" push="6">col-18 | push-6</i-Col>\n' +
            '                        <i-Col span="6" pull="18">col-6 | pull-18</i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="18" push="6">col-18 | push-6</Col>\n' +
                    '        <Col span="6" pull="18">col-6 | pull-18</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '左右偏移',
            info: '通过设置offset属性，将列进行左右偏移，偏移栅格数为offset的值。',
            demo: '<Row>\n' +
            '                        <i-Col span="8">col-8</i-Col>\n' +
            '                        <i-Col span="8" offset="8">col-8 | offset-8</i-Col>\n' +
            '                    </Row>\n' +
            '                    <br>\n' +
            '                    <Row>\n' +
            '                        <i-Col span="6" offset="8">col-6 | offset-8</i-Col>\n' +
            '                        <i-Col span="6" offset="4">col-6 | offset-4</i-Col>\n' +
            '                    </Row>\n' +
            '                    <br>\n' +
            '                    <Row>\n' +
            '                        <i-Col span="12" offset="8">col-12 | offset-8</i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="8">col-8</Col>\n' +
                    '        <Col span="8" offset="8">col-8 | offset-8</Col>\n' +
                    '    </Row>\n' +
                    '    <br>\n' +
                    '    <Row>\n' +
                    '        <Col span="6" offset="8">col-6 | offset-8</Col>\n' +
                    '        <Col span="6" offset="4">col-6 | offset-4</Col>\n' +
                    '    </Row>\n' +
                    '    <br>\n' +
                    '    <Row>\n' +
                    '        <Col span="12" offset="8">col-12 | offset-8</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: 'Flex布局',
            info: '通过给row设置参数justify为不同的值，来定义子元素的排布方式。在flex模式下有效。',
            demo: '<p>子元素向左排列</p>\n' +
            '                    <Row type="flex" justify="start" class="code-row-bg">\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>子元素向右排列</p>\n' +
            '                    <Row type="flex" justify="end" class="code-row-bg">\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>子元素居中排列</p>\n' +
            '                    <Row type="flex" justify="center" class="code-row-bg">\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>子元素等宽排列</p>\n' +
            '                    <Row type="flex" justify="space-between" class="code-row-bg">\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>子元素分散排列</p>\n' +
            '                    <Row type="flex" justify="space-around" class="code-row-bg">\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                        <i-Col span="4">col-4</i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <p>子元素向左排列</p>\n' +
                    '    <Row type="flex" justify="start" class="code-row-bg">\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '    </Row>\n' +
                    '    <p>子元素向右排列</p>\n' +
                    '    <Row type="flex" justify="end" class="code-row-bg">\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '    </Row>\n' +
                    '    <p>子元素居中排列</p>\n' +
                    '    <Row type="flex" justify="center" class="code-row-bg">\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '    </Row>\n' +
                    '    <p>子元素等宽排列</p>\n' +
                    '    <Row type="flex" justify="space-between" class="code-row-bg">\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '    </Row>\n' +
                    '    <p>子元素分散排列</p>\n' +
                    '    <Row type="flex" justify="space-around" class="code-row-bg">\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '        <Col span="4">col-4</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: 'Flex对齐',
            info: '通过给row设置参数align为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。',
            demo: '<p>顶部对齐</p>\n' +
            '                    <Row type="flex" justify="center" align="top" class="code-row-bg">\n' +
            '                        <i-Col span="4"><p style="height: 80px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 30px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 100px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 60px">col-4</p></i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>底部对齐</p>\n' +
            '                    <Row type="flex" justify="center" align="bottom" class="code-row-bg">\n' +
            '                        <i-Col span="4"><p style="height: 80px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 30px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 100px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 60px">col-4</p></i-Col>\n' +
            '                    </Row>\n' +
            '                    <p>居中对齐</p>\n' +
            '                    <Row type="flex" justify="center" align="middle" class="code-row-bg">\n' +
            '                        <i-Col span="4"><p style="height: 80px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 30px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 100px">col-4</p></i-Col>\n' +
            '                        <i-Col span="4"><p style="height: 60px">col-4</p></i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <p>顶部对齐</p>\n' +
                    '    <Row type="flex" justify="center" align="top" class="code-row-bg">\n' +
                    '        <Col span="4"><p style="height: 80px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 30px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 100px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 60px">col-4</p></Col>\n' +
                    '    </Row>\n' +
                    '    <p>底部对齐</p>\n' +
                    '    <Row type="flex" justify="center" align="bottom" class="code-row-bg">\n' +
                    '        <Col span="4"><p style="height: 80px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 30px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 100px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 60px">col-4</p></Col>\n' +
                    '    </Row>\n' +
                    '    <p>居中对齐</p>\n' +
                    '    <Row type="flex" justify="center" align="middle" class="code-row-bg">\n' +
                    '        <Col span="4"><p style="height: 80px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 30px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 100px">col-4</p></Col>\n' +
                    '        <Col span="4"><p style="height: 60px">col-4</p></Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '响应式布局',
            info: '参照 <a href="http://getbootstrap.com/css/#grid-media-queries">' +
            'Bootstrap </a>的 响应式设计，预设四个响应尺寸：xs sm md lg，详见 API。\n' +
            '\n' +
            '调整浏览器尺寸来查看效果。',
            demo: '<Row type="flex">\n' +
            '                        <i-Col span="6" order="4">1 | order-4</i-Col>\n' +
            '                        <i-Col span="6" order="3">2 | order-3</i-Col>\n' +
            '                        <i-Col span="6" order="2">3 | order-2</i-Col>\n' +
            '                        <i-Col span="6" order="1">4 | order-1</i-Col>\n' +
            '                    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>\n' +
                    '        <Col :xs="20" :sm="16" :md="12" :lg="8">Col</Col>\n' +
                    '        <Col :xs="2" :sm="4" :md="6" :lg="8">Col</Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '其它属性的响应式',
            info: 'span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。\n' +
            '\n' +
            '其中 :xs="6" 相当于 :xs="{ span: 6 }"。',
            demo: '<Row>\n' +
            '        <i-Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
            '        <i-Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
            '        <i-Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <i-Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
                    '        <i-Col :xs="{ span: 11, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
                    '        <i-Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 6, offset: 2 }">Col</i-Col>\n' +
                    '    </Row>\n' +
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
            name: 'Row props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'gutter', explain:'栅格间距，单位 px，左右平分', type:'Number',
                    default:'0'},
                {attr: 'type', explain:'布局模式，可选值为flex或不选，在现代浏览器下有效',
                    type:'String', default:''},
                {attr: 'align', explain:'flex 布局下的垂直对齐方式，可选值为top、middle、bottom',
                    type:'String', default:''},
                {attr: 'justify', explain:'flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between',
                    type:'String', default:''},
                {attr: 'class-name', explain:'自定义的class名称', type:'String', default:''},
            ]
        },
        {
            name: 'Col props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'span', explain:'栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none', type:'Number | String',
                    default:''},
                {attr: 'order', explain:'栅格的顺序，在flex布局模式下有效',
                    type:'Number | String', default:''},
                {attr: 'offset', explain:'栅格左侧的间隔格数，间隔内不可以有栅格',
                    type:'Number | String', default:''},
                {attr: 'push', explain:'栅格向右移动格数',
                    type:'Number | String', default:''},
                {attr: 'class-name', explain:'自定义的class名称', type:'String', default:''},
                {attr: 'xs', explain:'<768px 响应式栅格，可为栅格数或一个包含其他属性的对象', type:'Number | String', default:''},
                {attr: 'sm', explain:'≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象', type:'Number | String', default:''},
                {attr: 'md', explain:'≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象', type:'Number | String', default:''},
                {attr: 'lg', explain:'≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象', type:'Number | String', default:''},
            ]
        },
    ]
}