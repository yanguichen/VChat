<style lang="stylus">
.home
    width 70%
    height 70%
    //background-color #cdcdcd
</style>


<template>
    <div class="home">
        <homeHead />
        <homeBody />
        <!-- <footerMenu /> -->
    </div>
</template>
<script>
import homeHead from "@/components/head/homeHead.vue";
import homeBody from "@/components/body/homeBody.vue";
// import footerMenu from "@/components/footer/footer.vue";
export default {
    components: {
        homeHead,
        homeBody
        // footerMenu
    }
};
</script>