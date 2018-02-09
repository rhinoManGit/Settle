/*
*
* */
module.exports={
    name: 'Button 按钮',
    class: 'button',
    outline: '基础组件，触发业务逻辑时使用。',
    tips:'注意：非 template/render 模式下，Button 用 i-button，ButtonGroup用button-group。',
    list:[
        {
            title: '按钮类型',
            info: '按钮类型有：默认按钮、主按钮、幽灵按钮、虚线按钮、文字按钮以及四种颜色按钮。\n' +
            '\n' +
            '通过设置type为primary、ghost、dashed、text、info、success、warning、error创建不同样式的按钮，不设置为默认样式。',
            demo: '<i-button>Default</i-button>\n' +
            '    <i-button type="primary">Primary</i-button>\n' +
            '    <i-button type="ghost">Ghost</i-button>\n' +
            '    <i-button type="dashed">Dashed</i-button>\n' +
            '    <i-button type="text">Text</i-button>\n' +
            '    <br><br>\n' +
            '    <i-button type="info">Info</i-button>\n' +
            '    <i-button type="success">Success</i-button>\n' +
            '    <i-button type="warning">Warning</i-button>\n' +
            '    <i-button type="error">Error</i-button>',
            code: '<template>\n' +
                    '    <Button>Default</Button>\n' +
                    '    <Button type="primary">Primary</Button>\n' +
                    '    <Button type="ghost">Ghost</Button>\n' +
                    '    <Button type="dashed">Dashed</Button>\n' +
                    '    <Button type="text">Text</Button>\n' +
                    '    <br><br>\n' +
                    '    <Button type="info">Info</Button>\n' +
                    '    <Button type="success">Success</Button>\n' +
                    '    <Button type="warning">Warning</Button>\n' +
                    '    <Button type="error">Error</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '图标按钮及按钮形状',
            info: '通过设置icon属性在Button内嵌入一个Icon，或者直接在Button内使用Icon组件。\n' +
            '\n' +
            '使用Button的icon属性，图标位置将在最左边，如果需要自定义位置，需使用Icon组件。\n' +
            '\n' +
            '通过设置shape属性为circle，可将按钮置为圆的形状。',
            demo: '<i-button type="primary" shape="circle" icon="ios-search"></i-button>\n' +
            '    <i-button type="primary" icon="ios-search">Search</i-button>\n' +
            '    <i-button type="primary" shape="circle" icon="ios-search">Search</i-button>\n' +
            '    <i-button type="primary" shape="circle">Circle</i-button>\n' +
            '    <br><br>\n' +
            '    <i-button type="ghost" shape="circle" icon="ios-search"></i-button>\n' +
            '    <i-button type="ghost" icon="ios-search">Search</i-button>\n' +
            '    <i-button type="ghost" shape="circle" icon="ios-search">Search</i-button>\n' +
            '    <i-button type="ghost" shape="circle">Circle</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" shape="circle" icon="ios-search"></Button>\n' +
                    '    <Button type="primary" icon="ios-search">Search</Button>\n' +
                    '    <Button type="primary" shape="circle" icon="ios-search">Search</Button>\n' +
                    '    <Button type="primary" shape="circle">Circle</Button>\n' +
                    '    <br><br>\n' +
                    '    <Button type="ghost" shape="circle" icon="ios-search"></Button>\n' +
                    '    <Button type="ghost" icon="ios-search">Search</Button>\n' +
                    '    <Button type="ghost" shape="circle" icon="ios-search">Search</Button>\n' +
                    '    <Button type="ghost" shape="circle">Circle</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '按钮尺寸',
            info: '按钮有三种尺寸：大、默认（中）、小\n' +
            '\n' +
            '通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。',
            demo: ' <i-button type="primary" size="large">Large</i-button>\n' +
            '    <i-button type="primary">Default</i-button>\n' +
            '    <i-button type="primary" size="small">Small</i-button>\n' +
            '    <br><br>\n' +
            '    <i-button type="primary" shape="circle" size="large">Large</i-button>\n' +
            '    <i-button type="primary" shape="circle">Default</i-button>\n' +
            '    <i-button type="primary" shape="circle" size="small">Small</i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" size="large">Large</Button>\n' +
                    '    <Button type="primary">Default</Button>\n' +
                    '    <Button type="primary" size="small">Small</Button>\n' +
                    '    <br><br>\n' +
                    '    <Button type="primary" shape="circle" size="large">Large</Button>\n' +
                    '    <Button type="primary" shape="circle">Default</Button>\n' +
                    '    <Button type="primary" shape="circle" size="small">Small</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '长按钮',
            info: '通过设置属性 long 可将按钮宽度设置为 100%，常用于弹窗内操作按钮。\n' +
            '\n' +
            '使用者也可以直接通过给组件添加 style 来设置更细节的样式，比如定宽。',
            demo: ' <i-button type="success" long>SUBMIT</i-button>\n' +
            '    <br><br>\n' +
            '    <i-button type="error" long>DELETE</i-button>',
            code: '<template>\n' +
                    '    <Button type="success" long>SUBMIT</Button>\n' +
                    '    <br><br>\n' +
                    '    <Button type="error" long>DELETE</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不可用状态',
            info: '通过添加disabled属性可将按钮设置为不可用状态。',
            demo: '<i-button>Default</i-button>\n' +
            '    <i-button disabled>Default(Disabled)</i-button>\n' +
            '    <br>\n' +
            '    <i-button type="primary">Primary</i-button>\n' +
            '    <i-button type="primary" disabled>Primary(Disabled)</i-button>\n' +
            '    <br>\n' +
            '    <i-button type="ghost">Ghost</i-button>\n' +
            '    <i-button type="ghost" disabled>Ghost(Disabled)</i-button>\n' +
            '    <br>\n' +
            '    <i-button type="dashed">Dashed</i-button>\n' +
            '    <i-button type="dashed" disabled>Dashed(Disabled)</i-button>\n' +
            '    <br>\n' +
            '    <i-button type="text">Text</i-button>\n' +
            '    <i-button type="text" disabled>Text(Disabled)</i-button>',
            code: '<template>\n' +
                    '    <Button>Default</Button>\n' +
                    '    <Button disabled>Default(Disabled)</Button>\n' +
                    '    <br>\n' +
                    '    <Button type="primary">Primary</Button>\n' +
                    '    <Button type="primary" disabled>Primary(Disabled)</Button>\n' +
                    '    <br>\n' +
                    '    <Button type="ghost">Ghost</Button>\n' +
                    '    <Button type="ghost" disabled>Ghost(Disabled)</Button>\n' +
                    '    <br>\n' +
                    '    <Button type="dashed">Dashed</Button>\n' +
                    '    <Button type="dashed" disabled>Dashed(Disabled)</Button>\n' +
                    '    <br>\n' +
                    '    <Button type="text">Text</Button>\n' +
                    '    <Button type="text" disabled>Text(Disabled)</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '加载中状态',
            info: '通过添加loading属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。',
            demo: '<i-button type="primary" loading>Loading...</i-button>' +
            '<i-button type="primary" :loading="loading" @click="toLoading">\n' +
            '        <span v-if="!loading">Click me!</span>\n' +
            '        <span v-else>Loading...</span>\n' +
            '    </i-button>' +
            '<i-button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">\n' +
            '        <span v-if="!loading2">Click me!</span>\n' +
            '        <span v-else>Loading...</span>\n' +
            '    </i-button>',
            code: '<template>\n' +
                    '    <Button type="primary" loading>Loading...</Button>\n' +
                    '    <Button type="primary" :loading="loading" @click="toLoading">\n' +
                    '        <span v-if="!loading">Click me!</span>\n' +
                    '        <span v-else>Loading...</span>\n' +
                    '    </Button>\n' +
                    '    <Button type="primary" :loading="loading2" icon="checkmark-round" @click="toLoading2">\n' +
                    '        <span v-if="!loading2">Click me!</span>\n' +
                    '        <span v-else>Loading...</span>\n' +
                    '    </Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                loading: false,\n' +
                    '                loading2: false\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            toLoading () {\n' +
                    '                this.loading = true;\n' +
                    '            },\n' +
                    '            toLoading2 () {\n' +
                    '                this.loading2 = true;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '按钮组合',
            info: '将多个Button放入ButtonGroup内，可实现按钮组合的效果。\n' +
            '\n' +
            '通过设置ButtonGroup的属性size为large和small，可将按钮组尺寸设置为大和小，不设置size，则为默认（中）尺寸。\n' +
            '\n' +
            '通过设置ButtonGroup的属性shape为circle，可将按钮组形状设置为圆角。',
            demo: '<h4>Basic</h4>\n' +
            '    \n' +
            '    <button-group>\n' +
            '        <i-button>Cancel</i-button>\n' +
            '        <i-button type="primary">Confirm</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group>\n' +
            '        <i-button disabled>Yesterday</i-button>\n' +
            '        <i-button disabled>Today</i-button>\n' +
            '        <i-button disabled>Tomorrow</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group>\n' +
            '        <i-button type="primary">L</i-button>\n' +
            '        <i-button>M</i-button>\n' +
            '        <i-button type="ghost">M</i-button>\n' +
            '        <i-button type="dashed">R</i-button>\n' +
            '    </button-group>\n' +
            '    \n' +
            '    <h4>Icons</h4>\n' +
            '    \n' +
            '    <button-group>\n' +
            '        <i-button type="primary">\n' +
            '            <Icon type="chevron-left"></Icon>\n' +
            '            Backward\n' +
            '        </i-button>\n' +
            '        <i-button type="primary">\n' +
            '            Forward\n' +
            '            <Icon type="chevron-right"></Icon>\n' +
            '        </i-button>\n' +
            '    </button-group>\n' +
            '    <button-group>\n' +
            '        <i-button type="primary" icon="ios-skipbackward"></i-button>\n' +
            '        <i-button type="primary" icon="ios-skipforward"></i-button>\n' +
            '    </button-group>\n' +
            '    <button-group>\n' +
            '        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-sunny-outline"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-crop"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>\n' +
            '    </button-group>\n' +
            '    \n' +
            '    <h4>Circle</h4>\n' +
            '    \n' +
            '    <button-group shape="circle">\n' +
            '        <i-button type="primary">\n' +
            '            <Icon type="chevron-left"></Icon>\n' +
            '            Backward\n' +
            '        </i-button>\n' +
            '        <i-button type="primary">\n' +
            '            Forward\n' +
            '            <Icon type="chevron-right"></Icon>\n' +
            '        </i-button>\n' +
            '    </button-group>\n' +
            '    <button-group shape="circle">\n' +
            '        <i-button type="primary" icon="ios-skipbackward"></i-button>\n' +
            '        <i-button type="primary" icon="ios-skipforward"></i-button>\n' +
            '    </button-group>\n' +
            '    <button-group shape="circle">\n' +
            '        <i-button type="ghost" icon="ios-color-wand-outline"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-sunny-outline"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-crop"></i-button>\n' +
            '        <i-button type="ghost" icon="ios-color-filter-outline"></i-button>\n' +
            '    </button-group>\n' +
            '    \n' +
            '    <h4>Size</h4>\n' +
            '    \n' +
            '    <button-group size="large">\n' +
            '        <i-button type="ghost">Large</i-button>\n' +
            '        <i-button type="ghost">Large</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group>\n' +
            '        <i-button type="ghost">Default</i-button>\n' +
            '        <i-button type="ghost">Default</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group size="small">\n' +
            '        <i-button type="ghost">Small</i-button>\n' +
            '        <i-button type="ghost">Small</i-button>\n' +
            '    </button-group>\n' +
            '    \n' +
            '    <button-group size="large" shape="circle">\n' +
            '        <i-button type="ghost">Large</i-button>\n' +
            '        <i-button type="ghost">Large</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group shape="circle">\n' +
            '        <i-button type="ghost">Default</i-button>\n' +
            '        <i-button type="ghost">Default</i-button>\n' +
            '    </button-group>\n' +
            '    <button-group size="small" shape="circle">\n' +
            '        <i-button type="ghost">Small</i-button>\n' +
            '        <i-button type="ghost">Small</i-button>\n' +
            '    </button-group>',
            code: '<template>\n' +
                    '    <h4>Basic</h4>\n' +
                    '    <br><br>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button>Cancel</Button>\n' +
                    '        <Button type="primary">Confirm</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button disabled>Yesterday</Button>\n' +
                    '        <Button disabled>Today</Button>\n' +
                    '        <Button disabled>Tomorrow</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button type="primary">L</Button>\n' +
                    '        <Button>M</Button>\n' +
                    '        <Button type="ghost">M</Button>\n' +
                    '        <Button type="dashed">R</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <br><br>\n' +
                    '    <h4>Icons</h4>\n' +
                    '    <br><br>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button type="primary">\n' +
                    '            <Icon type="chevron-left"></Icon>\n' +
                    '            Backward\n' +
                    '        </Button>\n' +
                    '        <Button type="primary">\n' +
                    '            Forward\n' +
                    '            <Icon type="chevron-right"></Icon>\n' +
                    '        </Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button type="primary" icon="ios-skipbackward"></Button>\n' +
                    '        <Button type="primary" icon="ios-skipforward"></Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button type="ghost" icon="ios-color-wand-outline"></Button>\n' +
                    '        <Button type="ghost" icon="ios-sunny-outline"></Button>\n' +
                    '        <Button type="ghost" icon="ios-crop"></Button>\n' +
                    '        <Button type="ghost" icon="ios-color-filter-outline"></Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <br><br>\n' +
                    '    <h4>Circle</h4>\n' +
                    '    <br><br>\n' +
                    '    <ButtonGroup shape="circle">\n' +
                    '        <Button type="primary">\n' +
                    '            <Icon type="chevron-left"></Icon>\n' +
                    '            Backward\n' +
                    '        </Button>\n' +
                    '        <Button type="primary">\n' +
                    '            Forward\n' +
                    '            <Icon type="chevron-right"></Icon>\n' +
                    '        </Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup shape="circle">\n' +
                    '        <Button type="primary" icon="ios-skipbackward"></Button>\n' +
                    '        <Button type="primary" icon="ios-skipforward"></Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup shape="circle">\n' +
                    '        <Button type="ghost" icon="ios-color-wand-outline"></Button>\n' +
                    '        <Button type="ghost" icon="ios-sunny-outline"></Button>\n' +
                    '        <Button type="ghost" icon="ios-crop"></Button>\n' +
                    '        <Button type="ghost" icon="ios-color-filter-outline"></Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <br><br>\n' +
                    '    <h4>Size</h4>\n' +
                    '    <br><br>\n' +
                    '    <ButtonGroup size="large">\n' +
                    '        <Button type="ghost">Large</Button>\n' +
                    '        <Button type="ghost">Large</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup>\n' +
                    '        <Button type="ghost">Default</Button>\n' +
                    '        <Button type="ghost">Default</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup size="small">\n' +
                    '        <Button type="ghost">Small</Button>\n' +
                    '        <Button type="ghost">Small</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <br><br>\n' +
                    '    <ButtonGroup size="large" shape="circle">\n' +
                    '        <Button type="ghost">Large</Button>\n' +
                    '        <Button type="ghost">Large</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup shape="circle">\n' +
                    '        <Button type="ghost">Default</Button>\n' +
                    '        <Button type="ghost">Default</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '    <ButtonGroup size="small" shape="circle">\n' +
                    '        <Button type="ghost">Small</Button>\n' +
                    '        <Button type="ghost">Small</Button>\n' +
                    '    </ButtonGroup>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>\n' +
                    '    \n' +
                    '按钮组纵向排列 #\n' +
                    '通过设置ButtonGroup的属性vertical，可以使按钮组纵向排列。\n' +
                    '\n'
        },
        {
          title: '按钮组纵向排列',
            info: '通过设置ButtonGroup的属性vertical，可以使按钮组纵向排列。',
            demo: ' <button-group vertical>\n' +
            '        <i-button type="ghost" icon="social-facebook"></i-button>\n' +
            '        <i-button type="ghost" icon="social-twitter"></i-button>\n' +
            '        <i-button type="ghost" icon="social-googleplus"></i-button>\n' +
            '        <i-button type="ghost" icon="social-tumblr"></i-button>\n' +
            '    </button-group>',
            code: '<template>\n' +
                    '    <ButtonGroup vertical>\n' +
                    '        <Button type="ghost" icon="social-facebook"></Button>\n' +
                    '        <Button type="ghost" icon="social-twitter"></Button>\n' +
                    '        <Button type="ghost" icon="social-googleplus"></Button>\n' +
                    '        <Button type="ghost" icon="social-tumblr"></Button>\n' +
                    '    </ButtonGroup>\n' +
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
            name: 'Button props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'type', explain:'按钮类型，可选值为primary、ghost、dashed、text、' +
                'info、success、warning、error或者不设置', type:'String',
                    default:''},
                {attr: 'size', explain:'按钮大小，可选值为large、small、default或者不设置',
                    type:'String', default:''},
                {attr: 'shape', explain:'按钮形状，可选值为circle或者不设置',
                    type:'String', default:''},
                {attr: 'long', explain:'开启后，按钮的长度为 100%',
                    type:'Boolean', false:''},
                {attr: 'html-type', explain:'设置button原生的type，可选值为button、submit、' +
                'reset', type:'String', default:'button'},
                {attr: 'disabled', explain:'设置按钮为禁用状态', type:'Boolean',
                    default:'false'},
                {attr: 'loading', explain:'设置按钮为加载中状态',type:'Boolean',
                    default:'false'},
                {attr: 'icon', explain:'设置按钮的图标类型', type:'String', default:''}
            ]
        },
        {
            name: 'ButtonGroup props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'size', explain:'按钮组合大小，可选值为large、small、default或者不设置',
                    type:'String', default:''},
                {attr: 'shape', explain:'按钮组合形状，可选值为circle或者不设置',
                    type:'String', default:''},
                {attr: 'vertical', explain:'是否纵向排列按钮组',
                    type:'Boolean', default:'false'}
            ]
        },
    ]
}