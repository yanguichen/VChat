<style lang="stylus">
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
