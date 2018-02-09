/*
*
* */
module.exports={
    name: 'DatePicker 日期选择器',
    class: 'datepicker',
    outline: '选择或输入日期，支持年、月、日期等类型，支持选择范围。',
    tips:'注意：非 template/render 模式下，需使用 date-picker。',
    list:[
        {
            title: '基础用法',
            info: '设置属性 type 为 date 或 daterange 分别显示选择单日和选择范围类型。\n' +
            '\n' +
            '设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="date" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
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
            title: '快捷方式',
            info: '设置属性 options 对象中的 shortcuts 可以设置快捷选项，详见示例代码。\n' +
            '\n' +
            '其中 value 为函数，必须返回一个日期，如果是 daterange 类型，需要返回一个数组。\n' +
            '\n' +
            'value 接收任何正确的日期格式，比如 2016-12-24 或 12/24/16 都是正确的。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="date" :options="options11" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="daterange" :options="options22" placement="bottom-end" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="date" :options="options1" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="daterange" :options="options2" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                options1: {\n' +
                    '                    shortcuts: [\n' +
                    '                        {\n' +
                    '                            text: \'Today\',\n' +
                    '                            value () {\n' +
                    '                                return new Date();\n' +
                    '                            },\n' +
                    '                            onClick: (picker) => {\n' +
                    '                                this.$Message.info(\'Click today\');\n' +
                    '                            }\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            text: \'Yesterday\',\n' +
                    '                            value () {\n' +
                    '                                const date = new Date();\n' +
                    '                                date.setTime(date.getTime() - 3600 * 1000 * 24);\n' +
                    '                                return date;\n' +
                    '                            },\n' +
                    '                            onClick: (picker) => {\n' +
                    '                                this.$Message.info(\'Click yesterday\');\n' +
                    '                            }\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            text: \'One week\',\n' +
                    '                            value () {\n' +
                    '                                const date = new Date();\n' +
                    '                                date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);\n' +
                    '                                return date;\n' +
                    '                            },\n' +
                    '                            onClick: (picker) => {\n' +
                    '                                this.$Message.info(\'Click a week ago\');\n' +
                    '                            }\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                },\n' +
                    '                options2: {\n' +
                    '                    shortcuts: [\n' +
                    '                        {\n' +
                    '                            text: \'A week\',\n' +
                    '                            value () {\n' +
                    '                                const end = new Date();\n' +
                    '                                const start = new Date();\n' +
                    '                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);\n' +
                    '                                return [start, end];\n' +
                    '                            }\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            text: \'A month\',\n' +
                    '                            value () {\n' +
                    '                                const end = new Date();\n' +
                    '                                const start = new Date();\n' +
                    '                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);\n' +
                    '                                return [start, end];\n' +
                    '                            }\n' +
                    '                        },\n' +
                    '                        {\n' +
                    '                            text: \'3 month\',\n' +
                    '                            value () {\n' +
                    '                                const end = new Date();\n' +
                    '                                const start = new Date();\n' +
                    '                                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);\n' +
                    '                                return [start, end];\n' +
                    '                            }\n' +
                    '                        }\n' +
                    '                    ]\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '日期格式',
            info: '设置属性 format 可以改变日期的显示格式，详见  Date。\n' +
            '\n' +
            '注意，format 只是改变显示的格式，并非改变 value 值。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker :value="value21" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker :value="value222" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: \'2016-01-01\',\n' +
                    '                value2: [\'2016-01-01\', \'2016-02-15\']\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '日期时间选择',
            info: '设置属性 type 为 datetime 或 datetimerange 可以选择时间。\n' +
            '\n' +
            '设置 format 并且忽略秒，可以只设置小时和分钟维度。',
            demo: ' <date-picker type="datetime" placeholder="Select date and time" style="width: 200px"></date-picker>\n' +
            '    <br>\n' +
            '    <date-picker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></date-picker>\n' +
            '    <br>\n' +
            '    <date-picker type="datetimerange" placeholder="Select date and time" style="width: 300px"></date-picker>\n' +
            '    <br>\n' +
            '    <date-picker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></date-picker>',
            code: '<template>\n' +
                    '    <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>\n' +
                    '    <br>\n' +
                    '    <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>\n' +
                    '    <br>\n' +
                    '    <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>\n' +
                    '    <br>\n' +
                    '    <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '年和月',
            info: '设置属性 type 为 year 或 month 可以使用选择年或月的功能。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="year" placeholder="Select year" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="month" placeholder="Select month" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>\n' +
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
          title: '不可选日期',
            info: '设置属性 options 对象中的 disabledDate 可以设置不可选择的日期。\n' +
            '\n' +
            'disabledDate 是函数，参数为当前的日期，需要返回 Boolean 是否禁用这天。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="date" :options="options23" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="date" :options="options24" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="date" :options="options3" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="date" :options="options4" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                options3: {\n' +
                    '                    disabledDate (date) {\n' +
                    '                        return date && date.valueOf() < Date.now() - 86400000;\n' +
                    '                    }\n' +
                    '                },\n' +
                    '                options4: {\n' +
                    '                    disabledDate (date) {\n' +
                    '                        const disabledDay = date.getDate();\n' +
                    '                        return disabledDay === 15;\n' +
                    '                    }\n' +
                    '                }\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '带有确认操作',
            info: '设置属性 confirm，选择日期后，选择器不会主动关闭，需用户确认后才可关闭。\n' +
            '\n' +
            '确认按钮并没有影响日期的正常选择。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="date" confirm placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <date-picker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <DatePicker type="daterange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>\n'
        },
        {
          title: '手动控制组件',
            info: '对于一些定制化的场景，可以使用 slot 配合参数 open 及事件来手动控制组件的显示状态，详见示例和 API。',
            demo: '<date-picker\n' +
            '        :open="open"\n' +
            '        :value="value23"\n' +
            '        confirm\n' +
            '        type="date"\n' +
            '        @on-change="handleChange"\n' +
            '        @on-clear="handleClear"\n' +
            '        @on-ok="handleOk">\n' +
            '        <a href="javascript:void(0)" @click="handleClick">\n' +
            '            <Icon type="ios-calendar-outline"></Icon>\n' +
            '            <template v-if="value3 === \'\'">Select date</template>\n' +
            '            <template v-else>{{ value3 }}</template>\n' +
            '        </a>\n' +
            '    </date-picker>',
            code: '<template>\n' +
                    '    <DatePicker\n' +
                    '        :open="open"\n' +
                    '        :value="value3"\n' +
                    '        confirm\n' +
                    '        type="date"\n' +
                    '        @on-change="handleChange"\n' +
                    '        @on-clear="handleClear"\n' +
                    '        @on-ok="handleOk">\n' +
                    '        <a href="javascript:void(0)" @click="handleClick">\n' +
                    '            <Icon type="ios-calendar-outline"></Icon>\n' +
                    '            <template v-if="value3 === \'\'">Select date</template>\n' +
                    '            <template v-else>{{ value3 }}</template>\n' +
                    '        </a>\n' +
                    '    </DatePicker>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                open: false,\n' +
                    '                value3: \'\'\n' +
                    '            }\n' +
                    '        },\n' +
                    '        methods: {\n' +
                    '            handleClick () {\n' +
                    '                this.open = !this.open;\n' +
                    '            },\n' +
                    '            handleChange (date) {\n' +
                    '                this.value3 = date;\n' +
                    '            },\n' +
                    '            handleClear () {\n' +
                    '                this.open = false;\n' +
                    '            },\n' +
                    '            handleOk () {\n' +
                    '                this.open = false;\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '尺寸',
            info: '通过设置属性 size 为 large 或 small 可以调整选择器尺寸为大或小，默认不填为中。',
            demo: '<Row>\n' +
            '        <i-col span="8">\n' +
            '            <date-picker size="small" type="date" placeholder="Select date"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <date-picker type="date" placeholder="Select date"></date-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <date-picker size="large" type="date" placeholder="Select date"></date-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="8">\n' +
                    '            <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <DatePicker type="date" placeholder="Select date"></DatePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'DatePicker props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'type', explain:'显示类型，可选值为 date、daterange、datetime、datetimerange、year、month', type:'String', default:'date'},
                {attr: 'value', explain:'日期，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的日期格式，点击右边查看\n' +
                '注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用', type:'Date', default:'-'},
                {attr: 'format', explain:'展示的日期格式\t', type:'Date', default:'date | daterange：\n' +
                'yyyy-MM-dd\n' +
                'datetime | datetimerange：\n' +
                'yyyy-MM-dd HH:mm:ss\n' +
                'year：yyyy\n' +
                'month：yyyy-MM'},
                {attr: 'placement', explain:'日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end', type:'String', default:'bottom-start'},
                {attr: 'placeholder', explain:'占位文本\t', type:'String', default:'空'},
                {attr: 'options', explain:'选择器额外配置，比如不可选日期与快捷选项，具体项详见下表\t', type:'Object', default:'\t-'},
                {attr: 'confirm', explain:'是否显示底部控制栏，开启后，选择完日期，选择器不会主动关闭，需用户确认后才可关闭\t', type:'Boolean', default:'false'},
                {attr: 'open', explain:'手动控制日期选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用', type:'Boolean', default:'\tnull'},
                {attr: 'size', explain:'尺寸，可选值为large、small、default或者不设置\t', type:'String', default:'-'},
                {attr: 'disabled', explain:'是否禁用选择器\t', type:'Boolean', default:'false'},
                {attr: 'clearable', explain:'是否显示清除按钮\t', type:'Boolean', default:'true'},
                {attr: 'readonly', explain:'完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效\t', type:'Boolean', default:'false'},
                {attr: 'editable', explain:'文本框是否可以输入，只在没有使用 slot 时有效\t', type:'Boolean', default:'true'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type:'Boolean', default:'false'},
                {attr: 'element-id', explain:'给表单元素设置 id，详见 Form 用法。\t', type:'String', default:'-'}
            ]
        },
        {
            name: 'options',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'shortcuts', explain:'设置快捷选项，每项内容：\n' +
                'text | String：显示的文案\n' +
                'value | Function：返回指定的日期，如需自己控制逻辑，可不设置，并使用 onClick 回调\n' +
                'onClick | Function：点击时的回调，参数为当前日期选择器的 Vue 实例，当需要自定义复杂操作时，可以使用', type:'Array', default:'-'},
                {attr: 'disabledDate', explain:'设置不可选择的日期，参数为当前的日期，需要返回 Boolean 是否禁用这天', type:'Function', default:'-'}
            ]
        },
        {
            name: 'DatePicker events',
            list: [
                {attr: '事件名', explain:'说明', type:'返回值'},
                {attr: 'on-change', explain:'日期发生变化时触发\t', type:'已经格式化后的日期，比如 2016-01-01'},
                {attr: 'on-open-change', explain:'弹出日历和关闭日历时触发\t', type:'true | false'},
                {attr: 'on-ok\t', explain:'在 confirm 模式下有效，点击确定按钮时触发\t', type:'-'},
                {attr: 'on-clear\t', explain:'在 confirm 模式或 clearable = true 时有效，在清空日期时触发\t', type:'-'}
            ]
        },
        {
            name: 'DatePicker slot ',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例\n'}
            ]
        }
    ]
}