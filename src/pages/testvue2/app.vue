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
    // 业务组件引入
    import ViewLogin from './ViewLogin/ViewLogin.vue'

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
