<template>
    <div class="headline">
        <h1>headline to show </h1>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '.headline'
            }
        }

    }
</script>

<style lang="less">
    .headline {
        position: relative;
        width: 100%;
        min-height: 500px;
        background-color: green;
    }
</style>