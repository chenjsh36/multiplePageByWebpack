<template>
    <div class="g-headline">
        <div class="tab-nav">
            <el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove">
                <el-tab-pane label="全网概况">
                    <div class="topic-graph" >
                        全网概况内容展示
                        <div class="doc-num" v-loading="docNumLoad">
                            
                        </div>
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
    import echarts from 'echarts'

    export default {
        data() {
            return {
                name: '.headline',
                docNumLoad: false
            }
        },
        methods: {
            handleClick: function(comp) {
                console.log('clickxxx');
            },
            handleRemove: function() {
                console.log('clickxxx');
            }
        },
        mounted: function() {
            this.$data.docNumLoad = true;
            setTimeout(() => {
                let docNum = this.$el.querySelector('.doc-num');
                let docNumC = echarts.init(docNum);
                docNumC.setOption({
                    title: { text: 'ECharts 入门示例' },
                    tooltip: {},
                    xAxis: {
                        data: ["11.11","11.12","11.13","11.14","11.15","11.16"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }, 3000)

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
        .doc-num {
            height: 300px;
            width: 600px;
        }
    }
</style>