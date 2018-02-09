<template>
    <div>
        <h3 class="title">字体</h3>
        <p>我们创建一个字体约定来确保跨不同平台的最。</p>

        <h3 class="primary">中文字体</h3>

        <p class="exam-f" style="font-family: PingFang SC">
            极课教师
            <em>PingFang SC</em>
        </p>
        <p class="exam-f" style="font-family: PingFang SC">
            极课教师
            <em>Hiragino Sans GB</em>
        </p>
        <p class="exam-f" style="font-family: Microsoft YaHei">
            极课教师
            <em>Microsoft YaHei</em>
        </p>

        <h3 class="primary">英文/数字字体</h3>
        <p>除了主色外的场景色，按照需求在不同的场景</p>

        <p class="exam-f" style="font-family: PingFang SC">
            ABC
            <em>Helvetica Neue</em>
        </p>
        <p class="exam-f" style="font-family: PingFang SC">
            ABC
            <em>Helvetica</em>
        </p>
        <p class="exam-f" style="font-family: Microsoft YaHei">
            ABC
            <em>Arial</em>
        </p>

        <h3 class="primary">字体家族</h3>
        <p>除了主色外的场景色，按照需求在不同的场景</p>

        <h3 class="primary">字体使用规范</h3>
        <p class="p-font clearfix">
            <span>
                <em>主标题</em>
                <em>20px - Extra large</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
        <p class="p-font clearfix" style="font-size: 18px;">
            <span>
                <em>标题</em>
                <em>18px - Large</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
        <p class="p-font clearfix" style="font-size: 16px;">
            <span>
                <em>小标题</em>
                <em>16px - Medium</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
        <p class="p-font clearfix" style="font-size: 14px;">
            <span>
                <em>正文</em>
                <em>14px - Small</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
        <p class="p-font clearfix" style="font-size: 13px;">
            <span>
                <em>正文（小）</em>
                <em>13px - Extra Small</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
        <p class="p-font clearfix"style="font-size: 12px;">
            <span>
                <em>辅助文字</em>
                <em>12px - Extra Extra Small</em>
            </span>
            <span>读懂学生，精准教学</span>
            <span>ABCD 1234567890</span>
        </p>
    </div>
</template>
<style>
    .exam-f{
        display: inline-block;
        font-size: 34px;
        width: 220px;
        height: 115px;
        text-align: center;
        margin-right: 15px;
        border: 1px solid #D3DCE6;
        position: relative;
        padding-top: 10px;
    }
    .exam-f em{
        background: #FAFAFA;
        color: #8492A6;
        font-size: 16px;
        line-height: 2;
        position: absolute;
        width: 100%;
        border-top: 1px solid #D3DCE6;
        left: 0;
        bottom: 0;
    }
    span em:last-child{
        display: block;
    }
    .p-font{
        color: #1F2D3D;
        font-size: 20px;
        border-bottom: 1px solid #D3DCE6;
        padding-bottom: 10px;
        margin-top: 15px;
    }
    .p-font>span{
        margin-right: 71px;
        line-height: 20px;
        display: inline-block;
        width: 188px;
    }
    .p-font>span:nth-child(2){
        line-height: 40px;
    }
    .p-font>span:first-child{
        float: left;
    }
    .p-font>span:first-child em:last-child{
        font-size: 12px;
        color: #8492A6;
    }
</style>
<script>

    export default {
        data () {
            return {}
        }
    }
</script>
