/*
*
* */
module.exports={
    name: 'TimePicker 时间选择器',
    class: 'timepicker',
    outline: '选择或输入标准时间，支持选择范围。',
    tips:'注意：非 template/render 模式下，需使用 time-picker。',
    list:[
        {
            title: '基础用法',
            info: '设置属性 type 为 time 或 timerange 分别显示选择单个时间和选择范围时间类型。\n' +
            '\n' +
            '设置属性 placement 可以更改选择器出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向，详见 API。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker type="time" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker type="time" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
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
            title: '时间格式',
            info: '设置属性 format 可以改变时间的显示格式，详见  Date。\n' +
            '\n' +
            '注意，format 只是改变显示的格式，并非改变 value 值。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker :value="value31" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker :value="value332" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker :value="value1" format="HH点mm分ss秒" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker :value="value2" format="HH’mm’ss" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: \'09:41:00\',\n' +
                    '                value2: [\'09:41:00\', \'12:00:00\']\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '选择时分',
            info: '组件浮层中的列会随着 format 变化，当略去 format 中的秒时，浮层中对应的列也会消失。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker format="HH:mm" placeholder="Select time" style="width: 112px"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker format="HH:mm" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker format="HH:mm" placeholder="Select time" style="width: 112px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker format="HH:mm" type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '时间间隔',
            info: '通过属性 steps 可以设置时间间隔。数组的三项分别对应小时、分钟、秒。',
            demo: '<time-picker :steps="[1, 15, 15]" placeholder="Select time" style="width: 112px"></time-picker>',
            code: '<template>\n' +
                    '    <TimePicker :steps="[1, 15, 15]" placeholder="Select time" style="width: 112px"></TimePicker>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '不可选时间',
            info: '可以使用 disabled-hours disabled-minutes disabled-seconds 组合禁止用户选择某个时间。\n' +
            '\n' +
            '使用 hide-disabled-options 可以直接把不可选择的项隐藏。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker\n' +
            '                :disabled-hours="[1,5,10]"\n' +
            '                :disabled-minutes="[0,10,20]"\n' +
            '                placeholder="Select time"\n' +
            '                style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker\n' +
            '                hide-disabled-options\n' +
            '                :disabled-hours="[1,5,10]"\n' +
            '                :disabled-minutes="[0,10,20]"\n' +
            '                placeholder="Select time"\n' +
            '                style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker\n' +
                    '                :disabled-hours="[1,5,10]"\n' +
                    '                :disabled-minutes="[0,10,20]"\n' +
                    '                placeholder="Select time"\n' +
                    '                style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker\n' +
                    '                hide-disabled-options\n' +
                    '                :disabled-hours="[1,5,10]"\n' +
                    '                :disabled-minutes="[0,10,20]"\n' +
                    '                placeholder="Select time"\n' +
                    '                style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '带有确认操作',
            info: '设置属性 confirm，选择器会有清空和确定按钮。\n' +
            '\n' +
            '确认按钮并没有影响时间的正常选择。',
            demo: '<Row>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker confirm placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="12">\n' +
            '            <time-picker confirm type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <Row>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker confirm placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="12">\n' +
                    '            <TimePicker confirm type="timerange" placement="bottom-end" placeholder="Select time" style="width: 168px"></TimePicker>\n' +
                    '        </Col>\n' +
                    '    </Row>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '\n' +
                    '    }\n' +
                    '</script>'
        },
        {
          title: '手动控制组件',
            info: '对于一些定制化的场景，可以使用 slot 配合参数 open confirm 及事件来手动控制组件的显示状态，详见示例和 API。',
            demo: '<time-picker\n' +
            '        :open="open"\n' +
            '        :value="value33"\n' +
            '        confirm\n' +
            '        @on-change="handleChange"\n' +
            '        @on-clear="handleClear"\n' +
            '        @on-ok="handleOk">\n' +
            '        <a href="javascript:void(0)" @click="handleClick">\n' +
            '            <Icon type="ios-clock-outline"></Icon>\n' +
            '            <template v-if="value3 === \'\'">Select time</template>\n' +
            '            <template v-else>{{ value3 }}</template>\n' +
            '        </a>\n' +
            '    </time-picker>',
            code: '<template>\n' +
                    '    <TimePicker\n' +
                    '        :open="open"\n' +
                    '        :value="value3"\n' +
                    '        confirm\n' +
                    '        @on-change="handleChange"\n' +
                    '        @on-clear="handleClear"\n' +
                    '        @on-ok="handleOk">\n' +
                    '        <a href="javascript:void(0)" @click="handleClick">\n' +
                    '            <Icon type="ios-clock-outline"></Icon>\n' +
                    '            <template v-if="value3 === \'\'">Select time</template>\n' +
                    '            <template v-else>{{ value3 }}</template>\n' +
                    '        </a>\n' +
                    '    </TimePicker>\n' +
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
                    '            handleChange (time) {\n' +
                    '                this.value3 = time;\n' +
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
            demo: '<Row :gutter="16">\n' +
            '        <i-col span="8">\n' +
            '            <time-picker size="small" placeholder="Select time"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <time-picker placeholder="Select time"></time-picker>\n' +
            '        </i-col>\n' +
            '        <i-col span="8">\n' +
            '            <time-picker size="large" placeholder="Select time"></time-picker>\n' +
            '        </i-col>\n' +
            '    </Row>',
            code: '<template>\n' +
                    '    <row :gutter="16">\n' +
                    '        <Col span="8">\n' +
                    '            <TimePicker size="small" placeholder="Select time"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <TimePicker placeholder="Select time"></TimePicker>\n' +
                    '        </Col>\n' +
                    '        <Col span="8">\n' +
                    '            <TimePicker size="large" placeholder="Select time"></TimePicker>\n' +
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
            name: 'TimePicker props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'type', explain:'显示类型，可选值为 time、timerange', type:'String', default:'time'},
                {attr: 'value', explain:'时间，可以是 JavaScript 的 Date，例如 new Date()，也可以是标准的时间格式，点击右边查看\n' +
                '注意：value 使用 v-model 时，值是 Date 类型，可以配合 @on-change 使用', type:'Date', default:'-'},
                {attr: 'format', explain:'展示的时间格式', type:'Date', default:'HH:mm:ss'},
                {attr: 'steps', explain:'下拉列表的时间间隔，数组的三项分别对应小时、分钟、秒。例如设置为 [1, 15] 时，分钟会显示：00、15、30、45。', type:'Array', default:'[]'},
                {attr: 'placement', explain:'时间选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end', type:'String', default:'bottom-start'},
                {attr: 'placeholder', explain:'占位文本', type:'String', default:'空'},
                {attr: 'confirm', explain:'是否显示底部控制栏\t', type:'Boolean', default:'false'},
                {attr: 'open', explain:'手动控制时间选择器的显示状态，true 为显示，false 为收起。使用该属性后，选择器不会主动关闭。建议配合 slot 及 confirm 和相关事件一起使用', type:'Boolean', default:'null'},
                {attr: 'size', explain:'尺寸，可选值为large、small、default或者不设置', type:'String', default:'-'},
                {attr: 'disabled', explain:'是否禁用选择器\t', type:'Boolean', default:'false'},
                {attr: 'clearable', explain:'是否显示清除按钮', type:'Boolean', default:'true'},
                {attr: 'readonly', explain:'完全只读，开启后不会弹出选择器，只在没有设置 open 属性下生效', type:'Boolean', default:'false'},
                {attr: 'editable', explain:'文本框是否可以输入，只在没有使用 slot 时有效', type:'Boolean', default:'true'},
                {attr: 'transfer', explain:'是否将弹层放置于 body 内，在 Tabs、带有 fixed 的 Table 列内使用时，建议添加此属性，它将不受父级样式影响，从而达到更好的效果', type:'Boolean', default:'false'},
                {attr: 'element-id\t', explain:'给表单元素设置 id，详见 Form 用法。', type:'String', default:'-'},
            ]
        },
        {
            name: 'TimePicker events',
            list: [
                {attr: '事件名', explain:'说明', type:'返回值'},
                {attr: 'on-change', explain:'时间发生变化时触发', type:'已经格式化后的时间，比如 09:41:00'},
                {attr: 'on-open-change', explain:'弹出浮层和关闭浮层时触发', type:'true | false'},
                {attr: 'on-ok\t', explain:'点击确定按钮时触发', type:'-'},
                {attr: 'on-clear\t', explain:'在清空日期时触发', type:'-'}
            ]
        },
        {
            name: 'TimePicker slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'自定义选择器的显示内容，建议与 open 等参数一起使用，详见示例'}
            ]
        }
    ]
}