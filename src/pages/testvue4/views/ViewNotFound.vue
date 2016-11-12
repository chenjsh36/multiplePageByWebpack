<template>
    <div class="not-found">
        <h1>not-found to show </h1>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: 'not-found'
            }
        }

    }
</script>

<style lang="less">
    .not-found {
        position: relative;
        width: 100%;
        min-height: 500px;
        background-color: yellow;
    }
</style>