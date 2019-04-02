<style  lang='stylus'>
.topmenu
    width 100%
    height 50px
    background-color #778fe6

    .log
        text-align center
        margin-top 11px
        width 220px
        height auto

    .new
        width 100px
        font 18px '微软雅黑'
        color #ffffff
        text-align center

        div
            margin-top 13px

    .pattern
        width 100px
        font 14px '微软雅黑'
        color #ffffff
        text-align center

        div
            margin-top 15px

    .parchase
        float right
        text-align center
        line-height 50px
        width 150px

        img
            vertical-align middle

        div
            display inline-block
            height 50px
            padding-bottom -10px
            color #fff

    .pic
        float right
        width 60px
        margin-top 6px
        margin-right 10px
</style>

<template>

    <Row class="topmenu">
        <Col span="4" class="log"><img src="@/assets/icons/head/log.png" /></Col>
        <Col span="4" class="new link">
        <div @click="change(1)">社区</div>
        </Col>
        <Col span="4" class="pattern link">
        <div @click="change(2)">我的社区</div>
        </Col>
        <Col span="4" class="pic"><img alt="" :src="pic" /></Col>
        <Col span="4" class="parchase link">
        <!-- <img src="@/assets/icons/head/parchaseCar.png" />
        <div>购买会员</div> -->
        </Col>

    </Row>
</template>

<script>
import Bus from "@/router/bus.js";
export default {
    data() {
        return {
            pic: require("@/assets/icons/head/pic1.png")
        };
    },
    components: {},
    methods: {
        change(index) {
            this.$root.bus.$emit("routeChage", index);
        }
    }
};
</script>
