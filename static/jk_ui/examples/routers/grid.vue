<style>
    /*.ivu-col div{*/
        /*background: rgba(0,153,229,.7);*/
    /*}*/
</style>
<template>

</template>
<script>
    import { Col, Row } from 'iview';

    export default {
        data () {
            return {
                n: 2
            }
        },
        methods: {
            add () {
                this.n++;
            }
        }
    }
</script>
