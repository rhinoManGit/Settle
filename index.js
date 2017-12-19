$(function () {

    // 全局组件
    var data = { counter: 0 }

    Vue.component('simple-counter', {
        template: '<p v-on:click="counter += 1">{{ counter }}</p>',
        data: function () {
            return data
        }
    })

    var app = new Vue({
        el: '#app',
        data: {
            message: 'Hello Vue!'
        }
    })

    var iw = parseInt(window.innerWidth * .8, 10);
    var iH = parseInt(window.innerHeight * .8, 10);

    var canvas=document.getElementById('settle');

    canvas.width = iw;
    canvas.height = iH;

    var ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,80,100);

})