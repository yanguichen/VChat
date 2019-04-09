<style lang="stylus">
.homeBody
    height 90%

    .left
        float left
        height 100%
        background-color #CCCCCC

    .center 
        width 120px
        float left
        background-color #f0f0f4

        height 100%

    .right
        float top
        height 100%
        width 100%
        padding 7px 10px 7px 165px
        background-color #f3f9f1
</style>

<template>
    <div id="homeBody" class="homeBody">
        <div class="left">
        <leftMenu />
        </div>
        <div class="center">
          <centerMenu/>
        </div>
        <div class="right">
        <rightMenu />
        </div>
    </div>
</template>

<script>
import centerMenu from '@/components/body/menu/centerMenu.vue'
import leftMenu from '@/components/body/menu/leftMenu.vue'
import rightMenu from '@/components/body/menu/rightMenu.vue'
export default {
  components: {
    leftMenu,
    centerMenu,
    rightMenu
  }
}
</script>
