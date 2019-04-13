<style lang="stylus">
.home
    width 900px
    height 460px
    box-shadow 2px -2px 5px #888888
</style>

<template>
    <div class="home">
        <homeHead />
        <homeBody />
        <footerMenu />
    </div>
</template>
<script>
import homeHead from '@/components/head/homeHead.vue'
import homeBody from '@/components/body/homeBody.vue'
import footerMenu from "@/components/footer/footer.vue";
export default {
  components: {
    homeHead,
    homeBody,
    footerMenu
  }
}
</script>
