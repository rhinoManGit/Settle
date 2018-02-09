/*
*
* */
module.exports={
    name: 'Upload 上传',
    class: 'upload',
    outline: '文件选择上传和拖拽上传控件。',
    tips:'暂不支持 IE9 浏览器。',
    list:[
        {
            title: '点击上传',
            info: '最基本用法，点击上传，一次选择一个文件。',
            demo: '<Upload action="//jsonplaceholder.typicode.com/posts/">\n' +
            '        <i-button type="ghost" icon="ios-cloud-upload-outline">Upload files</i-button>\n' +
            '    </Upload>',
            code: '<template>\n' +
                    '    <Upload action="//jsonplaceholder.typicode.com/posts/">\n' +
                    '        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>\n' +
                    '    </Upload>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '多选',
            info: '设置属性 multiple，可以选择多个文件。',
            demo: '<Upload\n' +
            '        multiple\n' +
            '        action="//jsonplaceholder.typicode.com/posts/">\n' +
            '        <i-button type="ghost" icon="ios-cloud-upload-outline">Upload files</i-button>\n' +
            '    </Upload>',
            code: '<template>\n' +
                    '    <Upload\n' +
                    '        multiple\n' +
                    '        action="//jsonplaceholder.typicode.com/posts/">\n' +
                    '        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>\n' +
                    '    </Upload>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '手动上传',
            info: '绑定 before-upload，并返回false，可以阻止默认上传流程，手动控制文件上传。',
            demo: ' <Upload\n' +
            '            :before-upload="handleUpload"\n' +
            '            action="//jsonplaceholder.typicode.com/posts/">\n' +
            '            <i-button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</i-button>\n' +
            '        </Upload>\n' +
            '        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? \'Uploading\' : \'Click to upload\' }}</Button></div>',
            code: '<template>\n' +
                    '    <div>\n' +
                    '        <Upload\n' +
                    '            :before-upload="handleUpload"\n' +
                    '            action="//jsonplaceholder.typicode.com/posts/">\n' +
                    '            <Button type="ghost" icon="ios-cloud-upload-outline">Select the file to upload</Button>\n' +
                    '        </Upload>\n' +
                    '        <div v-if="file !== null">Upload file: {{ file.name }} <Button type="text" @click="upload" :loading="loadingStatus">{{ loadingStatus ? \'Uploading\' : \'Click to upload\' }}</Button></div>\n' +
                    '    </div>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                file: null,\n' +
                    '                loadingStatus: false\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleUpload (file) {\n' +
                    '                this.file = file;\n' +
                    '                return false;\n' +
                    '            },\n' +
                    '            upload () {\n' +
                    '                this.loadingStatus = true;\n' +
                    '                setTimeout(() => {\n' +
                    '                    this.file = null;\n' +
                    '                    this.loadingStatus = false;\n' +
                    '                    this.$Message.success(\'Success\')\n' +
                    '                }, 1500);\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '拖拽上传',
            info: '设置属性 type 为 drag，可以拖拽上传。',
            demo: '<Upload\n' +
            '        multiple\n' +
            '        type="drag"\n' +
            '        action="//jsonplaceholder.typicode.com/posts/">\n' +
            '        <div style="padding: 20px 0">\n' +
            '            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>\n' +
            '            <p>Click or drag files here to upload</p>\n' +
            '        </div>\n' +
            '    </Upload>',
            code: '<template>\n' +
                    '    <Upload\n' +
                    '        multiple\n' +
                    '        type="drag"\n' +
                    '        action="//jsonplaceholder.typicode.com/posts/">\n' +
                    '        <div style="padding: 20px 0">\n' +
                    '            <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>\n' +
                    '            <p>Click or drag files here to upload</p>\n' +
                    '        </div>\n' +
                    '    </Upload>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义上传列表',
            info: '可以自由控制上传列表，完成各种业务逻辑，示例是一个照片墙，可以查看大图和删除。\n' +
            '\n' +
            '设置属性 show-upload-list 为 false，可以不显示默认的上传列表。\n' +
            '设置属性 default-file-list 设置默认已上传的列表。\n' +
            '通过 on-success 等属性来控制完整的上传过程，详见API。\n' +
            '另外，可以通过丰富的配置，来定制上传需求，本例中包含了：\n' +
            '\n' +
            '文件必须是 jpg 或 png 格式的图片。\n' +
            '最多上传5张图片。\n' +
            '每个文件大小不超过 2M。',
            demo: '<div class="demo-upload-list" v-for="item in uploadList">\n' +
            '        <template v-if="item.status === \'finished\'">\n' +
            '            <img :src="item.url">\n' +
            '            <div class="demo-upload-list-cover">\n' +
            '                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>\n' +
            '                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>\n' +
            '            </div>\n' +
            '        </template>\n' +
            '        <template v-else>\n' +
            '            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>\n' +
            '        </template>\n' +
            '    </div>\n' +
            '    <Upload\n' +
            '        ref="upload"\n' +
            '        :show-upload-list="false"\n' +
            '        :default-file-list="defaultList"\n' +
            '        :on-success="handleSuccess"\n' +
            '        :format="[\'jpg\',\'jpeg\',\'png\']"\n' +
            '        :max-size="2048"\n' +
            '        :on-format-error="handleFormatError"\n' +
            '        :on-exceeded-size="handleMaxSize"\n' +
            '        :before-upload="handleBeforeUpload"\n' +
            '        multiple\n' +
            '        type="drag"\n' +
            '        action="//jsonplaceholder.typicode.com/posts/"\n' +
            '        style="display: inline-block;width:58px;">\n' +
            '        <div style="width: 58px;height:58px;line-height: 58px;">\n' +
            '            <Icon type="camera" size="20"></Icon>\n' +
            '        </div>\n' +
            '    </Upload>\n' +
            '    <Modal title="View Image" v-model="visible">\n' +
            '        <img :src="\'https://o5wwk8baw.qnssl.com/\' + imgName + \'/large\'" v-if="visible" style="width: 100%">\n' +
            '    </Modal>',
            code: '<template>\n' +
                    '    <div class="demo-upload-list" v-for="item in uploadList">\n' +
                    '        <template v-if="item.status === \'finished\'">\n' +
                    '            <img :src="item.url">\n' +
                    '            <div class="demo-upload-list-cover">\n' +
                    '                <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>\n' +
                    '                <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>\n' +
                    '            </div>\n' +
                    '        </template>\n' +
                    '        <template v-else>\n' +
                    '            <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>\n' +
                    '        </template>\n' +
                    '    </div>\n' +
                    '    <Upload\n' +
                    '        ref="upload"\n' +
                    '        :show-upload-list="false"\n' +
                    '        :default-file-list="defaultList"\n' +
                    '        :on-success="handleSuccess"\n' +
                    '        :format="[\'jpg\',\'jpeg\',\'png\']"\n' +
                    '        :max-size="2048"\n' +
                    '        :on-format-error="handleFormatError"\n' +
                    '        :on-exceeded-size="handleMaxSize"\n' +
                    '        :before-upload="handleBeforeUpload"\n' +
                    '        multiple\n' +
                    '        type="drag"\n' +
                    '        action="//jsonplaceholder.typicode.com/posts/"\n' +
                    '        style="display: inline-block;width:58px;">\n' +
                    '        <div style="width: 58px;height:58px;line-height: 58px;">\n' +
                    '            <Icon type="camera" size="20"></Icon>\n' +
                    '        </div>\n' +
                    '    </Upload>\n' +
                    '    <Modal title="View Image" v-model="visible">\n' +
                    '        <img :src="\'https://o5wwk8baw.qnssl.com/\' + imgName + \'/large\'" v-if="visible" style="width: 100%">\n' +
                    '    </Modal>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                defaultList: [\n' +
                    '                    {\n' +
                    '                        \'name\': \'a42bdcc1178e62b4694c830f028db5c0\',\n' +
                    '                        \'url\': \'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        \'name\': \'bc7521e033abdd1e92222d733590f104\',\n' +
                    '                        \'url\': \'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                imgName: \'\',\n' +
                    '                visible: false,\n' +
                    '                uploadList: []\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleView (name) {\n' +
                    '                this.imgName = name;\n' +
                    '                this.visible = true;\n' +
                    '            },\n' +
                    '            handleRemove (file) {\n' +
                    '                const fileList = this.$refs.upload.fileList;\n' +
                    '                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);\n' +
                    '            },\n' +
                    '            handleSuccess (res, file) {\n' +
                    '                file.url = \'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar\';\n' +
                    '                file.name = \'7eb99afb9d5f317c912f08b5212fd69a\';\n' +
                    '            },\n' +
                    '            handleFormatError (file) {\n' +
                    '                this.$Notice.warning({\n' +
                    '                    title: \'The file format is incorrect\',\n' +
                    '                    desc: \'File format of \' + file.name + \' is incorrect, please select jpg or png.\'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            handleMaxSize (file) {\n' +
                    '                this.$Notice.warning({\n' +
                    '                    title: \'Exceeding file size limit\',\n' +
                    '                    desc: \'File  \' + file.name + \' is too large, no more than 2M.\'\n' +
                    '                });\n' +
                    '            },\n' +
                    '            handleBeforeUpload () {\n' +
                    '                const check = this.uploadList.length < 5;\n' +
                    '                if (!check) {\n' +
                    '                    this.$Notice.warning({\n' +
                    '                        title: \'Up to five pictures can be uploaded.\'\n' +
                    '                    });\n' +
                    '                }\n' +
                    '                return check;\n' +
                    '            }\n' +
                    '        },\n' +
                    '        mounted () {\n' +
                    '            this.uploadList = this.$refs.upload.fileList;\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n' +
                    '<style>\n' +
                    '    .demo-upload-list{\n' +
                    '        display: inline-block;\n' +
                    '        width: 60px;\n' +
                    '        height: 60px;\n' +
                    '        text-align: center;\n' +
                    '        line-height: 60px;\n' +
                    '        border: 1px solid transparent;\n' +
                    '        border-radius: 4px;\n' +
                    '        overflow: hidden;\n' +
                    '        background: #fff;\n' +
                    '        position: relative;\n' +
                    '        box-shadow: 0 1px 1px rgba(0,0,0,.2);\n' +
                    '        margin-right: 4px;\n' +
                    '    }\n' +
                    '    .demo-upload-list img{\n' +
                    '        width: 100%;\n' +
                    '        height: 100%;\n' +
                    '    }\n' +
                    '    .demo-upload-list-cover{\n' +
                    '        display: none;\n' +
                    '        position: absolute;\n' +
                    '        top: 0;\n' +
                    '        bottom: 0;\n' +
                    '        left: 0;\n' +
                    '        right: 0;\n' +
                    '        background: rgba(0,0,0,.6);\n' +
                    '    }\n' +
                    '    .demo-upload-list:hover .demo-upload-list-cover{\n' +
                    '        display: block;\n' +
                    '    }\n' +
                    '    .demo-upload-list-cover i{\n' +
                    '        color: #fff;\n' +
                    '        font-size: 20px;\n' +
                    '        cursor: pointer;\n' +
                    '        margin: 0 2px;\n' +
                    '    }\n' +
                    '</style>'
        }
    ],

    api: [
        {
            name: 'Upload props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'action', explain:'上传的地址，必填\t', type:'String', default:'-'},
                {attr: 'headers', explain:'设置上传的请求头部\t', type:'Object', default:'{}'},
                {attr: 'multiple', explain:'是否支持多选文件\t', type:'Boolean', default:'false'},
                {attr: 'data', explain:'上传时附带的额外参数\t', type:'Object', default:'-'},
                {attr: 'name', explain:'上传的文件字段名\t', type:'String', default:'file'},
                {attr: 'with-credentials\t', explain:'支持发送 cookie 凭证信息\t', type:'Boolean', default:'false'},
                {attr: 'show-upload-list\t', explain:'是否显示已上传文件列表\t', type:'Boolean', default:'true'},
                {attr: 'type', explain:'上传控件的类型，可选值为 select（点击选择），drag（支持拖拽）\t', type:'String', default:'select'},
                {attr: 'accept', explain:'接受上传的文件类型\t', type:'String', default:'-'},
                {attr: 'format', explain:'支持的文件类型，与 accept 不同的是，format 是识别文件的后缀名，accept 为 input 标签原生的 accept 属性，会在选择文件时过滤，可以两者结合使用\t', type:'Array', default:'[]'},
                {attr: 'max-size\t', explain:'文件大小限制，单位 kb\t', type:'Number', default:'-'},
                {attr: 'before-upload\t', explain:'上传文件之前的钩子，参数为上传的文件，若返回 false 或者 Promise 则停止上传\t', type:'Function', default:'-'},
                {attr: 'on-progress\t', explain:'文件上传时的钩子，返回字段为 event, file, fileList\t', type:'Function', default:'-'},
                {attr: 'on-success\t', explain:'文件上传成功时的钩子，返回字段为 response, file, fileList\t', type:'Function', default:'-'},
                {attr: 'on-error\t', explain:'文件上传失败时的钩子，返回字段为 error, file, fileList\t', type:'Function', default:'-'},
                {attr: 'on-preview\t', explain:'点击已上传的文件链接时的钩子，返回字段为 file， 可以通过 file.response 拿到服务端返回数据\t', type:'Function', default:'-'},
                {attr: 'on-remove\t', explain:'文件列表移除文件时的钩子，返回字段为 file, fileList\t', type:'Function', default:'-'},
                {attr: 'on-format-error\t', explain:'文件格式验证失败时的钩子，返回字段为 file, fileList\t', type:'Function', default:'-'},
                {attr: 'on-exceeded-size\t', explain:'文件超出指定大小限制时的钩子，返回字段为 file, fileList\t', type:'Function', default:'-'},
                {attr: 'default-file-list\t', explain:'默认已上传的文件列表，例如：\n' +
                '                                    \n' +
                '[\n' +
                '    {\n' +
                '        name: \'img1.jpg\',\n' +
                '        url: \'http://www.xxx.com/img1.jpg\'\n' +
                '    },\n' +
                '    {\n' +
                '        name: \'img2.jpg\',\n' +
                '        url: \'http://www.xxx.com/img2.jpg\'\n' +
                '    }\n' +
                ']', type:'Array', default:'[]'}
            ]
        },
        {
            name: 'Upload methods',
            list: [
                {attr: '方法名\t', explain:'说明', default:'参数'},
                {attr: 'clearFiles', explain:'清空已上传的文件列表\t', default:'无\n'}
            ]
        },
        {
            name: 'Upload slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'触发上传组件的控件\n'},
                {attr: 'tip', explain:'辅助提示内容\n'}
            ]
        }
    ]
}