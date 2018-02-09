/*
*
* */
module.exports={
    name: 'Modal 对话框',
    class: 'modal',
    outline: '模态对话框，在浮层中显示，引导用户进行相关操作。' +
    'Modal提供了两种用法，普通组件使用和封装好的简洁实例调用。<br>' +
    'Modal instance<br>' +
    '通过直接调用以下方法来使用组件：<b><br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Modal.info(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Modal.success(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Modal.warning(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;this.$Modal.error(config)\n<br>' +
    '&nbsp;&nbsp;&nbsp;&nbsp;tthis.$Modal.confirm(config)<br></b>' +
    '另外提供了全局关闭对话框的方法：：\n<br>' +
    '\n' +
    '<b>&nbsp;&nbsp;&nbsp;&nbsp;this.$Modal.remove()\n</b>',
    tips:'',
    list:[
        {
            title: '普通提示',
            info: '最简单的使用方法，通过控制属性visible来显示 / 隐藏对话框。\n' +
            '\n' +
            '可以使用 v-model 实现双向绑定。\n' +
            '\n' +
            '默认按键盘ESC键也可以关闭。',
            demo: '<i-button type="primary" @click="modal1 = true">Display dialog box</i-button><Modal\n' +
            '        v-model="modal1"\n' +
            '        title="Common Modal dialog box title"\n' +
            '        @on-ok="ok11"\n' +
            '        @on-cancel="cancel11">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="modal1 = true">Display dialog box</Button>\n' +
                    '    <Modal\n' +
                    '        v-model="modal1"\n' +
                    '        title="Common Modal dialog box title"\n' +
                    '        @on-ok="ok"\n' +
                    '        @on-cancel="cancel">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                modal1: false\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            ok () {\n' +
                    '                this.$Message.info(\'Clicked ok\');\n' +
                    '            },\n' +
                    '            cancel () {\n' +
                    '                this.$Message.info(\'Clicked cancel\');\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义样式',
            info: 'Modal 组件提供了灵活的自定义样式 API 和 Slot，可以自由控制整个 Modal 的各个组成部分，比如页头、页脚、关闭按钮。\n' +
            '\n' +
            '通过和其它组件的交互，能实现更复杂的功能，满足了大多业务场景。',
            demo: '<i-button @click="modal2 = true">Custom header and footer</i-button>\n' +
            '    <Modal v-model="modal2" width="360">\n' +
            '        <p slot="header" style="color:#f60;text-align:center">\n' +
            '            <Icon type="information-circled"></Icon>\n' +
            '            <span>Delete confirmation</span>\n' +
            '        </p>\n' +
            '        <div style="text-align:center">\n' +
            '            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>\n' +
            '            <p>Will you delete it?</p>\n' +
            '        </div>\n' +
            '        <div slot="footer">\n' +
            '            <i-button type="error" size="large" long :loading="modal_loading" @click="del">Delete</i-button>\n' +
            '        </div>\n' +
            '    </Modal>\n' +
            '    <i-button @click="modal3 = true">No title bar</i-button>\n' +
            '    <Modal v-model="modal3">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>\n' +
            '    <i-button @click="modal4 = true">Internationalization</i-button>\n' +
            '    <Modal\n' +
            '        v-model="modal4"\n' +
            '        title="Modal Title"\n' +
            '        ok-text="OK11"\n' +
            '        cancel-text="Cancel11">\n' +
            '        <p>Something...</p>\n' +
            '        <p>Something...</p>\n' +
            '        <p>Something...</p>\n' +
            '    </Modal>\n' +
            '    <i-button @click="modal5 = true">Set the width</i-button>\n' +
            '    <Modal\n' +
            '        v-model="modal5"\n' +
            '        title="Custom width"\n' +
            '        width="300">\n' +
            '        <p>Customize width, unit px, default 520px.</p>\n' +
            '        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>\n' +
            '    </Modal>',
            code: '<template>\n' +
                    '    <Button @click="modal2 = true">Custom header and footer</Button>\n' +
                    '    <Modal v-model="modal2" width="360">\n' +
                    '        <p slot="header" style="color:#f60;text-align:center">\n' +
                    '            <Icon type="information-circled"></Icon>\n' +
                    '            <span>Delete confirmation</span>\n' +
                    '        </p>\n' +
                    '        <div style="text-align:center">\n' +
                    '            <p>After this task is deleted, the downstream 10 tasks will not be implemented.</p>\n' +
                    '            <p>Will you delete it?</p>\n' +
                    '        </div>\n' +
                    '        <div slot="footer">\n' +
                    '            <Button type="error" size="large" long :loading="modal_loading" @click="del">Delete</Button>\n' +
                    '        </div>\n' +
                    '    </Modal>\n' +
                    '    <Button @click="modal3 = true">No title bar</Button>\n' +
                    '    <Modal v-model="modal3">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '    <Button @click="modal4 = true">Internationalization</Button>\n' +
                    '    <Modal\n' +
                    '        v-model="modal4"\n' +
                    '        title="Modal Title"\n' +
                    '        ok-text="OK"\n' +
                    '        cancel-text="Cancel">\n' +
                    '        <p>Something...</p>\n' +
                    '        <p>Something...</p>\n' +
                    '        <p>Something...</p>\n' +
                    '    </Modal>\n' +
                    '    <Button @click="modal5 = true">Set the width</Button>\n' +
                    '    <Modal\n' +
                    '        v-model="modal5"\n' +
                    '        title="Custom width"\n' +
                    '        width="300">\n' +
                    '        <p>Customize width, unit px, default 520px.</p>\n' +
                    '        <p>The width of the dialog box is responsive, and the width becomes <code>auto</code> when the screen size is less than 768px.</p>\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                modal2: false,\n' +
                    '                modal_loading: false,\n' +
                    '                modal3: false,\n' +
                    '                modal4: false,\n' +
                    '                modal5: false\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            del () {\n' +
                    '                this.modal_loading = true;\n' +
                    '                setTimeout(() => {\n' +
                    '                    this.modal_loading = false;\n' +
                    '                    this.modal2 = false;\n' +
                    '                    this.$Message.success(\'Successfully delete\');\n' +
                    '                }, 2000);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '异步关闭',
            info: '给Modal添加属性loading后，点击确定按钮对话框不会自动消失，并显示 loading 状态，需要手动关闭对话框，常用于表单提交。',
            demo: '<i-button type="primary" @click="modal6 = true">Display dialog box</i-button>\n' +
            '    <Modal\n' +
            '        v-model="modal6"\n' +
            '        title="Title"\n' +
            '        :loading="loading111"\n' +
            '        @on-ok="asyncOK">\n' +
            '        <p>After you click ok, the dialog box will close in 2 seconds.</p>\n' +
            '    </Modal>',
            code: '<template>\n' +
                    '    <Button type="primary" @click="modal6 = true">Display dialog box</Button>\n' +
                    '    <Modal\n' +
                    '        v-model="modal6"\n' +
                    '        title="Title"\n' +
                    '        :loading="loading"\n' +
                    '        @on-ok="asyncOK">\n' +
                    '        <p>After you click ok, the dialog box will close in 2 seconds.</p>\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                modal6: false,\n' +
                    '                loading: true\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            asyncOK () {\n' +
                    '                setTimeout(() => {\n' +
                    '                    this.modal6 = false;\n' +
                    '                }, 2000);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '禁用关闭',
            info: '可以禁用关闭和遮罩层关闭。\n' +
            '\n',
            demo: '<i-button @click="modal7 = true">Disable upper right corner (including Esc key)</i-button>\n' +
            '    <Modal\n' +
            '        title="Title"\n' +
            '        v-model="modal7"\n' +
            '        :closable="false">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>\n' +
            '    <i-button @click="modal8 = true">Disable mask layer closure</i-button>\n' +
            '    <Modal\n' +
            '        title="Title"\n' +
            '        v-model="modal8"\n' +
            '        :mask-closable="false">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>',
            code: '<template>\n' +
                    '    <Button @click="modal7 = true">Disable upper right corner (including Esc key)</Button>\n' +
                    '    <Modal\n' +
                    '        title="Title"\n' +
                    '        v-model="modal7"\n' +
                    '        :closable="false">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '    <Button @click="modal8 = true">Disable mask layer closure</Button>\n' +
                    '    <Modal\n' +
                    '        title="Title"\n' +
                    '        v-model="modal8"\n' +
                    '        :mask-closable="false">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                modal7: false,\n' +
                    '                modal8: false,\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义位置',
            info: '可以自定义 Modal 的对话框样式 以及 对话框 Wrap 的 class 名称，从而实现更多自定义的样式，比如垂直居中。\n' +
            '\n',
            demo: '<i-button @click="modal9 = true">20px from the top</i-button>\n' +
            '    <Modal\n' +
            '        title="Title"\n' +
            '        v-model="modal9"\n' +
            '        :styles="{top: \'20px\'}">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>\n' +
            '    <i-button @click="modal10 = true">Vertical center</i-button>\n' +
            '    <Modal\n' +
            '        title="Title"\n' +
            '        v-model="modal10"\n' +
            '        class-name="vertical-center-modal">\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '        <p>Content of dialog</p>\n' +
            '    </Modal>',
            code: '<style lang="less">\n' +
                    '    .vertical-center-modal{\n' +
                    '        display: flex;\n' +
                    '        align-items: center;\n' +
                    '        justify-content: center;\n' +
                    '\n' +
                    '        .ivu-modal{\n' +
                    '            top: 0;\n' +
                    '        }\n' +
                    '    }\n' +
                    '</style>\n' +
                    '<template>\n' +
                    '    <Button @click="modal9 = true">20px from the top</Button>\n' +
                    '    <Modal\n' +
                    '        title="Title"\n' +
                    '        v-model="modal9"\n' +
                    '        :styles="{top: \'20px\'}">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '    <Button @click="modal10 = true">Vertical center</Button>\n' +
                    '    <Modal\n' +
                    '        title="Title"\n' +
                    '        v-model="modal10"\n' +
                    '        class-name="vertical-center-modal">\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '        <p>Content of dialog</p>\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                modal9: false,\n' +
                    '                modal10: false,\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '实例化使用方法',
            info: '除了上述通过标准组件的使用方法，iView 还精心封装了一些实例方法，用来创建一次性的轻量级对话框。\n' +
            '\n' +
            '实例以隐式创建 Vue 组件的方式在全局创建一个对话框，并在消失时移除，所以同时只能操作一个对话框。',
            demo: '',
            code: ''
        },
        {
            title: '基本用法',
            info: '四种基本的对话框，只提供一个确定按钮。',
            demo: '<i-button @click="instance(\'info\')">Info</i-button>\n' +
            '    <i-button @click="instance(\'success\')">Success</i-button>\n' +
            '    <i-button @click="instance(\'warning\')">Warning</i-button>\n' +
            '    <i-button @click="instance(\'error\')">Error</i-button>',
            code: '<template>\n' +
                    '    <Button @click="instance(\'info\')">Info</Button>\n' +
                    '    <Button @click="instance(\'success\')">Success</Button>\n' +
                    '    <Button @click="instance(\'warning\')">Warning</Button>\n' +
                    '    <Button @click="instance(\'error\')">Error</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            instance (type) {\n' +
                    '                const title = \'Title\';\n' +
                    '                const content = \'<p>Content of dialog</p><p>Content of dialog</p>\';\n' +
                    '                switch (type) {\n' +
                    '                    case \'info\':\n' +
                    '                        this.$Modal.info({\n' +
                    '                            title: title,\n' +
                    '                            content: content\n' +
                    '                        });\n' +
                    '                        break;\n' +
                    '                    case \'success\':\n' +
                    '                        this.$Modal.success({\n' +
                    '                            title: title,\n' +
                    '                            content: content\n' +
                    '                        });\n' +
                    '                        break;\n' +
                    '                    case \'warning\':\n' +
                    '                        this.$Modal.warning({\n' +
                    '                            title: title,\n' +
                    '                            content: content\n' +
                    '                        });\n' +
                    '                        break;\n' +
                    '                    case \'error\':\n' +
                    '                        this.$Modal.error({\n' +
                    '                            title: title,\n' +
                    '                            content: content\n' +
                    '                        });\n' +
                    '                        break;\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '确认对话框',
            info: '快速弹出确认对话框，并且可以自定义按钮文字及异步关闭。',
            demo: '<i-button @click="confirm11">Normal</i-button>\n' +
            '    <i-button @click="custom">Custom button text</i-button>\n' +
            '    <i-button @click="async">Asynchronous closing</i-button>',
            code: '<template>\n' +
                    '    <Button @click="confirm">Normal</Button>\n' +
                    '    <Button @click="custom">Custom button text</Button>\n' +
                    '    <Button @click="async">Asynchronous closing</Button>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        methods: {\n' +
                    '            confirm () {\n' +
                    '                this.$Modal.confirm({\n' +
                    '                    title: \'Title\',\n' +
                    '                    content: \'<p>Content of dialog</p><p>Content of dialog</p>\',\n' +
                    '                    onOk: () => {\n' +
                    '                        this.$Message.info(\'Clicked ok\');\n' +
                    '                    },\n' +
                    '                    onCancel: () => {\n' +
                    '                        this.$Message.info(\'Clicked cancel\');\n' +
                    '                    }\n' +
                    '                });\n' +
                    '            },\n' +
                    '            custom () {\n' +
                    '                this.$Modal.confirm({\n' +
                    '                    title: \'Title\',\n' +
                    '                    content: \'<p>Content of dialog</p><p>Content of dialog</p>\',\n' +
                    '                    okText: \'OK\',\n' +
                    '                    cancelText: \'Cancel\'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            async () {\n' +
                    '                this.$Modal.confirm({\n' +
                    '                    title: \'Title\',\n' +
                    '                    content: \'<p>The dialog box will be closed after 2 seconds</p>\',\n' +
                    '                    loading: true,\n' +
                    '                    onOk: () => {\n' +
                    '                        setTimeout(() => {\n' +
                    '                            this.$Modal.remove();\n' +
                    '                            this.$Message.info(\'Asynchronously close the dialog box\');\n' +
                    '                        }, 2000);\n' +
                    '                    }\n' +
                    '                });\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义内容',
            info: '使用 render 字段可以基于 Render 函数来自定义内容。\n' +
            '\n' +
            '使用 render 后，将不再限制类型，content 也将无效。<a href="https://segmentfault.com/l/1500000008892728"> 学习 Render 函数的内容</a>',
            demo: '<p>\n' +
            '        Name: {{ value111 }}\n' +
            '    </p>\n' +
            '    <p>\n' +
            '        <i-button @click="handleRender">Custom content</i-button>\n' +
            '    </p>',
            code: '<template>\n' +
                    '    <p>\n' +
                    '        Name: {{ value }}\n' +
                    '    </p>\n' +
                    '    <p>\n' +
                    '        <Button @click="handleRender">Custom content</Button>\n' +
                    '    </p>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value: \'\'\n' +
                    '            }            \n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleRender () {\n' +
                    '                this.$Modal.confirm({\n' +
                    '                    render: (h) => {\n' +
                    '                        return h(\'Input\', {\n' +
                    '                            props: {\n' +
                    '                                value: this.value,\n' +
                    '                                autofocus: true,\n' +
                    '                                placeholder: \'Please enter your name...\'\n' +
                    '                            },\n' +
                    '                            on: {\n' +
                    '                                input: (val) => {\n' +
                    '                                    this.value = val;\n' +
                    '                                }\n' +
                    '                            }\n' +
                    '                        })\n' +
                    '                    }\n' +
                    '                })\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
    ],

    api: [
        {
            name: 'Modal props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'对话框是否显示，可使用 v-model 双向绑定数据。\t', type:'Boolean', default:'false'},
                {attr: 'title', explain:'对话框标题，如果使用 slot 自定义了页头，则 title 无效\t', type:'String', default:'-'},
                {attr: 'closable', explain:'是否显示右上角的关闭按钮，关闭后 Esc 按键也将关闭\t', type:'Boolean', default:'true'},
                {attr: 'mask-closable\t', explain:'是否允许点击遮罩层关闭\t', type:'Boolean', default:'true'},
                {attr: 'loading', explain:'点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动设置visible来关闭对话框\t', type:'Boolean', default:'false'},
                {attr: 'scrollable', explain:'页面是否可以滚动\t', type:'Boolean', default:'false'},
                {attr: 'ok-text\t', explain:'确定按钮文字\t', type:'String', default:'确定'},
                {attr: 'cancel-text\t', explain:'取消按钮文字\t', type:'String', default:'取消'},
                {attr: 'width', explain:'对话框宽度，对话框的宽度是响应式的，当屏幕尺寸小于 768px 时，宽度会变为自动auto。当其值不大于 100 时以百分比显示，大于 100 时为像素\t', type:'Number | String', default:'520'},
                {attr: 'styles', explain:'设置浮层样式，调整浮层位置等，该属性设置的是.ivu-modal的样式\t', type:'Object', default:'-'},
                {attr: 'class-name\t', explain:'设置对话框容器.ivu-modal-wrap的类名，可辅助实现垂直居中等自定义效果\t', type:'String', default:'-'},
                {attr: 'transition-names\t', explain:'自定义显示动画，第一项是模态框，第二项是背景\t', type:'Array', default:'[\'ease\', \'fade\']'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内\t', type:'Boolean', default:'true'},
            ]
        },
        {
            name: 'Modal events ',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值\n'},
                {attr: 'on-ok', explain:'点击确定的回调\t', default:'无'},
                {attr: 'on-cancel', explain:'点击取消的回调\t', default:'无'},
                {attr: 'on-visible-change', explain:'显示状态发生变化时触发\t', default:'true / false'},
            ]
        },
        {
            name: 'Modal slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: 'header', explain:'自定义页头\n'},
                {attr: 'footer', explain:'自定义页脚内容\n'},
                {attr: 'close', explain:'自定义右上角关闭内容\n'},
                {attr: '无', explain:'对话框主体内容\n'}
            ]
        },
        {
            name: 'config',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'title', explain:'标题', type:'String | Element String', default:'-'},
                {attr: 'content', explain:'内容', type:'String | Element String\t', default:'-'},
                {attr: 'render', explain:'自定义内容，使用后不再限制类型， content 也无效。 学习 Render 函数的内容\t', type:'Function', default:'-'},
                {attr: 'width', explain:'宽度，单位 px\t', type:'Number | String\t', default:'416'},
                {attr: 'okText', explain:'确定按钮的文字\t', type:'String\t', default:'确定'},
                {attr: 'cancelText', explain:'取消按钮的文字，只在Modal.confirm()下有效\t', type:'String\t', default:'取消'},
                {attr: 'loading', explain:'点击确定按钮时，确定按钮是否显示 loading 状态，开启则需手动调用Modal.remove()来关闭对话框\t', type:'Boolean', default:'false'},
                {attr: 'scrollable', explain:'页面是否可以滚动\t', type:'Boolean', default:'false'},
                {attr: 'closable', explain:'是否可以按 Esc 键关闭\t', type:'Boolean', default:'false'},
                {attr: 'onOk', explain:'点击确定的回调\t', type:'Function', default:'-'},
                {attr: 'onCancel', explain:'点击取消的回调，只在Modal.confirm()下有效\t', type:'Function', default:'-'}
            ]
        }
    ]
}