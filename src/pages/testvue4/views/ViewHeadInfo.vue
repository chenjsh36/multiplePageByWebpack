<template>
    <div class="head-info">
        <div class="logo-wrapper">
            <img src="./../imgs/logo.png" alt="海河大数据" v-on:click="goEntry">
        </div>
        <div class="operate">
            <div class="oper-item oper-help">操作指南</div>
            <div class="oper-item oper-mail">mail</div>
            <div class="oper-item oper-user">user</div>
            <div class="oper-item oper-passwd">passwd</div>
            <div class="oper-item oper-logout">logout</div>
            <div class="oper-item oper-outlink">outlink</div>
            
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'view-head-info'
            }
        },
        methods: {
            goEntry: function() {
                console.log('goEntry:', this);
                this.$router.push('/dataplatform');
            }
        }
    }
</script>

<style lang="less" scoped>
    @headHeight: 50px;
    .head-info {
        position: relative;
        width: 100%;
        height: @headHeight;
        padding: 0 15px;
        background-color: #21254b;
        &:before,
        &:after {
            content: ' ';
            display: table;
        }
        &:after {
            clear: both;
        }

        .logo-wrapper {
            position: relative;
            float: left;
            height: @headHeight;
            width: 200px;
            padding: 6px 0;
            cursor: pointer;
            img {
                height: 100%;
            }

        }
        .operate {
            position: relative;
            float: right;
            height: @headHeight;;
            .oper-item {
                position: relative;
                display: inline-block;
                vertical-align: center;
                height: @headHeight;
                line-height: @headHeight;
                color: rgba(255, 255, 255, 0.68);
                cursor: pointer;
                
                &:hover {
                    color: rgba(255, 255, 255, 1);
                }
            }
        }
    }
</style>