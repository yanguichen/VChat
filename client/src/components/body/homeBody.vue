<style lang="stylus">
@media screen and (max-width: 1546px)
    .homeBody
        height 600px !important

@media screen and (max-width: 1260px)
    .homeBody
        height 500px !important

@media screen and (max-width: 637px)
    .homeBody
        height 450px !important

.homeBody
    height 90%
    min-height 450px
    background-color #fff
    border 2px solid #eee
    border-radius 15px

    .left
        float left
        width 10%
        height 100%

    .right
        float left
        width 90%
        height 100%
</style>

<template>
    <Row id="homeBody" class="homeBody">
        <Col class="left">
        <leftMenu />
        </Col>
        <Col class="right">
        <rightMenu />
        </Col>
    </Row>
</template>

<script>
import leftMenu from "@/components/body/menu/leftMenu.vue";
import rightMenu from "@/components/body/menu/rightMenu.vue";
export default {
    components: {
        leftMenu,
        rightMenu
    }
};
</script>
