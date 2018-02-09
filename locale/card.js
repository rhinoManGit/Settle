/*
*
* */
module.exports={
    name: 'Card 卡片',
    class: 'card',
    outline: '基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。',
    tips:'',
    list:[
        {
            title: '基本用法 ',
            info: '自定义标题、额外操作和主体内容，可以完全自由控制各个部分，也可以结合其它组件一起使用，较为灵活。',
            demo: '<Card style="width:350px">\n' +
            '        <p slot="title">\n' +
            '            <Icon type="ios-film-outline"></Icon>\n' +
            '            Classic film\n' +
            '        </p>\n' +
            '        <a href="#" slot="extra" @click.prevent="changeLimit">\n' +
            '            <Icon type="ios-loop-strong"></Icon>\n' +
            '            Change\n' +
            '        </a>\n' +
            '        <ul>\n' +
            '            <li v-for="item in randomMovieList">\n' +
            '                <a :href="item.url" target="_blank">{{ item.name }}</a>\n' +
            '                <span>\n' +
            '                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>\n' +
            '                    {{ item.rate }}\n' +
            '                </span>\n' +
            '            </li>\n' +
            '        </ul>\n' +
            '    </Card>',
            code: '<template>\n' +
                    '    <Card style="width:350px">\n' +
                    '        <p slot="title">\n' +
                    '            <Icon type="ios-film-outline"></Icon>\n' +
                    '            Classic film\n' +
                    '        </p>\n' +
                    '        <a href="#" slot="extra" @click.prevent="changeLimit">\n' +
                    '            <Icon type="ios-loop-strong"></Icon>\n' +
                    '            Change\n' +
                    '        </a>\n' +
                    '        <ul>\n' +
                    '            <li v-for="item in randomMovieList">\n' +
                    '                <a :href="item.url" target="_blank">{{ item.name }}</a>\n' +
                    '                <span>\n' +
                    '                    <Icon type="ios-star" v-for="n in 4" :key="n"></Icon><Icon type="ios-star" v-if="item.rate >= 9.5"></Icon><Icon type="ios-star-half" v-else></Icon>\n' +
                    '                    {{ item.rate }}\n' +
                    '                </span>\n' +
                    '            </li>\n' +
                    '        </ul>\n' +
                    '    </Card>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                movieList: [\n' +
                    '                    {\n' +
                    '                        name: \'The Shawshank Redemption\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1292052/\',\n' +
                    '                        rate: 9.6\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Leon:The Professional\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1295644/\',\n' +
                    '                        rate: 9.4\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Farewell to My Concubine\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1291546/\',\n' +
                    '                        rate: 9.5\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Forrest Gump\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1292720/\',\n' +
                    '                        rate: 9.4\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Life Is Beautiful\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1292063/\',\n' +
                    '                        rate: 9.5\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Spirited Away\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1291561/\',\n' +
                    '                        rate: 9.2\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Schindler\'s List\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1295124/\',\n' +
                    '                        rate: 9.4\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'The Legend of 1900\',\n' +
                    '                        url: \'https://movie.douban.com/subject/1292001/\',\n' +
                    '                        rate: 9.2\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'WALL·E\',\n' +
                    '                        url: \'https://movie.douban.com/subject/2131459/\',\n' +
                    '                        rate: 9.3\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        name: \'Inception\',\n' +
                    '                        url: \'https://movie.douban.com/subject/3541415/\',\n' +
                    '                        rate: 9.2\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                randomMovieList: []\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            changeLimit () {\n' +
                    '                function getArrayItems(arr, num) {\n' +
                    '                    const temp_array = [];\n' +
                    '                    for (let index in arr) {\n' +
                    '                        temp_array.push(arr[index]);\n' +
                    '                    }\n' +
                    '                    const return_array = [];\n' +
                    '                    for (let i = 0; i<num; i++) {\n' +
                    '                        if (temp_array.length>0) {\n' +
                    '                            const arrIndex = Math.floor(Math.random()*temp_array.length);\n' +
                    '                            return_array[i] = temp_array[arrIndex];\n' +
                    '                            temp_array.splice(arrIndex, 1);\n' +
                    '                        } else {\n' +
                    '                            break;\n' +
                    '                        }\n' +
                    '                    }\n' +
                    '                    return return_array;\n' +
                    '                }\n' +
                    '                this.randomMovieList = getArrayItems(this.movieList, 5);\n' +
                    '            }\n' +
                    '        },\n' +
                    '        mounted () {\n' +
                    '            this.changeLimit();\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '无边框',
            info: '通过设置属性bordered为 false ，可以不添加边框，建议在灰色背景下使用。',
            demo: ' <div style="background:#eee;padding: 20px">\n' +
            '        <Card :bordered="false">\n' +
            '            <p slot="title">No border title</p>\n' +
            '            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>\n' +
            '        </Card>\n' +
            '    </div>',
            code: '<template>\n' +
                    '    <div style="background:#eee;padding: 20px">\n' +
                    '        <Card :bordered="false">\n' +
                    '            <p slot="title">No border title</p>\n' +
                    '            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>\n' +
                    '        </Card>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '禁用悬停阴影',
            info: '通过设置属性dis-hover来禁用鼠标悬停显示阴影的效果。',
            demo: ' <Row>\n' +
            '        <i-col span="11">\n' +
            '            <Card>\n' +
            '                <p slot="title">The standard card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '            </Card>\n' +
            '        </i-col>\n' +
            '        <i-col span="11" offset="2">\n' +
            '            <Card dis-hover>\n' +
            '                <p slot="title">Disable card with hover shadows</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '            </Card>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="11">\n' +
                    '            <Card>\n' +
                    '                <p slot="title">The standard card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '            </Card>\n' +
                    '        </Col>\n' +
                    '        <Col span="11" offset="2">\n' +
                    '            <Card dis-hover>\n' +
                    '                <p slot="title">Disable card with hover shadows</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '            </Card>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '卡片阴影',
            info: '通过设置属性shadow来显示卡片阴影，使用该属性后，bordered和dis-hover将无效，建议在灰色背景下使用。',
            demo: '<Row style="background:#eee;padding:20px">\n' +
            '        <i-col span="11">\n' +
            '            <Card :bordered="false">\n' +
            '                <p slot="title">Borderless card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '            </Card>\n' +
            '        </i-col>\n' +
            '        <i-col span="11" offset="2">\n' +
            '            <Card shadow>\n' +
            '                <p slot="title">Use a card with a shadow effect</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '                <p>Content of card</p>\n' +
            '            </Card>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row style="background:#eee;padding:20px">\n' +
                    '        <Col span="11">\n' +
                    '            <Card :bordered="false">\n' +
                    '                <p slot="title">Borderless card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '            </Card>\n' +
                    '        </Col>\n' +
                    '        <Col span="11" offset="2">\n' +
                    '            <Card shadow>\n' +
                    '                <p slot="title">Use a card with a shadow effect</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '                <p>Content of card</p>\n' +
                    '            </Card>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '简洁卡片',
            info: '只包含内容区域，没有标题。',
            demo: '<Card style="width:320px">\n' +
            '        <div style="text-align:center">\n' +
            '            <img src="../../images/logo.png">\n' +
            '            <h3>A high quality UI Toolkit based on Vue.js</h3>\n' +
            '        </div>\n' +
            '    </Card>',
            code: '<template>\n' +
                    '    <Card style="width:320px">\n' +
                    '        <div style="text-align:center">\n' +
                    '            <img src="../../images/logo.png">\n' +
                    '            <h3>A high quality UI Toolkit based on Vue.js</h3>\n' +
                    '        </div>\n' +
                    '    </Card>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>\n'
        }
    ],

    api: [
        {
            name: 'Card props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'bordered', explain:'是否显示边框，建议在灰色背景下使用\t', type:'Boolean', default:'true'},
                {attr: 'dis-hover\t', explain:'禁用鼠标悬停显示阴影\t', type:'Boolean', default:'false'},
                {attr: 'shadow', explain:'卡片阴影，建议在灰色背景下使用\t', type:'Boolean', default:'false'},
                {attr: 'padding', explain:'卡片内部间距，单位 px\t', type:'Number', default:'16'},
            ]
        },
        {
            name: 'Card slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: 'title', explain:'自定义卡片标题，如果是简单文字，可以使用<p>标签包裹\n'},
                {attr: 'extra', explain:'额外显示的内容，默认位置在右上角\n'},
                {attr: '无', explain:'卡片主体内容\n'}
            ]
        },
    ]
}