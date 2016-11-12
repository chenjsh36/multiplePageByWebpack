<template>
    <el-menu theme="light" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect" :unique-opened="uniqueOpened" >
        <el-submenu index="1">
            <template slot="title">全网舆情</template>
            <el-menu-item index="全网热点">全网热点</el-menu-item>
            <el-menu-item index="专题舆情">专题舆情</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">明日预测</template>
            <el-menu-item index="全网热点预测">全网热点预测</el-menu-item>
            <el-menu-item index="专题热点预测">专题热点预测</el-menu-item>
        </el-submenu>
        <el-menu-item index="微博传播分析">微博传播分析</el-menu-item>
        <el-menu-item index="BOSS看板">BOSS看板</el-menu-item>
        <el-menu-item index="系统配置">系统配置</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                name: 'view-head-menu',
                uniqueOpened: true,
                routerMap: {
                    '全网热点': '/dataplatform/gtoday',
                    '专题舆情': '/dataplatform/today',
                    '全网热点预测': '/dataplatform/gfuture',
                    '专题热点预测': '/dataplatform/future',
                    '微博传播分析': '/dataplatform/wbanalysis',
                    'BOSS看板': '/dataplatform/bossview',
                    '系统配置': '/dataplatform/conf'
                }
            }
        },
        methods: {
            handleselect: function(index, path, el) {
                console.log('index', index);
                if (!this.$data.routerMap[index]) return;
                this.$router.push(this.$data.routerMap[index]);
            }
        }
    }
</script>

<style lang="less" scoped>
</style>