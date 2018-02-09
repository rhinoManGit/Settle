/*
*
* */
module.exports={
    name: 'Select 选择器',
    class: 'select',
    outline: '使用模拟的增强下拉选择器来代替浏览器原生的选择器。\n' +
    '\n' +
    '选择器支持单选、多选、搜索，以及键盘快捷操作。',
    tips:'注意：非 template/render 模式下，需使用 i-select、i-option、Col用i-col、' +
    'OptionGroup用option-group。',
    list:[
        {
            title: '基础用法',
            info: '基本用法。可以使用 v-model 双向绑定数据。\n' +
            '\n' +
            '单选时，value 只接受字符串和数字类型，多选时，只接受数组类型，组件会自动根据Option的value来返回选中的数据。\n' +
            '\n' +
            '可以给Select添加 style 样式，比如宽度。\n' +
            '\n' +
            '在展开选择器后，可以使用键盘的up和down快速上下选择，按下Enter选择，按下Esc收起选择器。',
            demo: '<i-select v-model="model1" style="width:200px">\n' +
            '                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">\n' +
            '                        {{ item.label }}</i-option>\n' +
            '                </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model1" style="width:200px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                     '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model1: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
            title: '尺寸',
            info: '通过设置size属性为large和small将输入框设置为大和小尺寸，不设置为默认（中）尺寸。',
            demo: '<i-select v-model="model2" size="small" style="width:100px">\n' +
            '                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">\n' +
            '                        {{ item.label }}</i-option>\n' +
            '                </i-select>\n' +
            '                <i-select v-model="model3" style="width:100px">\n' +
            '                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">\n' +
            '                        {{ item.label }}</i-option>\n' +
            '                </i-select>\n' +
            '                <i-select v-model="model4" size="large" style="width:100px">\n' +
            '                    <i-option v-for="item in cityList" :value="item.value" :key="item.value">\n' +
            '                        {{ item.label }}</i-option>\n' +
            '                </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model2" size="small" style="width:100px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '    <Select v-model="model3" style="width:100px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '    <Select v-model="model4" size="large" style="width:100px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model2: \'\',\n' +
                    '                model3: \'\',\n' +
                    '                model4: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '禁用',
            info: '通过给Select设置属性disabled禁用整个选择器。\n' +
            '\n' +
            '通过给Option设置属性disabled可以禁用当前项。',
            demo: '<i-select v-model="model5" disabled style="width:200px">\n' +
            '        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '    </i-select>\n' +
            '    <i-select v-model="model6" style="width:200px">\n' +
            '        <i-option value="beijing">New York</i-option>\n' +
            '        <i-option value="shanghai" disabled>London</i-option>\n' +
            '        <i-option value="shenzhen">Sydney</i-option>\n' +
            '    </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model5" disabled style="width:200px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '    <Select v-model="model6" style="width:200px">\n' +
                    '        <Option value="beijing">New York</Option>\n' +
                    '        <Option value="shanghai" disabled>London</Option>\n' +
                    '        <Option value="shenzhen">Sydney</Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model5: \'\',\n' +
                    '                model6: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '可清空',
            info: '通过设置属性clearable可以清空已选项，仅适用于单选模式。',
            demo: '<i-select v-model="model8" clearable style="width:200px">\n' +
            '        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '    </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model8" clearable style="width:200px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model8: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '分组',
            info: '使用OptionGroup可将选项进行分组。',
            demo: ' <i-select v-model="model7" style="width:200px">\n' +
            '        <option-group label="Hot Cities">\n' +
            '            <i-option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '        </option-group>\n' +
            '        <option-group label="Other Cities">\n' +
            '            <i-option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '        </option-group>\n' +
            '    </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model7" style="width:200px">\n' +
                    '        <OptionGroup label="Hot Cities">\n' +
                    '            <Option v-for="item in cityList1" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '        </OptionGroup>\n' +
                    '        <OptionGroup label="Other Cities">\n' +
                    '            <Option v-for="item in cityList2" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '        </OptionGroup>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                cityList1: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                cityList2: [\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model7: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '自定义模板',
            info: '对选项内容可以进行自定义。注意在Option中使用label属性，可以让选择器优先读取该属性的值以显示，否则选中时显示的内容会和自定义的一样，这往往不是我们想要的。\n' +
            '\n' +
            '对于选项显示内容的逻辑：优先显示 slot 内容，如果没有定义 slot，则显示label的值，如果没有设置 label，则显示value的值。',
            demo: '<i-select v-model="model9" style="width:200px">\n' +
            '        <i-option value="New York" label="New York">\n' +
            '            <span>New York</span>\n' +
            '            <span style="float:right;color:#ccc">America</span>\n' +
            '        </i-option>\n' +
            '        <i-option value="London" label="London">\n' +
            '            <span>London</span>\n' +
            '            <span style="float:right;color:#ccc">U.K.</span>\n' +
            '        </i-option>\n' +
            '        <i-option value="Sydney" label="Sydney">\n' +
            '            <span>Sydney</span>\n' +
            '            <span style="float:right;color:#ccc">Australian</span>\n' +
            '        </i-option>\n' +
            '    </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model9" style="width:200px">\n' +
                    '        <Option value="New York" label="New York">\n' +
                    '            <span>New York</span>\n' +
                    '            <span style="float:right;color:#ccc">America</span>\n' +
                    '        </Option>\n' +
                    '        <Option value="London" label="London">\n' +
                    '            <span>London</span>\n' +
                    '            <span style="float:right;color:#ccc">U.K.</span>\n' +
                    '        </Option>\n' +
                    '        <Option value="Sydney" label="Sydney">\n' +
                    '            <span>Sydney</span>\n' +
                    '            <span style="float:right;color:#ccc">Australian</span>\n' +
                    '        </Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                model9: \'\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '多选',
            info: '通过设置属性multiple可以开启多选模式。多选模式下，model 接受数组类型的数据，所返回的也是数组。',
            demo: ' <i-select v-model="model10" multiple style="width:260px">\n' +
            '        <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '    </i-select>',
            code: '<template>\n' +
                    '    <Select v-model="model10" multiple style="width:260px">\n' +
                    '        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '    </Select>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model10: []\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '可搜索',
            info: '通过设置属性filterable可以开启搜索模式。单选和多选都支持搜索模式。多选搜索时，可以使用键盘Delete快捷删除最后一个已选项。',
            demo: '<Row>\n' +
            '        <i-col span="12" style="padding-right:10px">\n' +
            '            <i-select v-model="model11" filterable>\n' +
            '                <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '            </i-select>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <i-select v-model="model12" filterable multiple>\n' +
            '                <i-option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</i-option>\n' +
            '            </i-select>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12" style="padding-right:10px">\n' +
                    '            <Select v-model="model11" filterable>\n' +
                    '                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '            </Select>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <Select v-model="model12" filterable multiple>\n' +
                    '                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>\n' +
                    '            </Select>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                cityList: [\n' +
                    '                    {\n' +
                    '                        value: \'New York\',\n' +
                    '                        label: \'New York\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'London\',\n' +
                    '                        label: \'London\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Sydney\',\n' +
                    '                        label: \'Sydney\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Ottawa\',\n' +
                    '                        label: \'Ottawa\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Paris\',\n' +
                    '                        label: \'Paris\'\n' +
                    '                    },\n' +
                    '                    {\n' +
                    '                        value: \'Canberra\',\n' +
                    '                        label: \'Canberra\'\n' +
                    '                    }\n' +
                    '                ],\n' +
                    '                model11: \'\',\n' +
                    '                model12: []\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '远程搜索',
            info: '远程搜索需同时设置 filterable、remote、remote-method、loading 四个 props，其中 loading 用于控制是否正在搜索中，remote-method 是远程搜索的方法。\n' +
            '\n' +
            '注意：需要给 Option 设置 key。\n' +
            '\n' +
            '设置初始显示值，需设置 label 属性。\n' +
            '\n' +
            '本例为美国州名，尝试输入一些字母。',
            demo: ' <Row>\n' +
            '        <i-col span="12" style="padding-right:10px">\n' +
            '            <i-select\n' +
            '                v-model="model13"\n' +
            '                filterable\n' +
            '                remote\n' +
            '                :remote-method="remoteMethod1"\n' +
            '                :loading="loading1">\n' +
            '                <i-option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</i-option>\n' +
            '            </i-select>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '        <i-select\n' +
            '            v-model="model14"\n' +
            '            multiple\n' +
            '            filterable\n' +
            '            remote\n' +
            '            :remote-method="remoteMethod2"\n' +
            '            :loading="loading2">\n' +
            '            <i-option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</i-option>\n' +
            '        </i-select>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12" style="padding-right:10px">\n' +
                    '            <Select\n' +
                    '                v-model="model13"\n' +
                    '                filterable\n' +
                    '                remote\n' +
                    '                :remote-method="remoteMethod1"\n' +
                    '                :loading="loading1">\n' +
                    '                <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>\n' +
                    '            </Select>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '        <Select\n' +
                    '            v-model="model14"\n' +
                    '            multiple\n' +
                    '            filterable\n' +
                    '            remote\n' +
                    '            :remote-method="remoteMethod2"\n' +
                    '            :loading="loading2">\n' +
                    '            <Option v-for="(option, index) in options2" :value="option.value" :key="index">{{option.label}}</Option>\n' +
                    '        </Select>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                model13: \'\',\n' +
                    '                loading1: false,\n' +
                    '                options1: [],\n' +
                    '                model14: [],\n' +
                    '                loading2: false,\n' +
                    '                options2: [],\n' +
                    '                list: [\'Alabama\', \'Alaska\', \'Arizona\', \'Arkansas\', \'California\', \'Colorado\', \'Connecticut\', \'Delaware\', \'Florida\', \'Georgia\', \'Hawaii\', \'Idaho\', \'Illinois\', \'Indiana\', \'Iowa\', \'Kansas\', \'Kentucky\', \'Louisiana\', \'Maine\', \'Maryland\', \'Massachusetts\', \'Michigan\', \'Minnesota\', \'Mississippi\', \'Missouri\', \'Montana\', \'Nebraska\', \'Nevada\', \'New hampshire\', \'New jersey\', \'New mexico\', \'New york\', \'North carolina\', \'North dakota\', \'Ohio\', \'Oklahoma\', \'Oregon\', \'Pennsylvania\', \'Rhode island\', \'South carolina\', \'South dakota\', \'Tennessee\', \'Texas\', \'Utah\', \'Vermont\', \'Virginia\', \'Washington\', \'West virginia\', \'Wisconsin\', \'Wyoming\']\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            remoteMethod1 (query) {\n' +
                    '                if (query !== \'\') {\n' +
                    '                    this.loading1 = true;\n' +
                    '                    setTimeout(() => {\n' +
                    '                        this.loading1 = false;\n' +
                    '                        const list = this.list.map(item => {\n' +
                    '                            return {\n' +
                    '                                value: item,\n' +
                    '                                label: item\n' +
                    '                            };\n' +
                    '                        });\n' +
                    '                        this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);\n' +
                    '                    }, 200);\n' +
                    '                } else {\n' +
                    '                    this.options1 = [];\n' +
                    '                }\n' +
                    '            },\n' +
                    '            remoteMethod2 (query) {\n' +
                    '                if (query !== \'\') {\n' +
                    '                    this.loading2 = true;\n' +
                    '                    setTimeout(() => {\n' +
                    '                        this.loading2 = false;\n' +
                    '                        const list = this.list.map(item => {\n' +
                    '                            return {\n' +
                    '                                value: item,\n' +
                    '                                label: item\n' +
                    '                            };\n' +
                    '                        });\n' +
                    '                        this.options2 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);\n' +
                    '                    }, 200);\n' +
                    '                } else {\n' +
                    '                    this.options2 = [];\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Select props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'指定选中项目的 value 值，可以使用 v-model 双向绑定数据。单选时只接受 String 或 Number，多选时只接受 Array', type:'String | Number | Array', default:'空'},
                {attr: 'multiple', explain:'是否支持多选\t', type:'Boolean', default:'false'},
                {attr: 'disabled', explain:'是否禁用\t', type:'Boolean', default:'false'},
                {attr: 'clearable', explain:'是否可以清空选项，只在单选时有效', type:'Boolean', default:'false'},
                {attr: 'filterable', explain:'是否支持搜索', type:'Boolean', default:'false'},
                {attr: 'remote', explain:'是否使用远程搜索\t', type:'Boolean', default:'false'},
                {attr: 'remote-method', explain:'远程搜索的方法\t', type:'Function', default:'-'},
                {attr: 'loading', explain:'当前是否正在远程搜索', type:'Boolean', default:'false'},
                {attr: 'loading-text', explain:'远程搜索中的文字提示', type:'String', default:'加载中'},
                {attr: 'label', explain:'仅在 remote 模式下，初始化时使用。因为仅通过 value 无法得知选项的 label，需手动设置。', type:'String | Number | Array', default:'空'},
                {attr: 'size', explain:'选择框大小，可选值为large、small、default或者不填', type:'String', default:'-'},
                {attr: 'placeholder', explain:'选择框默认文字', type:'String', default:'请选择'},
                {attr: 'not-found-text', explain:'当下拉列表为空时显示的内容', type:'String', default:'无匹配数据'},
                {attr: 'label-in-value', explain:'返回选项时，是否将 label 和 value 一并返回，默认只返回 value', type:'Boolean', default:'false'},
                {attr: 'placement', explain:'弹窗的展开方向，可选值为 bottom 和 top', type:'String', default:'bottom'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type:'Boolean', default:'false'},
                {attr: 'element-id', explain:'给表单元素设置 id，详见 Form 用法。', type:'String', default:'-'}
            ]
        },
        {
            name: 'Select events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change', explain:'选中的Option变化时触发，默认返回 value，如需返回 label，详见 label-in-value 属性', default:'当前选中项'},
                {attr: 'on-query-change', explain:'搜索词改变时触发', default:'query'}
            ]
        },
        {
            name: 'Select methods ',
            list: [
                {attr: '方法名', explain:'说明', query: '参数'},
                {attr: 'setQuery', explain:'设置搜索词，为空时清空，仅在 filterable="true" 时有效', query: 'query'},
                {attr: 'clearSingleSelect', explain:'清空单选项，仅在 clearable="true" 时有效', query: '无'}
            ]
        },
         {
             name: 'Option props',
                 list: [
             {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
             {attr: 'value', explain:'说明', type:'String | Number', default:'无'},
             {attr: 'label', explain:'说明', type:'String', default:'-'},
             {attr: 'disabled', explain:'说明', type:'Boolean', default:'false'},
            ]
         },
        {
             name: 'OptionGroup props',
             list: [
             {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
             {attr: 'label', explain:'分组的组名', type:'String', default:''}
            ]
         }
    ]
}