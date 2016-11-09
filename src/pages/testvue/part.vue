<template lang="html">
<div id="app">
    <div class="header"></div>
    <div class="content">
        <login-component></login-component>
    </div>
    <div class="footer"></div>
</div>
</template>
<script>
    import Vue from 'vue'
    // 业务组件引入
    import ViewLogin from './ViewLogin/ViewLogin.vue'

    var GLOBALDATA = {
        loginState: false
    };
    var bus = new Vue({
        data: GLOBALDATA 
    });
    
    bus.$emit('loginState', true);

    bus.$on('loginState', function(state) {
        console.log('set loginState:', state);
    })
    window.bus = bus;
    export default {
        data() {
            return {
                name: 'hello'
            }
        }, 
        components: {
            'login-component': ViewLogin
        }

    }

</script>
<style lang="less" >

</style>
