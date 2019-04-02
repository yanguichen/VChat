<style lang="stylus">
.homeBody
    .left
        float left
        width 10%

    .right
        float left
        width 90%
</style>

<template>
    <div id="homeBody" class="homeBody">
        <Row>
            <Col class="left">
            <leftMenu />
            </Col>
            <Col class="right">
            <rightMenu />
            </Col>
        </Row>
        <footerMenu />
    </div>
</template>

<script>
import leftMenu from "@/components/body/menu/leftMenu.vue";
import rightMenu from "@/components/body/menu/rightMenu.vue";
import footerMenu from "@/components/footer/footer.vue";
export default {
    components: {
        leftMenu,
        rightMenu,
        footerMenu
    }
};
</script>
