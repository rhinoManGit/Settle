
const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const ColorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];


    function getMockData() {
        let mockData = [];
        for (let i = 1; i <= 20; i++) {
            mockData.push({
                key: i.toString(),
                label: 'Content ' + i,
                description: 'The desc of content  ' + i,
                disabled: Math.random() * 3 < 1
            });
        }
        return mockData;
    }

    function getTargetKeys () {
        return getMockData()
            .filter(() => Math.random() * 2 > 1)
            .map(item => item.key);
    }

    const validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password'));
        } else {
            if (this.formCustom.passwdCheck !== '') {
                // 对第二个密码框单独验证
                this.$refs.formCustom.validateField('passwdCheck');
            }
            callback();
        }
    };
    const validatePassCheck = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('Please enter your password again'));
        } else if (value !== this.formCustom.passwd) {
            callback(new Error('The two input passwords do not match!'));
        } else {
            callback();
        }
    };
    const validateAge = (rule, value, callback) => {
        if (!value) {
            return callback(new Error('Age cannot be empty'));
        }
        // 模拟异步验证效果
        setTimeout(() => {
            if (!Number.isInteger(value)) {
                callback(new Error('Please enter a numeric value'));
            } else {
                if (value < 18) {
                    callback(new Error('Must be over 18 years of age'));
                } else {
                    callback();
                }
            }
        }, 1000);
    };

    new Vue({
        el: '#app',
        data: {
            loading: false,
            loading2: false,
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
            value10: '',
            value11: '',
            value12: '',
            value13: '',
            select1: 'http',
            select2: 'com',
            select3: 'day',
            value14: 'Hello World',
            single: false,
            phone: 'apple',
            animal: '爪哇犀牛',
            vertical: 'apple',
            button1: '北京',
            button2: '北京',
            button3: '北京',
            button4: '北京',
            button5: '北京',
            button6: '北京',
            social: ['facebook', 'github'],
            fruit: ['苹果'],
            checked: true,
            disabled: false,
            disabledSingle: true,
            disabledGroup: ['苹果'],
            indeterminate: true,
            checkAll: false,
            checkAllGroup: ['香蕉', '西瓜'],
            switch1: false,
            cityList: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                },
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model1: '',
            model2: '',
            model3: '',
            model4: '',
            model5: '',
            model6: '',
            model8: '',
            cityList1: [
                {
                    value: 'New York',
                    label: 'New York'
                },
                {
                    value: 'London',
                    label: 'London'
                },
                {
                    value: 'Sydney',
                    label: 'Sydney'
                }
            ],
            cityList2: [
                {
                    value: 'Ottawa',
                    label: 'Ottawa'
                },
                {
                    value: 'Paris',
                    label: 'Paris'
                },
                {
                    value: 'Canberra',
                    label: 'Canberra'
                }
            ],
            model7: '',
            model9: '',
            model10: [],
            model11: '',
            model12: [],
            model13: '',
            loading1: false,
            options1: [],
            model14: [],
            options2: [],
            list: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New hampshire', 'New jersey', 'New mexico', 'New york', 'North carolina', 'North dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode island', 'South carolina', 'South dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West virginia', 'Wisconsin', 'Wyoming'],
            data1: [],
            data2: [],
            data3: ['Steve Jobs', 'Stephen Gary Wozniak', 'Jonathan Paul Ive'],
            data4: [
                {
                    title: '话题',
                    children: [
                        {
                            title: 'iView',
                            count: 10000,

                        },
                        {
                            title: 'iView UI',
                            count: 10600,

                        }
                    ]
                },
                {
                    title: '问题',
                    children: [
                        {
                            title: 'iView UI 有多好',
                            count: 60100,

                        },
                        {
                            title: 'iView 是啥',
                            count: 30010,

                        }
                    ]
                },
                {
                    title: '文章',
                    children: [
                        {
                            title: 'iView 是一个设计语言',
                            count: 100000,

                        }
                    ]
                }
            ],
            value111: 25,
            value22: [20, 50],
            value32: [20, 50],
            value44: 30,
            value55: [20, 50],
            value66: 30,
            value77: [20, 50],
            value88: 25,
            value99: 25,
            value1010: 25,
            options11: {
                shortcuts: [
                    {
                        text: 'Today',
                        value() {
                            return new Date();
                        },
                        onClick: (picker) => {
                            this.$Message.info('Click today');
                        }
                    },
                    {
                        text: 'Yesterday',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            return date;
                        },
                        onClick: (picker) => {
                            this.$Message.info('Click yesterday');
                        }
                    },
                    {
                        text: 'One week',
                        value() {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            return date;
                        },
                        onClick: (picker) => {
                            this.$Message.info('Click a week ago');
                        }
                    }
                ]
            },
            options22: {
                shortcuts: [
                    {
                        text: 'A week',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            return [start, end];
                        }
                    },
                    {
                        text: 'A month',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            return [start, end];
                        }
                    },
                    {
                        text: '3 month',
                        value() {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            return [start, end];
                        }
                    }
                ]
            },
            value21: '2016-01-01',
            value222: ['2016-01-01', '2016-02-15'],
            options23: {
                disabledDate(date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            options24: {
                disabledDate(date) {
                    const disabledDay = date.getDate();
                    return disabledDay === 15;
                }
            },
            value23: '',
            value31: '09:41:00',
            value332: ['09:41:00', '12:00:00'],
            open: false,
            value33: '',
            value61: [],
            data61: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            },
                {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }],
            value62: ['jiangsu', 'suzhou', 'zhuozhengyuan'],
            data62: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
            text: '未选择',
            data63: [{
                value: 'zhejiang',
                label: '浙江',
                children: [{
                    value: 'hangzhou',
                    label: '杭州',
                    children: [{
                        value: 'xihu',
                        label: '西湖',
                        code: 310000
                    }]
                }]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [{
                    value: 'nanjing',
                    label: '南京',
                    children: [{
                        value: 'zhonghuamen',
                        label: '中华门',
                        code: 210000
                    }]
                }]
            }],
            value63: [],
            data64: [{
                value: 'beijing',
                label: '北京',
                children: [
                    {
                        value: 'gugong',
                        label: '故宫'
                    },
                    {
                        value: 'tiantan',
                        label: '天坛'
                    },
                    {
                        value: 'wangfujing',
                        label: '王府井'
                    }
                ]
            }, {
                value: 'jiangsu',
                label: '江苏',
                children: [
                    {
                        value: 'nanjing',
                        label: '南京',
                        children: [
                            {
                                value: 'fuzimiao',
                                label: '夫子庙',
                            }
                        ]
                    },
                    {
                        value: 'suzhou',
                        label: '苏州',
                        children: [
                            {
                                value: 'zhuozhengyuan',
                                label: '拙政园',
                            },
                            {
                                value: 'shizilin',
                                label: '狮子林',
                            }
                        ]
                    }
                ],
            }],
            data71: this.getMockData(),
            targetKeys1: this.getTargetKeys(),
            data72: this.getMockData(),
            targetKeys2: this.getTargetKeys(),
            data73: this.getMockData(),
            targetKeys3: this.getTargetKeys(),
            listStyle: {
                width: '250px',
                height: '300px'
            },
            data74: this.getMockData(),
            targetKeys4: this.getTargetKeys(),
            value81: 1,
            value82: 1,
            value83: 2,
            value84: 2,
            value85: 2,
            value86: 1,
            value87: 1,
            value98: 1,
            value91: 1,
            valueHalf: 2.5,
            valueText: 3,
            valueCustomText: 3.8,
            valueDisabled: 2,
            file: null,
            loadingStatus: false,
            defaultList: [
                {
                    'name': 'a42bdcc1178e62b4694c830f028db5c0',
                    'url': 'https://o5wwk8baw.qnssl.com/a42bdcc1178e62b4694c830f028db5c0/avatar'
                },
                {
                    'name': 'bc7521e033abdd1e92222d733590f104',
                    'url': 'https://o5wwk8baw.qnssl.com/bc7521e033abdd1e92222d733590f104/avatar'
                }
            ],
            imgName: '',
            visible: false,
            uploadList: [],
            color1: '#19be6b',
            color2: '',
            color3: 'rgba(25, 190,107, .5)',
            color7: '#19be6b',
            color4: '#19be6b',
            color5: '#19be6b',
            colors: ['#311B92', '#512DA8', '#673AB7', '#9575CD', '#D1C4E9'],
            color6: '#19be6b',
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: [
                    { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                    { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                ]
            },
            formItem: {
                input: '',
                select: '',
                radio: 'male',
                checkbox: [],
                switch: true,
                date: '',
                time: '',
                slider: [20, 50],
                textarea: ''
            },
            formLeft: {
                input1: '',
                input2: '',
                input3: ''
            },
            formRight: {
                input1: '',
                input2: '',
                input3: ''
            },
            formTop: {
                input1: '',
                input2: '',
                input3: ''
            },
            formValidate: {
                name: '',
                mail: '',
                city: '',
                gender: '',
                interest: [],
                date: '',
                time: '',
                desc: ''
            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                city: [
                    { required: true, message: 'Please select the city', trigger: 'change' }
                ],
                gender: [
                    { required: true, message: 'Please select gender', trigger: 'change' }
                ],
                interest: [
                    { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                    { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                ],
                date: [
                    { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                ],
                time: [
                    { required: true, type: 'date', message: 'Please select time', trigger: 'change' }
                ],
                desc: [
                    { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                    { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                ]
            },
            formCustom: {
                passwd: '',
                passwdCheck: '',
                age: ''
            },
            ruleCustom: {
                passwd: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                passwdCheck: [
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                age: [
                    { validator: validateAge, trigger: 'blur' }
                ]
            },
            index: 1,
            formDynamic: {
                items: [
                    {
                        value: '',
                        index: 1,
                        status: 1
                    }
                ]
            },
            movieList: [
                {
                    name: 'The Shawshank Redemption',
                    url: 'https://movie.douban.com/subject/1292052/',
                    rate: 9.6
                },
                {
                    name: 'Leon:The Professional',
                    url: 'https://movie.douban.com/subject/1295644/',
                    rate: 9.4
                },
                {
                    name: 'Farewell to My Concubine',
                    url: 'https://movie.douban.com/subject/1291546/',
                    rate: 9.5
                },
                {
                    name: 'Forrest Gump',
                    url: 'https://movie.douban.com/subject/1292720/',
                    rate: 9.4
                },
                {
                    name: 'Life Is Beautiful',
                    url: 'https://movie.douban.com/subject/1292063/',
                    rate: 9.5
                },
                {
                    name: 'Spirited Away',
                    url: 'https://movie.douban.com/subject/1291561/',
                    rate: 9.2
                },
                {
                    name: 'Schindler',
                url: 'https://movie.douban.com/subject/1295124/',
                    rate: 9.4
                },
                {
                    name: 'The Legend of 1900',
                        url: 'https://movie.douban.com/subject/1292001/',
                    rate: 9.2
                },
                {
                    name: 'WALL·E',
                        url: 'https://movie.douban.com/subject/2131459/',
                    rate: 9.3
                },
                {
                    name: 'Inception',
                        url: 'https://movie.douban.com/subject/3541415/',
                    rate: 9.2
                }
                ],
                randomMovieList: [],
                modal1: false,
                modal2: false,
                modal_loading: false,
                modal3: false,
                modal4: false,
                modal5: false,
                modal6: false,
                loading111: true,
                modal7: false,
                modal8: false,
                modal9: false,
                modal10: false,
                value111:'',
                percent: 0,
                user: UserList[0],
                color: ColorList[0],
                value221: '1',
                value222: '1',
                value223: '1',
                value224: '1-1',
                count33: [0, 1, 2],
                show33: true

        },
        mounted :function() {
            // for upload file
            //this.uploadList = this.$refs.upload.fileList;
            this.changeLimit();
        },
        methods: {
            handleClose33 () {
                this.show33 = false;
            },
            handleAdd33 () {
                if (this.count33.length) {
                    this.count33.push(this.count33[this.count33.length - 1] + 1);
                } else {
                    this.count33.push(0);
                }
            },
            handleClose332 (event, name) {
                const index = this.count33.indexOf(name);
                this.count33.splice(index, 1);
            },
            handleChange123 () {
                const index = UserList.indexOf(this.user);
                this.user = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
                this.color = index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0];
            },
            add () {
                if (this.percent >= 100) {
                    return false;
                }
                this.percent += 10;
            },
            minus () {
                if (this.percent <= 0) {
                    return false;
                }
                this.percent -= 10;
            },
            handleRender () {
                this.$Modal.confirm({
                    render: (h) => {
                        return h('Input', {
                            props: {
                                value: this.value111,
                                autofocus: true,
                                placeholder: 'Please enter your name...'
                            },
                            on: {
                                input: (val) => {
                                    this.value111 = val;
                                }
                            }
                        })
                    }
                })
            },
            instance (type) {
                const title = 'Title';
                const content = '<p>Content of dialog</p><p>Content of dialog</p>';
                switch (type) {
                    case 'info':
                        this.$Modal.info({
                            title: title,
                            content: content
                        });
                        break;
                    case 'success':
                        this.$Modal.success({
                            title: title,
                            content: content
                        });
                        break;
                    case 'warning':
                        this.$Modal.warning({
                            title: title,
                            content: content
                        });
                        break;
                    case 'error':
                        this.$Modal.error({
                            title: title,
                            content: content
                        });
                        break;
                }
            },
            confirm11 () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    onOk: () => {
                        this.$Message.info('Clicked ok');
                    },
                    onCancel: () => {
                        this.$Message.info('Clicked cancel');
                    }
                });
            },
            custom () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>Content of dialog</p><p>Content of dialog</p>',
                    okText: 'OK',
                    cancelText: 'Cancel'
                });
            },
            async () {
                this.$Modal.confirm({
                    title: 'Title',
                    content: '<p>The dialog box will be closed after 2 seconds</p>',
                    loading: true,
                    onOk: () => {
                        setTimeout(() => {
                            this.$Modal.remove();
                            this.$Message.info('Asynchronously close the dialog box');
                        }, 2000);
                    }
                });
            },
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            },
            del () {
                this.modal_loading = true;
                setTimeout(() => {
                    this.modal_loading = false;
                    this.modal2 = false;
                    this.$Message.success('Successfully delete');
                }, 2000);
            },
            ok11 () {
                this.$Message.info('Clicked ok');
            },
            cancel11 () {
                this.$Message.info('Clicked cancel');
            },
            open1 (nodesc) {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            info1 (nodesc) {
                this.$Notice.info({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            success1 (nodesc) {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            warning1 (nodesc) {
                this.$Notice.warning({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            error1 (nodesc) {
                this.$Notice.error({
                    title: 'Notification title',
                    desc: nodesc ? '' : 'Here is the notification description. Here is the notification description. '
                });
            },
            time1 () {
                this.$Notice.open({
                    title: 'Notification title',
                    desc: 'This notification does not automatically close, and you need to click the close button to close.',
                    duration: 0
                });
            },
            renderFunc1 () {
                this.$Notice.success({
                    title: 'Notification title',
                    desc: 'The desc will hide when you set render.',
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            },
            renderFunc () {
                this.$Message.info({
                    render: h => {
                        return h('span', [
                            'This is created by ',
                            h('a', 'render'),
                            ' function'
                        ])
                    }
                });
            },
            closable () {
                this.$Message.info({
                    content: 'Tips for manual closing',
                    duration: 10,
                    closable: true
                });
            },
            success () {
                this.$Message.success('This is a success tip');
            },
            warning () {
                this.$Message.warning('This is a warning tip');
            },
            error () {
                this.$Message.error('This is an error tip');
            },
            info () {
                this.$Message.info('This is a info tip');
            },
            time12 () {
                this.$Message.info({
                    content: 'I ll be gone in 10 seconds',
                    duration: 10});
            },
            loading12 () {
                const msg = this.$Message.loading({
                    content: 'Loading...',
                    duration: 0
                });
                setTimeout(msg, 3000);
            },
            changeLimit () {
                function getArrayItems(arr, num) {
                    const temp_array = [];
                    for (let index in arr) {
                        temp_array.push(arr[index]);
                    }
                    const return_array = [];
                    for (let i = 0; i<num; i++) {
                        if (temp_array.length>0) {
                            const arrIndex = Math.floor(Math.random()*temp_array.length);
                            return_array[i] = temp_array[arrIndex];
                            temp_array.splice(arrIndex, 1);
                        } else {
                            break;
                        }
                    }
                    return return_array;
                }
                this.randomMovieList = getArrayItems(this.movieList, 5);
            },

            handleAdd :function() {
                this.index++;
                this.formDynamic.items.push({
                    value: '',
                    index: this.index,
                    status: 1
                });
            },
            handleRemove91 :function(index) {
                this.formDynamic.items[index].status = 0;
            },
            handleReset:function(name) {
                this.$refs[name].resetFields();
            },

            handleSubmit:function(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleView:function (name) {
                this.imgName = name;
                this.visible = true;
            },
            handleRemove :function(file) {
                const fileList = this.$refs.upload.fileList;
                this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
            },
            handleSuccess :function(res, file) {
                file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
                file.name = '7eb99afb9d5f317c912f08b5212fd69a';
            },
            handleFormatError:function (file) {
                this.$Notice.warning({
                    title: 'The file format is incorrect',
                    desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
                });
            },
            handleMaxSize :function(file) {
                this.$Notice.warning({
                    title: 'Exceeding file size limit',
                    desc: 'File  ' + file.name + ' is too large, no more than 2M.'
                });
            },
            handleBeforeUpload:function () {
                const check = this.uploadList.length < 5;
                if (!check) {
                    this.$Notice.warning({
                        title: 'Up to five pictures can be uploaded.'
                    });
                }
                return check;
            },
            handleUpload :function(file) {
                this.file = file;
                return false;
            },
            upload :function() {
                this.loadingStatus = true;
                setTimeout(() => {
                    this.file = null;
                    this.loadingStatus = false;
                    this.$Message.success('Success')
                }, 1500);
            },
            filterMethod71:function (data, query) {
                return data.label.indexOf(query) > -1;
            },
            getMockData :function() {
                let mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        label: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            reloadMockData:function () {
                this.data3 = this.getMockData();
                this.targetKeys3 = this.getTargetKeys();
            },
            handleChange4 :function (newTargetKeys) {
                this.targetKeys4 = newTargetKeys;
            },
            render4  :function(item) {
                return item.label + ' - ' + item.description;
            },
            handleChange3  :function(newTargetKeys) {
                this.targetKeys3 = newTargetKeys;
            },
            render3  :function(item) {
                return item.label + ' - ' + item.description;
            },
            handleChange2 :function (newTargetKeys) {
                this.targetKeys2 = newTargetKeys;
            },
            getTargetKeys  :function() {
                return this.getMockData()
                    .filter(() => Math.random() * 2 > 1)
                    .map(item => item.key);
            },
            render1  :function(item) {
                return item.label;
            },
            handleChange1 :function (newTargetKeys, direction, moveKeys) {
                console.log(newTargetKeys);
                console.log(direction);
                console.log(moveKeys);
                this.targetKeys1 = newTargetKeys;
            },
            troggleCode: function (event) {
                this.visible = true;

                var $this = $(event.target),
                    $el = $this.parent('p').prev('.J-code')

                $el.fadeToggle(500,function () {

                    if($el.is(':visible'))
                        $this.css('color', '#3D88EA').text('隐藏代码')
                    else
                        $this.css('color', '##D3DCE6').text('显示代码')
                });
            },
            toLoading () {
                this.loading = true;
            },
            toLoading2 () {
                this.loading2 = true;
            },
            handleCheckAll () {
                if (this.indeterminate) {
                    this.checkAll = false;
                } else {
                    this.checkAll = !this.checkAll;
                }
                this.indeterminate = false;

                if (this.checkAll) {
                    this.checkAllGroup = ['香蕉', '苹果', '西瓜'];
                } else {
                    this.checkAllGroup = [];
                }
            },
            checkAllGroupChange (data) {
                if (data.length === 3) {
                    this.indeterminate = false;
                    this.checkAll = true;
                } else if (data.length > 0) {
                    this.indeterminate = true;
                    this.checkAll = false;
                } else {
                    this.indeterminate = false;
                    this.checkAll = false;
                }
            },
            change (status) {
                this.$Message.info('开关状态：' + status);
            },
            remoteMethod1 (query) {
                if (query !== '') {
                    this.loading1 = true;
                    setTimeout(() => {
                        this.loading1 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options1 = [];
                }
            },
            remoteMethod2 (query) {
                if (query !== '') {
                    this.loading2 = true;
                    setTimeout(() => {
                        this.loading2 = false;
                        const list = this.list.map(item => {
                            return {
                                value: item,
                                label: item
                            };
                        });
                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
                    }, 200);
                } else {
                    this.options2 = [];
                }
            },
            handleSearch1 (value) {
                this.data1 = !value ? [] : [
                    value,
                    value + value,
                    value + value + value
                ];
            },
            handleSearch2 (value) {
                this.data2 = !value || value.indexOf('@') >= 0 ? [] : [
                    value + '@qq.com',
                    value + '@sina.com',
                    value + '@163.com'
                ];
            },
            filterMethod (value, option) {
                return option.toUpperCase().indexOf(value.toUpperCase()) !== -1;
            },
            formatSlider (val) {
                return 'Progress: ' + val + '%';
            },
            hideFormat () {
                return null;
            },
            handleClick () {
                this.open = !this.open;
            },
            handleChange (date) {
                this.value3 = date;
            },
            handleClear () {
                this.open = false;
            },
            handleOk () {
                this.open = false;
            },
            format (labels, selectedData) {
                const index = labels.length - 1;
                const data = selectedData[index] || false;
                if (data && data.code) {
                    return labels[index] + ' - ' + data.code;
                }
                return labels[index];
            },
            handleChange (value, selectedData) {
                this.text = selectedData.map(o => o.label).join(', ');
            }
        }
    })

