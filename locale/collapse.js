/*
*
* */
module.exports={
    name: 'Collapse 折叠面板',
    class: 'collapse',
    outline: '将内容区域折叠/展开。\n' +
    '\n',
    tips:'',
    list:[
        {
            title: '基础用法',
            info: '默认可以同时展开多个面板，可以设置默认展开第几个。\n' +
            '\n',
            demo: '<Collapse v-model="value221">\n' +
            '        <Panel name="1">\n' +
            '            史蒂夫·乔布斯\n' +
            '            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\n' +
            '        </Panel>\n' +
            '        <Panel name="2">\n' +
            '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
            '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
            '        </Panel>\n' +
            '        <Panel name="3">\n' +
            '            乔纳森·伊夫\n' +
            '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
            '        </Panel>\n' +
            '    </Collapse>',
            code: '<template>\n' +
                    '    <Collapse v-model="value1">\n' +
                    '        <Panel name="1">\n' +
                    '            史蒂夫·乔布斯\n' +
                    '            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="2">\n' +
                    '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
                    '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="3">\n' +
                    '            乔纳森·伊夫\n' +
                    '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
                    '        </Panel>\n' +
                    '    </Collapse>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value1: \'1\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '手风琴',
            info: '通过设置属性accordion开启手风琴模式，每次只能打开一个面板。',
            demo: '<Collapse v-model="value222" accordion>\n' +
            '        <Panel name="1">\n' +
            '            史蒂夫·乔布斯\n' +
            '            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\n' +
            '        </Panel>\n' +
            '        <Panel name="2">\n' +
            '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
            '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
            '        </Panel>\n' +
            '        <Panel name="3">\n' +
            '            乔纳森·伊夫\n' +
            '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
            '        </Panel>\n' +
            '    </Collapse>',
            code: '<template>\n' +
                    '    <Collapse v-model="value2" accordion>\n' +
                    '        <Panel name="1">\n' +
                    '            史蒂夫·乔布斯\n' +
                    '            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="2">\n' +
                    '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
                    '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="3">\n' +
                    '            乔纳森·伊夫\n' +
                    '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
                    '        </Panel>\n' +
                    '    </Collapse>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value2: \'1\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        },
        {
            title: '面板嵌套',
            info: '折叠面板可以进行嵌套。\n' +
            '\n',
            demo: '<Collapse accordion v-model="value223">\n' +
            '        <Panel name="1">\n' +
            '            史蒂夫·乔布斯\n' +
            '            <div slot="content">\n' +
            '                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。\n' +
            '                <Collapse accordion v-model="value224">\n' +
            '                    <Panel name="1-1">\n' +
            '                        iPhone\n' +
            '                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>\n' +
            '                    </Panel>\n' +
            '                    <Panel name="1-2">\n' +
            '                        iPad\n' +
            '                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>\n' +
            '                    </Panel>\n' +
            '                </Collapse>\n' +
            '            </div>\n' +
            '        </Panel>\n' +
            '        <Panel name="2">\n' +
            '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
            '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
            '        </Panel>\n' +
            '        <Panel name="3">\n' +
            '            乔纳森·伊夫\n' +
            '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
            '        </Panel>\n' +
            '    </Collapse>',
            code: '<template>\n' +
                    '    <Collapse accordion v-model="value3">\n' +
                    '        <Panel name="1">\n' +
                    '            史蒂夫·乔布斯\n' +
                    '            <div slot="content">\n' +
                    '                史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。\n' +
                    '                <Collapse accordion v-model="value4">\n' +
                    '                    <Panel name="1-1">\n' +
                    '                        iPhone\n' +
                    '                        <p slot="content">iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。</p>\n' +
                    '                    </Panel>\n' +
                    '                    <Panel name="1-2">\n' +
                    '                        iPad\n' +
                    '                        <p slot="content">iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。</p>\n' +
                    '                    </Panel>\n' +
                    '                </Collapse>\n' +
                    '            </div>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="2">\n' +
                    '            斯蒂夫·盖瑞·沃兹尼亚克\n' +
                    '            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>\n' +
                    '        </Panel>\n' +
                    '        <Panel name="3">\n' +
                    '            乔纳森·伊夫\n' +
                    '            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>\n' +
                    '        </Panel>\n' +
                    '    </Collapse>\n' +
                    '</template>\n' +
                    '<script>\n' +
                    '    export default {\n' +
                    '        data () {\n' +
                    '            return {\n' +
                    '                value3: \'1\',\n' +
                    '                value4: \'1-1\'\n' +
                    '            }\n' +
                    '        }\n' +
                    '    }\n' +
                    '</script>'
        }
    ],

    api: [
        {
            name: 'Collapse props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'value', explain:'当前激活的面板的 name，可以使用 v-model 双向绑定\t', type:'Array | String\t', default:'-'},
                {attr: 'accordion', explain:'是否开启手风琴模式，开启后每次至多展开一个面板\t', type:'Boolean', default:'false'},
            ]
        },
        {
            name: 'Collapse events',
            list: [
                {attr: '事件名', explain:'说明', default:'返回值'},
                {attr: 'on-change\t', explain:'切换面板时触发，返回当前已展开的面板的 key，格式为数组\t', default:'[]'}
            ]
        },
        {
            name: 'Panel props',
            list: [
                {attr: '属性', explain:'说明', type:'类型', default:'默认值'},
                {attr: 'name', explain:'当前面板的 name，与 Collapse的value对应，不填为索引值\t', type:'String', default:'index'}
            ]
        },
        {
            name: 'Panel slot',
            list: [
                {attr: '名称', explain:'说明'},
                {attr: '无', explain:'面板头内容\n'},
                {attr: 'content', explain:'描述内容\n'}
            ]
        },
    ]
}