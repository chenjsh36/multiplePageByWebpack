<template>
    <div class="g-headline">
        <div class="tab-nav">
            <el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove">
                <el-tab-pane label="全网概况">
                    <div class="topic-graph" >
                        全网概况内容展示
                    </div>
                </el-tab-pane>
                <el-tab-pane label="详细舆情">
                    <div class="topic-detail">
                        详细舆情内容展示
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                name: '.headline'
            }
        },
        methods: {
            handleClick: function(comp) {
                console.log('clickxxx');
            },
            handleRemove: function() {
                console.log('clickxxx');
            }
        }

    }
</script>

<style lang="less" scoped>
    .el-tabs {
        display: block;
    }
    .g-headline {
        position: relative;
        min-height: 500px;
        margin: 15px 15px;

        .tab-nav {
            position: relative;
            // border: 1px solid #000; 
        }

        .topic-graph,
        .topic-detail {
            position: relative;
            width: 100%;
        }
    }
</style>