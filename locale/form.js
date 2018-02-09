/*
*
* */
module.exports={
    name: 'Form 表单',
    class: 'form',
    outline: '具有数据收集、校验和提交功能的表单，包含复选框、单选框、输入框、下拉选择框等元素。',
    tips:'注意：非 template/render 模式下，需使用 i-form。<br>W3C 标准中有如下规定：\n' +
    'When there is only one single-line text input field in a form, the user agent should accept Enter in that field as a request to submit the form.\n' +
    '\n' +
    '即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <i-form> 标签上添加 @submit.native.prevent。',
    list:[
        {
            title: '行内表单 #\n',
            info: '设置属性 inline，表单元素可以水平排列。',
            demo: '<i-form ref="formInline" :model="formInline" :rules="ruleInline" inline>\n' +
            '        <form-item prop="user">\n' +
            '            <i-input type="text" v-model="formInline.user" placeholder="Username">\n' +
            '                <Icon type="ios-person-outline" slot="prepend"></Icon>\n' +
            '            </i-input>\n' +
            '        </form-item>\n' +
            '        <form-item prop="password">\n' +
            '            <i-input type="password" v-model="formInline.password" placeholder="Password">\n' +
            '                <Icon type="ios-locked-outline" slot="prepend"></Icon>\n' +
            '            </i-input>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <i-button type="primary" @click="handleSubmit(\'formInline\')">Signin</i-button>\n' +
            '        </form-item>\n' +
            '    </form>',
            code: '<template>\n' +
                    '    <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>\n' +
                    '        <FormItem prop="user">\n' +
                    '            <Input type="text" v-model="formInline.user" placeholder="Username">\n' +
                    '                <Icon type="ios-person-outline" slot="prepend"></Icon>\n' +
                    '            </Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem prop="password">\n' +
                    '            <Input type="password" v-model="formInline.password" placeholder="Password">\n' +
                    '                <Icon type="ios-locked-outline" slot="prepend"></Icon>\n' +
                    '            </Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Button type="primary" @click="handleSubmit(\'formInline\')">Signin</Button>\n' +
                    '        </FormItem>\n' +
                    '    </Form>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                formInline: {\n' +
                    '                    user: \'\',\n' +
                    '                    password: \'\'\n' +
                    '                },\n' +
                    '                ruleInline: {\n' +
                    '                    user: [\n' +
                    '                        { required: true, message: \'Please fill in the user name\', trigger: \'blur\' }\n' +
                    '                    ],\n' +
                    '                    password: [\n' +
                    '                        { required: true, message: \'Please fill in the password.\', trigger: \'blur\' },\n' +
                    '                        { type: \'string\', min: 6, message: \'The password length cannot be less than 6 bits\', trigger: \'blur\' }\n' +
                    '                    ]\n' +
                    '                }\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSubmit(name) {\n' +
                    '                this.$refs[name].validate((valid) => {\n' +
                    '                    if (valid) {\n' +
                    '                        this.$Message.success(\'Success!\');\n' +
                    '                    } else {\n' +
                    '                        this.$Message.error(\'Fail!\');\n' +
                    '                    }\n' +
                    '                })\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '表单控件',
            info: '在 Form 内，每个表单域由 FormItem 组成，可包含的控件有：Input、Radio、Checkbox、Switch、Select、Slider、DatePicker、TimePicker、Cascader、Transfer、InputNumber、Rate、Upload、AutoComplete、ColorPicker。\n' +
            '\n' +
            '给 FormItem 设置属性 label 可以显示表单域的标签，需要给 Form 设置 label-width。\n' +
            '\n' +
            '给 FormItem 设置属性 label-for 可以指定原生的 label 标签的 for 属性，配合设置控件的 element-id 属性，可以点击 label 时聚焦控件。',
            demo: ' <i-form :model="formItem" :label-width="80">\n' +
            '        <form-item label="Input">\n' +
            '            <i-input v-model="formItem.input" placeholder="Enter something..."></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item label="Select">\n' +
            '            <i-select v-model="formItem.select">\n' +
            '                <i-option value="beijing">New York</i-option>\n' +
            '                <i-option value="shanghai">London</i-option>\n' +
            '                <i-option value="shenzhen">Sydney</i-option>\n' +
            '            </i-select>\n' +
            '        </form-item>\n' +
            '        <form-item label="DatePicker">\n' +
            '            <Row>\n' +
            '                <i-col span="11">\n' +
            '                    <date-picker type="date" placeholder="Select date" v-model="formItem.date"></date-picker>\n' +
            '                </i-col>\n' +
            '                <i-col span="2" style="text-align: center">-</i-col>\n' +
            '                <i-col span="11">\n' +
            '                    <time-picker type="time" placeholder="Select time" v-model="formItem.time"></time-picker>\n' +
            '                </i-col>\n' +
            '            </Row>\n' +
            '        </form-item>\n' +
            '        <form-item label="Radio">\n' +
            '            <radio-group v-model="formItem.radio">\n' +
            '                <Radio label="male">Male</Radio>\n' +
            '                <Radio label="female">Female</Radio>\n' +
            '            </radio-group>\n' +
            '        </form-item>\n' +
            '        <form-item label="Checkbox">\n' +
            '            <checkbox-group v-model="formItem.checkbox">\n' +
            '                <Checkbox label="Eat"></Checkbox>\n' +
            '                <Checkbox label="Sleep"></Checkbox>\n' +
            '                <Checkbox label="Run"></Checkbox>\n' +
            '                <Checkbox label="Movie"></Checkbox>\n' +
            '            </checkbox-group>\n' +
            '        </form-item>\n' +
            '        <form-item label="Switch">\n' +
            '            <i-switch v-model="formItem.switch" size="large">\n' +
            '                <span slot="open">On</span>\n' +
            '                <span slot="close">Off</span>\n' +
            '            </i-switch>\n' +
            '        </form-item>\n' +
            '        <form-item label="Slider">\n' +
            '            <Slider v-model="formItem.slider" range></Slider>\n' +
            '        </form-item>\n' +
            '        <form-item label="Text">\n' +
            '            <i-input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <i-button type="primary">Submit</i-button>\n' +
            '            <i-button type="ghost" style="margin-left: 8px">Cancel</i-button>\n' +
            '        </form-item>\n' +
            '    </form>',
            code: '<template>\n' +
                    '    <Form :model="formItem" :label-width="80">\n' +
                    '        <FormItem label="Input">\n' +
                    '            <Input v-model="formItem.input" placeholder="Enter something..."></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Select">\n' +
                    '            <Select v-model="formItem.select">\n' +
                    '                <Option value="beijing">New York</Option>\n' +
                    '                <Option value="shanghai">London</Option>\n' +
                    '                <Option value="shenzhen">Sydney</Option>\n' +
                    '            </Select>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="DatePicker">\n' +
                    '            <Row>\n' +
                    '                <Col span="11">\n' +
                    '                    <DatePicker type="date" placeholder="Select date" v-model="formItem.date"></DatePicker>\n' +
                    '                </Col>\n' +
                    '                <Col span="2" style="text-align: center">-</Col>\n' +
                    '                <Col span="11">\n' +
                    '                    <TimePicker type="time" placeholder="Select time" v-model="formItem.time"></TimePicker>\n' +
                    '                </Col>\n' +
                    '            </Row>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Radio">\n' +
                    '            <RadioGroup v-model="formItem.radio">\n' +
                    '                <Radio label="male">Male</Radio>\n' +
                    '                <Radio label="female">Female</Radio>\n' +
                    '            </RadioGroup>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Checkbox">\n' +
                    '            <CheckboxGroup v-model="formItem.checkbox">\n' +
                    '                <Checkbox label="Eat"></Checkbox>\n' +
                    '                <Checkbox label="Sleep"></Checkbox>\n' +
                    '                <Checkbox label="Run"></Checkbox>\n' +
                    '                <Checkbox label="Movie"></Checkbox>\n' +
                    '            </CheckboxGroup>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Switch">\n' +
                    '            <i-switch v-model="formItem.switch" size="large">\n' +
                    '                <span slot="open">On</span>\n' +
                    '                <span slot="close">Off</span>\n' +
                    '            </i-switch>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Slider">\n' +
                    '            <Slider v-model="formItem.slider" range></Slider>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Text">\n' +
                    '            <Input v-model="formItem.textarea" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Button type="primary">Submit</Button>\n' +
                    '            <Button type="ghost" style="margin-left: 8px">Cancel</Button>\n' +
                    '        </FormItem>\n' +
                    '    </Form>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                formItem: {\n' +
                    '                    input: \'\',\n' +
                    '                    select: \'\',\n' +
                    '                    radio: \'male\',\n' +
                    '                    checkbox: [],\n' +
                    '                    switch: true,\n' +
                    '                    date: \'\',\n' +
                    '                    time: \'\',\n' +
                    '                    slider: [20, 50],\n' +
                    '                    textarea: \'\'\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '对齐方式',
            info: '设置属性 label-position，可以改变表单域标签的位置，left 为左对齐，right 为右对齐，top 会置于表单域顶部。',
            demo: ' <i-form :model="formLeft" label-position="left" :label-width="100">\n' +
                '        <form-item label="Title">\n' +
                '            <i-input v-model="formLeft.input1"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Title name">\n' +
                '            <i-input v-model="formLeft.input2"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Aligned title">\n' +
                '            <i-input v-model="formLeft.input3"></i-input>\n' +
                '        </form-item>\n' +
                '    </form>\n' +
                '    <i-form :model="formRight" label-position="right" :label-width="100">\n' +
                '        <form-item label="Title">\n' +
                '            <i-input v-model="formRight.input1"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Title name">\n' +
                '            <i-input v-model="formRight.input2"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Aligned title">\n' +
                '            <i-input v-model="formRight.input3"></i-input>\n' +
                '        </form-item>\n' +
                '    </form>\n' +
                '    <i-form :model="formTop" label-position="top">\n' +
                '        <form-item label="Title">\n' +
                '            <i-input v-model="formTop.input1"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Title name">\n' +
                '            <i-input v-model="formTop.input2"></i-input>\n' +
                '        </form-item>\n' +
                '        <form-item label="Aligned title">\n' +
                '            <i-input v-model="formTop.input3"></i-input>\n' +
                '        </form-item>\n' +
                '    </form>',
                code: '<template>\n' +
                        '    <Form :model="formLeft" label-position="left" :label-width="100">\n' +
                        '        <FormItem label="Title">\n' +
                        '            <Input v-model="formLeft.input1"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Title name">\n' +
                        '            <Input v-model="formLeft.input2"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Aligned title">\n' +
                        '            <Input v-model="formLeft.input3"></Input>\n' +
                        '        </FormItem>\n' +
                        '    </Form>\n' +
                        '    <Form :model="formRight" label-position="right" :label-width="100">\n' +
                        '        <FormItem label="Title">\n' +
                        '            <Input v-model="formRight.input1"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Title name">\n' +
                        '            <Input v-model="formRight.input2"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Aligned title">\n' +
                        '            <Input v-model="formRight.input3"></Input>\n' +
                        '        </FormItem>\n' +
                        '    </Form>\n' +
                        '    <Form :model="formTop" label-position="top">\n' +
                        '        <FormItem label="Title">\n' +
                        '            <Input v-model="formTop.input1"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Title name">\n' +
                        '            <Input v-model="formTop.input2"></Input>\n' +
                        '        </FormItem>\n' +
                        '        <FormItem label="Aligned title">\n' +
                        '            <Input v-model="formTop.input3"></Input>\n' +
                        '        </FormItem>\n' +
                        '    </Form>\n' +
                        '</template>\n' +
                        '<script>\n' +
                        '    export default {\n' +
                        '        data () {\n' +
                        '            return {\n' +
                        '                formLeft: {\n' +
                        '                    input1: \'\',\n' +
                        '                    input2: \'\',\n' +
                        '                    input3: \'\'\n' +
                        '                },\n' +
                        '                formRight: {\n' +
                        '                    input1: \'\',\n' +
                        '                    input2: \'\',\n' +
                        '                    input3: \'\'\n' +
                        '                },\n' +
                        '                formTop: {\n' +
                        '                    input1: \'\',\n' +
                        '                    input2: \'\',\n' +
                        '                    input3: \'\'\n' +
                        '                }\n' +
                        '            }\n' +
                        '        }\n' +
                        '    }\n' +
                        '</script>'
        },
        {
            title: '表单验证',
            info: 'Form 组件基于  async-validator 实现的数据验证，给 Form 设置属性 rules，同时给需要验证的 FormItem 设置属性 prop 指向对应字段即可。\n' +
            '\n' +
            '完整的验证规则请参照开源项目 async-validator。\n' +
            '\n' +
            '验证方法也支持 Promise。',
            demo: '<i-form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">\n' +
            '        <form-item label="Name" prop="name">\n' +
            '            <i-input v-model="formValidate.name" placeholder="Enter your name"></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item label="E-mail" prop="mail">\n' +
            '            <i-input v-model="formValidate.mail" placeholder="Enter your e-mail"></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item label="City" prop="city">\n' +
            '            <i-select v-model="formValidate.city" placeholder="Select your city">\n' +
            '                <i-option value="beijing">New York</i-option>\n' +
            '                <i-option value="shanghai">London</i-option>\n' +
            '                <i-option value="shenzhen">Sydney</i-option>\n' +
            '            </i-select>\n' +
            '        </form-item>\n' +
            '        <form-item label="Date">\n' +
            '            <Row>\n' +
            '                <i-col span="11">\n' +
            '                    <form-item prop="date">\n' +
            '                        <date-picker type="date" placeholder="Select date" v-model="formValidate.date"></date-picker>\n' +
            '                    </form-item>\n' +
            '                </i-col>\n' +
            '                <i-col span="2" style="text-align: center">-</i-col>\n' +
            '                <i-col span="11">\n' +
            '                    <form-item prop="time">\n' +
            '                        <time-picker type="time" placeholder="Select time" v-model="formValidate.time"></time-picker>\n' +
            '                    </form-item>\n' +
            '                </i-col>\n' +
            '            </Row>\n' +
            '        </form-item>\n' +
            '        <form-item label="Gender" prop="gender">\n' +
            '            <radio-group v-model="formValidate.gender">\n' +
            '                <Radio label="male">Male</Radio>\n' +
            '                <Radio label="female">Female</Radio>\n' +
            '            </radio-group>\n' +
            '        </form-item>\n' +
            '        <form-item label="Hobby" prop="interest">\n' +
            '            <checkbox-group v-model="formValidate.interest">\n' +
            '                <Checkbox label="Eat"></Checkbox>\n' +
            '                <Checkbox label="Sleep"></Checkbox>\n' +
            '                <Checkbox label="Run"></Checkbox>\n' +
            '                <Checkbox label="Movie"></Checkbox>\n' +
            '            </checkbox-group>\n' +
            '        </form-item>\n' +
            '        <form-item label="Desc" prop="desc">\n' +
            '            <i-input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <i-button type="primary" @click="handleSubmit(\'formValidate\')">Submit</i-button>\n' +
            '            <i-button type="ghost" @click="handleReset(\'formValidate\')" style="margin-left: 8px">Reset</i-button>\n' +
            '        </form-item>\n' +
            '    </form>',
            code: '<template>\n' +
                    '    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">\n' +
                    '        <FormItem label="Name" prop="name">\n' +
                    '            <Input v-model="formValidate.name" placeholder="Enter your name"></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="E-mail" prop="mail">\n' +
                    '            <Input v-model="formValidate.mail" placeholder="Enter your e-mail"></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="City" prop="city">\n' +
                    '            <Select v-model="formValidate.city" placeholder="Select your city">\n' +
                    '                <Option value="beijing">New York</Option>\n' +
                    '                <Option value="shanghai">London</Option>\n' +
                    '                <Option value="shenzhen">Sydney</Option>\n' +
                    '            </Select>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Date">\n' +
                    '            <Row>\n' +
                    '                <Col span="11">\n' +
                    '                    <FormItem prop="date">\n' +
                    '                        <DatePicker type="date" placeholder="Select date" v-model="formValidate.date"></DatePicker>\n' +
                    '                    </FormItem>\n' +
                    '                </Col>\n' +
                    '                <Col span="2" style="text-align: center">-</Col>\n' +
                    '                <Col span="11">\n' +
                    '                    <FormItem prop="time">\n' +
                    '                        <TimePicker type="time" placeholder="Select time" v-model="formValidate.time"></TimePicker>\n' +
                    '                    </FormItem>\n' +
                    '                </Col>\n' +
                    '            </Row>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Gender" prop="gender">\n' +
                    '            <RadioGroup v-model="formValidate.gender">\n' +
                    '                <Radio label="male">Male</Radio>\n' +
                    '                <Radio label="female">Female</Radio>\n' +
                    '            </RadioGroup>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Hobby" prop="interest">\n' +
                    '            <CheckboxGroup v-model="formValidate.interest">\n' +
                    '                <Checkbox label="Eat"></Checkbox>\n' +
                    '                <Checkbox label="Sleep"></Checkbox>\n' +
                    '                <Checkbox label="Run"></Checkbox>\n' +
                    '                <Checkbox label="Movie"></Checkbox>\n' +
                    '            </CheckboxGroup>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Desc" prop="desc">\n' +
                    '            <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..."></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Button type="primary" @click="handleSubmit(\'formValidate\')">Submit</Button>\n' +
                    '            <Button type="ghost" @click="handleReset(\'formValidate\')" style="margin-left: 8px">Reset</Button>\n' +
                    '        </FormItem>\n' +
                    '    </Form>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                formValidate: {\n' +
                    '                    name: \'\',\n' +
                    '                    mail: \'\',\n' +
                    '                    city: \'\',\n' +
                    '                    gender: \'\',\n' +
                    '                    interest: [],\n' +
                    '                    date: \'\',\n' +
                    '                    time: \'\',\n' +
                    '                    desc: \'\'\n' +
                    '                },\n' +
                    '                ruleValidate: {\n' +
                    '                    name: [\n' +
                    '                        { required: true, message: \'The name cannot be empty\', trigger: \'blur\' }\n' +
                    '                    ],\n' +
                    '                    mail: [\n' +
                    '                        { required: true, message: \'Mailbox cannot be empty\', trigger: \'blur\' },\n' +
                    '                        { type: \'email\', message: \'Incorrect email format\', trigger: \'blur\' }\n' +
                    '                    ],\n' +
                    '                    city: [\n' +
                    '                        { required: true, message: \'Please select the city\', trigger: \'change\' }\n' +
                    '                    ],\n' +
                    '                    gender: [\n' +
                    '                        { required: true, message: \'Please select gender\', trigger: \'change\' }\n' +
                    '                    ],\n' +
                    '                    interest: [\n' +
                    '                        { required: true, type: \'array\', min: 1, message: \'Choose at least one hobby\', trigger: \'change\' },\n' +
                    '                        { type: \'array\', max: 2, message: \'Choose two hobbies at best\', trigger: \'change\' }\n' +
                    '                    ],\n' +
                    '                    date: [\n' +
                    '                        { required: true, type: \'date\', message: \'Please select the date\', trigger: \'change\' }\n' +
                    '                    ],\n' +
                    '                    time: [\n' +
                    '                        { required: true, type: \'date\', message: \'Please select time\', trigger: \'change\' }\n' +
                    '                    ],\n' +
                    '                    desc: [\n' +
                    '                        { required: true, message: \'Please enter a personal introduction\', trigger: \'blur\' },\n' +
                    '                        { type: \'string\', min: 20, message: \'Introduce no less than 20 words\', trigger: \'blur\' }\n' +
                    '                    ]\n' +
                    '                }\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSubmit (name) {\n' +
                    '                this.$refs[name].validate((valid) => {\n' +
                    '                    if (valid) {\n' +
                    '                        this.$Message.success(\'Success!\');\n' +
                    '                    } else {\n' +
                    '                        this.$Message.error(\'Fail!\');\n' +
                    '                    }\n' +
                    '                })\n' +
                    '            },\n' +
                    '            handleReset (name) {\n' +
                    '                this.$refs[name].resetFields();\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义验证',
            info: '可以完全自定义验证规则来完成更复杂的验证，比如某些数据需要在服务端验证时。示例展示的是密码的二次确认及模拟的一个异步验证。',
            demo: '<i-form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">\n' +
            '        <form-item label="Password" prop="passwd">\n' +
            '            <i-input type="password" v-model="formCustom.passwd"></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item label="Confirm" prop="passwdCheck">\n' +
            '            <i-input type="password" v-model="formCustom.passwdCheck"></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item label="Age" prop="age">\n' +
            '            <i-input type="text" v-model="formCustom.age" number></i-input>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <i-button type="primary" @click="handleSubmit(\'formCustom\')">Submit</i-button>\n' +
            '            <i-button type="ghost" @click="handleReset(\'formCustom\')" style="margin-left: 8px">Reset</i-button>\n' +
            '        </form-item>\n' +
            '    </form>',
            code: '<template>\n' +
                    '    <Form ref="formCustom" :model="formCustom" :rules="ruleCustom" :label-width="80">\n' +
                    '        <FormItem label="Password" prop="passwd">\n' +
                    '            <Input type="password" v-model="formCustom.passwd"></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Confirm" prop="passwdCheck">\n' +
                    '            <Input type="password" v-model="formCustom.passwdCheck"></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem label="Age" prop="age">\n' +
                    '            <Input type="text" v-model="formCustom.age" number></Input>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Button type="primary" @click="handleSubmit(\'formCustom\')">Submit</Button>\n' +
                    '            <Button type="ghost" @click="handleReset(\'formCustom\')" style="margin-left: 8px">Reset</Button>\n' +
                    '        </FormItem>\n' +
                    '    </Form>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            const validatePass = (rule, value, callback) => {\n' +
                    '                if (value === \'\') {\n' +
                    '                    callback(new Error(\'Please enter your password\'));\n' +
                    '                } else {\n' +
                    '                    if (this.formCustom.passwdCheck !== \'\') {\n' +
                    '                        // 对第二个密码框单独验证\n' +
                    '                        this.$refs.formCustom.validateField(\'passwdCheck\');\n' +
                    '                    }\n' +
                    '                    callback();\n' +
                    '                }\n' +
                    '            };\n' +
                    '            const validatePassCheck = (rule, value, callback) => {\n' +
                    '                if (value === \'\') {\n' +
                    '                    callback(new Error(\'Please enter your password again\'));\n' +
                    '                } else if (value !== this.formCustom.passwd) {\n' +
                    '                    callback(new Error(\'The two input passwords do not match!\'));\n' +
                    '                } else {\n' +
                    '                    callback();\n' +
                    '                }\n' +
                    '            };\n' +
                    '            const validateAge = (rule, value, callback) => {\n' +
                    '                if (!value) {\n' +
                    '                    return callback(new Error(\'Age cannot be empty\'));\n' +
                    '                }\n' +
                    '                // 模拟异步验证效果\n' +
                    '                setTimeout(() => {\n' +
                    '                    if (!Number.isInteger(value)) {\n' +
                    '                        callback(new Error(\'Please enter a numeric value\'));\n' +
                    '                    } else {\n' +
                    '                        if (value < 18) {\n' +
                    '                            callback(new Error(\'Must be over 18 years of age\'));\n' +
                    '                        } else {\n' +
                    '                            callback();\n' +
                    '                        }\n' +
                    '                    }\n' +
                    '                }, 1000);\n' +
                    '            };\n' +
                    '            \n' +
                    '            return {\n' +
                    '                formCustom: {\n' +
                    '                    passwd: \'\',\n' +
                    '                    passwdCheck: \'\',\n' +
                    '                    age: \'\'\n' +
                    '                },\n' +
                    '                ruleCustom: {\n' +
                    '                    passwd: [\n' +
                    '                        { validator: validatePass, trigger: \'blur\' }\n' +
                    '                    ],\n' +
                    '                    passwdCheck: [\n' +
                    '                        { validator: validatePassCheck, trigger: \'blur\' }\n' +
                    '                    ],\n' +
                    '                    age: [\n' +
                    '                        { validator: validateAge, trigger: \'blur\' }\n' +
                    '                    ]\n' +
                    '                }\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSubmit (name) {\n' +
                    '                this.$refs[name].validate((valid) => {\n' +
                    '                    if (valid) {\n' +
                    '                        this.$Message.success(\'Success!\');\n' +
                    '                    } else {\n' +
                    '                        this.$Message.error(\'Fail!\');\n' +
                    '                    }\n' +
                    '                })\n' +
                    '            },\n' +
                    '            handleReset (name) {\n' +
                    '                this.$refs[name].resetFields();\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '动态增减表单项',
            info: '当需要动态维护 FormItem 时，也可以直接给 FormItem 设置属性 rules 来单独为该域做验证。\n' +
            '\n' +
            '动态设置 FormItem 的 prop 属性时，会依据上层的 Form 组件的 model 来获取，查看示例代码。\n' +
            '\n' +
            'FormItem 还可以独立设置 required、error 等属性，详见 API。',
            demo: '<i-form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">\n' +
            '        <form-item\n' +
            '                v-for="(item, index) in formDynamic.items"\n' +
            '                v-if="item.status"\n' +
            '                :key="index"\n' +
            '                :label="\'Item \' + item.index"\n' +
            '                :prop="\'items.\' + index + \'.value\'"\n' +
            '                :rules="{required: true, message: \'Item \' + item.index +\' can not be empty\', trigger: \'blur\'}">\n' +
            '            <Row>\n' +
            '                <i-col span="18">\n' +
            '                    <i-input type="text" v-model="item.value" placeholder="Enter something..."></i-input>\n' +
            '                </i-col>\n' +
            '                <i-col span="4" offset="1">\n' +
            '                    <i-button type="ghost" @click="handleRemove91(index)">Delete</i-button>\n' +
            '                </i-col>\n' +
            '            </Row>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <Row>\n' +
            '                <i-col span="12">\n' +
            '                    <i-button type="dashed" long @click="handleAdd" icon="plus-round">Add item</i-button>\n' +
            '                </i-col>\n' +
            '            </Row>\n' +
            '        </form-item>\n' +
            '        <form-item>\n' +
            '            <i-button type="primary" @click="handleSubmit(\'formDynamic\')">Submit</i-button>\n' +
            '            <i-button type="ghost" @click="handleReset(\'formDynamic\')" style="margin-left: 8px">Reset</i-button>\n' +
            '        </form-item>\n' +
            '    </form>',
            code: '<template>\n' +
                    '    <Form ref="formDynamic" :model="formDynamic" :label-width="80" style="width: 300px">\n' +
                    '        <FormItem\n' +
                    '                v-for="(item, index) in formDynamic.items"\n' +
                    '                v-if="item.status"\n' +
                    '                :key="index"\n' +
                    '                :label="\'Item \' + item.index"\n' +
                    '                :prop="\'items.\' + index + \'.value\'"\n' +
                    '                :rules="{required: true, message: \'Item \' + item.index +\' can not be empty\', trigger: \'blur\'}">\n' +
                    '            <Row>\n' +
                    '                <Col span="18">\n' +
                    '                    <Input type="text" v-model="item.value" placeholder="Enter something..."></Input>\n' +
                    '                </Col>\n' +
                    '                <Col span="4" offset="1">\n' +
                    '                    <Button type="ghost" @click="handleRemove(index)">Delete</Button>\n' +
                    '                </Col>\n' +
                    '            </Row>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Row>\n' +
                    '                <Col span="12">\n' +
                    '                    <Button type="dashed" long @click="handleAdd" icon="plus-round">Add item</Button>\n' +
                    '                </Col>\n' +
                    '            </Row>\n' +
                    '        </FormItem>\n' +
                    '        <FormItem>\n' +
                    '            <Button type="primary" @click="handleSubmit(\'formDynamic\')">Submit</Button>\n' +
                    '            <Button type="ghost" @click="handleReset(\'formDynamic\')" style="margin-left: 8px">Reset</Button>\n' +
                    '        </FormItem>\n' +
                    '    </Form>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                index: 1,\n' +
                    '                formDynamic: {\n' +
                    '                    items: [\n' +
                    '                        {\n' +
                    '                            value: \'\',\n' +
                    '                            index: 1,\n' +
                    '                            status: 1\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleSubmit (name) {\n' +
                    '                this.$refs[name].validate((valid) => {\n' +
                    '                    if (valid) {\n' +
                    '                        this.$Message.success(\'Success!\');\n' +
                    '                    } else {\n' +
                    '                        this.$Message.error(\'Fail!\');\n' +
                    '                    }\n' +
                    '                })\n' +
                    '            },\n' +
                    '            handleReset (name) {\n' +
                    '                this.$refs[name].resetFields();\n' +
                    '            },\n' +
                    '            handleAdd () {\n' +
                    '                this.index++;\n' +
                    '                this.formDynamic.items.push({\n' +
                    '                    value: \'\',\n' +
                    '                    index: this.index,\n' +
                    '                    status: 1\n' +
                    '                });\n' +
                    '            },\n' +
                    '            handleRemove (index) {\n' +
                    '                this.formDynamic.items[index].status = 0;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Form props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'model', explain:'表单数据对象\t', type:'Object', default:'-'},
                {attr: 'rules', explain:'表单验证规则，具体配置查看  <a href="https://github.com/yiminghe/async-validator" target="_blank">async-validator</a>\t', type:'Object', default:'-'},
                {attr: 'inline', explain:'是否开启行内表单模式\t', type:'Boolean', default:'false'},
                {attr: 'label-position\t', explain:'表单域标签的位置，可选值为 left、right、top\t', type:'String', default:'right'},
                {attr: 'label-width\t', explain:'表单域标签的宽度，所有的 FormItem 都会继承 Form 组件的 label-width 的值\t', type:'Number', default:'-'},
                {attr: 'show-message\t', explain:'是否显示校验错误信息\t', type:'Boolean', default:'true'},
                {attr: 'autocomplete', explain:'原生的 autocomplete 属性，可选值为 off 或 on\t', type:'String', default:'off'}
            ]
        },
        {
            name: 'Form methods ',
            list: [
                {attr: '方法名', explain:'说明', default:'参数'},
                {attr: 'validate', explain:'对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise\t', default:'callback'},
                {attr: 'validateField', explain:'对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息\t', default:'callback'},
                {attr: 'resetFields', explain:'对整个表单进行重置，将所有字段值重置为空并移除校验结果\t', default:'无'}
            ]
        },
        {
            name: 'Form methods ',
            list: [
                {attr: '方法名', explain:'说明', default:'参数'},
                {attr: 'validate', explain:'对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败，支持 Promise\t', default:'callback'},
                {attr: 'validateField', explain:'对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，返回错误信息\t', default:'callback'},
                {attr: 'resetFields', explain:'对整个表单进行重置，将所有字段值重置为空并移除校验结果\t', default:'无'}
            ]
        },
        {
            name: 'FormItem props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'prop', explain:'对应表单域 model 里的字段\t', type:'String', default:'-'},
                {attr: 'label', explain:'标签文本\t', type:'String', default:'-'},
                {attr: 'label-width\t', explain:'表单域标签的的宽度\t', type:'Number', default:'-'},
                {attr: 'label-for\t', explain:'指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。', type:'String', default:'-'},
                {attr: 'required', explain:'是否必填，如不设置，则会根据校验规则自动生成\t', type:'Boolean', default:'-'},
                {attr: 'rules', explain:'表单验证规则\t', type:'Object | Array', default:'-'},
                {attr: 'error', explain:'表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息\t', type:'String', default:'-'},
                {attr: 'error', explain:'是否显示校验错误信息\t', type:'Boolean', default:'true'},
            ]
        },
        {
            name: 'FormItem slot',
            list:[
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'内容'},
                {attr: 'label', explain:'label 内容\n'},
            ]
        }
    ]
}