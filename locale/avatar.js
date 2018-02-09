/*
*
* */
module.exports={
    name: 'Avatar 头像',
    class: 'avatar',
    outline: '用来代表用户或事物，支持图片、图标或字符展示。',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '头像有三种尺寸，两种形状可选。',
            demo: '<div>\n' +
            '        <div class="demo-avatar">\n' +
            '            <Avatar icon="person" size="large"></Avatar>\n' +
            '            <Avatar icon="person"></Avatar>\n' +
            '            <Avatar icon="person" size="small"></Avatar>\n' +
            '        </div>\n' +
            '        <div class="demo-avatar">\n' +
            '            <Avatar shape="square" icon="person" size="large"></Avatar>\n' +
            '            <Avatar shape="square" icon="person"></Avatar>\n' +
            '            <Avatar shape="square" icon="person" size="small"></Avatar>\n' +
            '        </div>\n' +
            '    </div>',
            code: '<template>\n' +
                    '    <div>\n' +
                    '        <div class="demo-avatar">\n' +
                    '            <Avatar icon="person" size="large" />\n' +
                    '            <Avatar icon="person" />\n' +
                    '            <Avatar icon="person" size="small" />\n' +
                    '        </div>\n' +
                    '        <div class="demo-avatar">\n' +
                    '            <Avatar shape="square" icon="person" size="large" />\n' +
                    '            <Avatar shape="square" icon="person" />\n' +
                    '            <Avatar shape="square" icon="person" size="small" />\n' +
                    '        </div>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '类型',
            info: '支持三种类型：图片、Icon 以及字符，其中 Icon 和字符型可以自定义图标颜色及背景色。',
            demo: '<div class="demo-avatar">\n' +
            '        <Avatar icon="person" ></Avatar>\n' +
            '        <Avatar>U</Avatar>\n' +
            '        <Avatar>USER</Avatar>\n' +
            '        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" ></Avatar>\n' +
            '        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>\n' +
            '        <Avatar style="background-color: #87d068" icon="person" ></Avatar>\n' +
            '    </div>',
            code: '<template>\n' +
                    '    <div class="demo-avatar">\n' +
                    '        <Avatar icon="person" />\n' +
                    '        <Avatar>U</Avatar>\n' +
                    '        <Avatar>USER</Avatar>\n' +
                    '        <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" />\n' +
                    '        <Avatar style="color: #f56a00;background-color: #fde3cf">U</Avatar>\n' +
                    '        <Avatar style="background-color: #87d068" icon="person" />\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '带徽标的头像',
            info: '通常用于消息提示。',
            demo: '<div class="demo-avatar-badge">\n' +
            '        <Badge count="1">\n' +
            '            <Avatar shape="square" icon="person" ></Avatar>\n' +
            '        </Badge>\n' +
            '        <Badge dot>\n' +
            '            <Avatar shape="square" icon="person" ></Avatar>\n' +
            '        </Badge>\n' +
            '    </div>',
            code: '<template>\n' +
                    '    <div class="demo-avatar-badge">\n' +
                    '        <Badge count="1">\n' +
                    '            <Avatar shape="square" icon="person" />\n' +
                    '        </Badge>\n' +
                    '        <Badge dot>\n' +
                    '            <Avatar shape="square" icon="person" />\n' +
                    '        </Badge>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自动调整字符大小',
            info: '对于字符型的头像，当字符串较长时，字体大小可以根据头像宽度自动调整。',
            demo: '<div class="demo-avatar">\n' +
                    '        <Avatar :style="{background: color}">{{ user }}</Avatar>\n' +
                    '        <i-button size="small" @click="handleChange123">Change</i-button>\n' +
                    '    </div>',
                    code: '<template>\n' +
                    '    <div class="demo-avatar">\n' +
                    '        <Avatar :style="{background: color}">{{ user }}</Avatar>\n' +
                    '        <Button size="small" @click="handleChange">Change</Button>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    const UserList = [\'U\', \'Lucy\', \'Tom\', \'Edward\'];\n' +
                    '    const ColorList = [\'#f56a00\', \'#7265e6\', \'#ffbf00\', \'#00a2ae\'];\n' +
                    '    \n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                user: UserList[0],\n' +
                    '                color: ColorList[0]\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleChange () {\n' +
                    '                const index = UserList.indexOf(this.user);\n' +
                    '                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];\n' +
                    '                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];\n' +
                    '            }\n' +
                    '        }        \n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Avatar props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'shape', explain:'指定头像的形状，可选值为 circle、square\t', type:'String', default:'circle'},
                {attr: 'size', explain:'设置头像的大小，可选值为 large、small、default\t', type:'String', default:'default'},
                {attr: 'src\t', explain:'图片类头像的资源地址\t', type:'String', default:'-'},
                {attr: 'icon', explain:'设置头像的图标类型，参考 Icon 组件\t', type:'String', default:'-'}
            ]
        }
    ]
}