<template>
    <div class="data-platform">
        <h1>data-platform to show </h1>
        <button type="button" v-on:click="logout">登出</button>
        <router-view></router-view>
    </div>
</template>

<script>
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
        background-color: orange;
    }
</style>