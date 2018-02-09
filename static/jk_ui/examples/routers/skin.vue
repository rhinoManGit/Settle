<template>
    <div>
        <h3 class="title">颜色</h3>
        <p>元素使用一组特定的调色板来指定颜色，以便为您构建的产品提供一致的外观。</p>

        <h3 class="primary">主色</h3>
        <p>极课教师主品牌色是智慧，冷静的蓝色</p>
        <span class="primary" style="background: #3D88EA;">
            <em>Blue</em>
            <em>#3D88EA</em>
        </span>

        <h3 class="primary">次要颜色</h3>
        <p>除了主色外的场景色，按照需求在不同的场景中使用。</p>
        <span class="primary" style="background: #64C23A;">
            <em>Success</em>
            <em>#64C23A</em>
        </span>

        <span class="primary" style="background: #F7BA2A;">
            <em>Warnning</em>
            <em>#F7BA2A</em>
        </span>

        <span class="primary" style="background: #FF4949;">
            <em>Danger</em>
            <em>#FF4949</em>
        </span>

        <span class="primary" style="background: #CCCCCC;">
            <em>Null</em>
            <em>#CCCCCC</em>
        </span>

        <h3 class="primary">文本色</h3>
        <p>使用在文本，来表现层次结构。</p>
        <span class="span-text white" style="background: #2F3234;">
            主要&nbsp;
            #2F3234
        </span>
        <span class="span-text white" style="background: #475669;">
            常规&nbsp;
            #475669
        </span>
        <span class="span-text white" style="background: #9AA2AB;">
            次要&nbsp;
            #9AA2AB
        </span>
        <span class="span-text white" style="background: #CCCCCC;">
            失效&nbsp;
            #CCCCCC
        </span>

        <h3 class="primary">中性色</h3>
        <p>中性色彩使用在背景和边框色，通过运用不同的中性色，来表现层次结构。</p>
        <span class="span-text"
           style="background: #D3DCE6;">#D3DCE6</span>
        <span class="span-text"
           style="background: #EAECEE;">#EAECEE</span>
        <span class="span-text"
           style="background: #F3F4F5;">#F3F4F5</span>
        <span class="span-text"
           style="background: #F7F8F9;">#F7F8F9</span>
    </div>
</template>
<style>
    span em:last-child{
        display: block;
    }
    span.primary{
        color: #FFFFFF;
        display: inline-block;
        width: 180px;
        height: 59px;
        margin-right: 20px;
        border-radius: 4px;
        margin-bottom: 20px;
        text-align: left;
        padding: 10px 15px;
    }
    .span-text{
        padding: 10px 30px;
        border-radius: 4px;
        color: #292C2E;
        cursor: default;
        display: inline-block;
        margin-right: 20px;
    }

    .white{
        color: #FFFFFF;
    }
</style>
<script>

    export default {
        data () {
            return {}
        }
    }
</script>
