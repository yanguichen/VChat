<style>
@import "./../static/css/common.css";
</style>
<style lang="stylus">
#app
    width 100%
    height 100%
    display flex
    align-items center
    justify-content center
    background-image url('~@/assets/icons/background.jpg')
    background-size 100% 100%
    background-repeat no-repeat
</style>



<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
//全局事件挂载
export default {
    name: "App"
};
</script>

