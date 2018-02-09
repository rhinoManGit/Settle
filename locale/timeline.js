/*
*
* */
module.exports={
    name: 'Timeline 时间轴',
    class: 'timeline',
    outline: '对一系列信息进行时间排序时，垂直地展示。',
    tips:'注意：非 template/render 模式下，TimelineItem 需使用 timeline-item。',
    list:[
        {
            title: '基础用法',
            info: '最简单定义一个时间轴的用法。\n' +
            '\n',
            demo: '<Timeline>\n' +
            '        <timeline-item>\n' +
            '            <p class="time">1976年</p>\n' +
            '            <p class="content">Apple I 问世</p>\n' +
            '        </timeline-item>\n' +
            '        <timeline-item>\n' +
            '            <p class="time">1984年</p>\n' +
            '            <p class="content">发布 Macintosh</p>\n' +
            '        </timeline-item>\n' +
            '        <timeline-item>\n' +
            '            <p class="time">2007年</p>\n' +
            '            <p class="content">发布 iPhone</p>\n' +
            '        </timeline-item>\n' +
            '        <timeline-item>\n' +
            '            <p class="time">2010年</p>\n' +
            '            <p class="content">发布 iPad</p>\n' +
            '        </timeline-item>\n' +
            '        <timeline-item>\n' +
            '            <p class="time">2011年10月5日</p>\n' +
            '            <p class="content">史蒂夫·乔布斯去世</p>\n' +
            '        </timeline-item>\n' +
            '    </Timeline>',
            code: '<style scoped>\n' +
                    '    .time{\n' +
                    '        font-size: 14px;\n' +
                    '        font-weight: bold;\n' +
                    '    }\n' +
                    '    .content{\n' +
                    '        padding-left: 5px;\n' +
                    '    }\n' +
                    '</style>\n' +
                    '<template>\n' +
                    '    <Timeline>\n' +
                    '        <TimelineItem>\n' +
                    '            <p class="time">1976年</p>\n' +
                    '            <p class="content">Apple I 问世</p>\n' +
                    '        </TimelineItem>\n' +
                    '        <TimelineItem>\n' +
                    '            <p class="time">1984年</p>\n' +
                    '            <p class="content">发布 Macintosh</p>\n' +
                    '        </TimelineItem>\n' +
                    '        <TimelineItem>\n' +
                    '            <p class="time">2007年</p>\n' +
                    '            <p class="content">发布 iPhone</p>\n' +
                    '        </TimelineItem>\n' +
                    '        <TimelineItem>\n' +
                    '            <p class="time">2010年</p>\n' +
                    '            <p class="content">发布 iPad</p>\n' +
                    '        </TimelineItem>\n' +
                    '        <TimelineItem>\n' +
                    '            <p class="time">2011年10月5日</p>\n' +
                    '            <p class="content">史蒂夫·乔布斯去世</p>\n' +
                    '        </TimelineItem>\n' +
                    '    </Timeline>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '圆圈颜色',
            info: '用各种颜色来标识不同状态，可以使用green、red、blue或自定义的颜色，默认是 blue 。',
            demo: '<Timeline>\n' +
            '        <timeline-Item color="green">发布1.0版本</timeline-Item>\n' +
            '        <timeline-Item color="green">发布2.0版本</timeline-Item>\n' +
            '        <timeline-Item color="red">严重故障</timeline-Item>\n' +
            '        <timeline-Item color="blue">发布3.0版本</timeline-Item>\n' +
            '    </Timeline>',
            code: '<template>\n' +
                    '    <Timeline>\n' +
                    '        <TimelineItem color="green">发布1.0版本</TimelineItem>\n' +
                    '        <TimelineItem color="green">发布2.0版本</TimelineItem>\n' +
                    '        <TimelineItem color="red">严重故障</TimelineItem>\n' +
                    '        <TimelineItem color="blue">发布3.0版本</TimelineItem>\n' +
                    '    </Timeline>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '最后一个',
            info: '通过添加pending属性来标记最后一个为幽灵节点，标识还未完成。',
            demo: '<Timeline pending>\n' +
            '        <timeline-Item>发布1.0版本</timeline-Item>\n' +
            '        <timeline-Item>发布2.0版本</timeline-Item>\n' +
            '        <timeline-Item>发布3.0版本</timeline-Item>\n' +
            '        <timeline-Item><a href="#">查看更多</a></timeline-Item>\n' +
            '    </Timeline>',
            code: '<template>\n' +
                    '    <Timeline pending>\n' +
                    '        <TimelineItem>发布1.0版本</TimelineItem>\n' +
                    '        <TimelineItem>发布2.0版本</TimelineItem>\n' +
                    '        <TimelineItem>发布3.0版本</TimelineItem>\n' +
                    '        <TimelineItem><a href="#">查看更多</a></TimelineItem>\n' +
                    '    </Timeline>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        \n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '自定义时间轴点',
            info: '接受一个 slot 来自定义轴点的内容，比如一个图标。\n' +
            '\n',
            demo: '<Timeline>\n' +
            '        <timeline-Item color="green">\n' +
            '            <Icon type="trophy" slot="dot"></Icon>\n' +
            '            <span>发布里程碑版本</span>\n' +
            '        </timeline-Item>\n' +
            '        <timeline-Item>发布1.0版本</timeline-Item>\n' +
            '        <timeline-Item>发布2.0版本</timeline-Item>\n' +
            '        <timeline-Item>发布3.0版本</timeline-Item>\n' +
            '    </Timeline>',
            code: '<template>\n' +
                    '    <Timeline>\n' +
                    '        <TimelineItem color="green">\n' +
                    '            <Icon type="trophy" slot="dot"></Icon>\n' +
                    '            <span>发布里程碑版本</span>\n' +
                    '        </TimelineItem>\n' +
                    '        <TimelineItem>发布1.0版本</TimelineItem>\n' +
                    '        <TimelineItem>发布2.0版本</TimelineItem>\n' +
                    '        <TimelineItem>发布3.0版本</TimelineItem>\n' +
                    '    </Timeline>\n' +
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
            name: 'Timeline props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'pending', explain:'指定是否最后一个节点为幽灵节点\t', type:'Boolean',
                    default:'false'}
            ]
        },
        {
            name: 'TimelineItem props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'color', explain:'圆圈颜色，可选值为blue、red、green，或自定义色值', type:'String',
                    default:'blue'}
            ]
        },
        {
            name: 'TimelineItem slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: 'dot', explain:'自定义时间轴点内容\n'},
                {attr: '无', explain:'基本内容\n'}
            ]
        },
    ]
}