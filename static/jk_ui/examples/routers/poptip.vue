<template>
    <div style="margin: 200px;">
        <Poptip :title="title"
                :width="width" :okText="okText"  :cancelText="cancelText" transfer>
            <div slot="content" style="padding: 50px">
                <Button @click="ok">click me</Button>
            </div>
            <Button>click 激活</Button>
        </Poptip>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                text: 'Tooltip 文字提示',
                title: '提示标题',
                width: '400',
                okText: '确认',
                cancelText: '取消',
                showTitle:false
            };
        },
        methods: {
            ok () {
                this.$Message.info('点击了确定');
            },
            cancel () {
                this.$Message.info('点击了取消');
            }
        }
    }
</script>
