<template>
    <div style="width: 100px;">
        <Input autocomplete="on" v-model="value1" size="large" placeholder="large size" v-on:on-keyup="say"></Input>
        <br>
        <Input v-model="value2" placeholder="default size"></Input>
        <br>
        <Input v-model="value3" size="small" placeholder="small size"></Input>
        <br>
        <Input v-model="value1" size="large" placeholder="large size" icon="ios-clock-outline"></Input>
        <br>
        <Input v-model="value2" placeholder="default size" icon="ios-clock-outline"></Input>
        <br>
        <Input v-model="value3" size="small" placeholder="small size" icon="ios-clock-outline"></Input>
        <br>
        <Input v-model="obj.test" type="textarea" autosize></Input>

        <Input v-model="value14" placeholder="Enter something..."
               style="width: 200px"></Input>
    </div>
</template>
<script>
    /*
    * this a more big component contain the up component,
    * than template as this component tpl
    * */
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: '',
                value14:'撒谎侃大山的',
                obj: {

                }
            }
        },
        methods: {
            say: function () {

            }
        },
    }
</script>
