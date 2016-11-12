<template>
    <!-- 登录后进入的数据概览平台的外架 -->
    <div class="data-platform">
        <!-- 顶部信息栏 -->
        <view-head-info></view-head-info>
        <!-- 顶部菜单栏 -->
        <view-head-menu></view-head-menu>
        <!-- 中间信息展示栏 -->
        <router-view></router-view>
    </div>
</template>

<script>
    import ViewHeadInfo from './ViewHeadInfo.vue'
    import ViewHeadMenu from './ViewHeadMenu.vue'

    export default {
        data() {
            return {
                name: 'data-platform'
            }
        },
        methods: {
            // 对于 obj.method 使用function，其他的使用 =>
            logout: function() {
                setTimeout(()=> {
                    this.$store.commit('logout');
                    this.$router.push({
                        path: '/'
                    });
                }, 1000);
            }
        },
        components: {
            ViewHeadInfo,
            ViewHeadMenu
        }
        
        // beforeRouteEnter(to, from, next) {
        //     console.log('fetching data...');
        //     setTimeout(() => {
        //         console.log('fail to go');
        //         next(false);
        //     }, 3000)
        // }

    }
</script>

<style lang="less">
    .data-platform {
        position: relative;
        width: 100%;
        min-height: 500px;
        // background-color: orange;
    }
</style>