<template lang="html">
<div id="app">
    <div class="header">
        <h1>海河大数据</h1>
        <!-- use router-link component for navigation. -->
        <!-- specify the link by passing the `to` prop. -->
        <!-- <router-link> will be rendered as an `<a>` tag by default -->
        <router-link to="/">Go to login</router-link>
        <router-link to="/dataplatform">Go to DataShow</router-link>
    </div>
    <div class="content" id="router-view">
        <router-view></router-view>
        <!-- <login-component></login-component> -->
    </div>
    <div class="footer"></div>
</div>
</template>
<script>
    // 业务组件引入
    // import ViewLogin from './ViewLogin/ViewLogin.vue'

    export default {
        data() {
            return {
                name: 'hello'
            }
        }, 
        // components: {
        //     'login-component': ViewLogin
        // }

    }

</script>
<style lang="less" >

</style>
