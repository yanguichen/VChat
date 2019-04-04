<style lang="stylus">
@media screen and (max-width: 1546px)
    .leftMenu
        .content
            .tag
                .tip
                    //display block !important
                    .tipLink
                        //display block !important
                        .tipPic
                            margin-right 0 !important

                    .tipClick
                        .tipPic
                            margin-right 0 !important

@media screen and (max-width: 1260px)
    .leftMenu
        .content
            .tag
                .tip
                    display block !important

                    .tipLink
                        display block !important

                        .tipPic
                            display block !important

                        .tipWord
                            display block !important

                    .tipClick
                        display block !important

                        .tipPic
                            display block !important

                        .tipWord
                            display block !important

@media screen and (max-width: 1260px)
    .leftMenu
        .content
            .pic
                img
                    width 100% !important

@media screen and (max-width: 637px)
    .leftMenu
        .content
            .tag
                .tip
                    .tipLink
                        .tipWord
                            display none !important

                    .tipClick
                        .tipWord
                            display none !important

.leftMenu
    width 100%
    //min-height 460px
    height 100%
    //margin-right 10px
    float left
    border-right 2px solid #eee
    border-radius 15px
    background-color #fff

    .content
        width 100%

        .pic
            width 100%
            height 90px
            text-align center
            line-height 90px

            img
                vertical-align middle

        .tag
            height 60px

            .tip
                width 100%
                display flex
                justify-content center

                .tipLink
                    padding-top 18px
                    display flex
                    align-items center

                    .tipPic
                        margin-right 20px
                        line-height 24px

                    .tipWord
                        height 100%
                        font 15px '微软雅黑'
                        white-space nowrap
                        text-overflow ellipsis
                        overflow hidden

                .tipClick
                    padding-top 18px
                    display flex
                    align-items center

                    .tipPic
                        margin-right 20px
                        line-height 24px

                    .tipWord
                        height 100%
                        font 15px '微软雅黑'
                        color #2e70ef
                        white-space nowrap
                        text-overflow ellipsis
                        overflow hidden

        .tag:hover
            background-color #f7faff
</style>
<template>
    <div class="leftMenu">
        <div id="content" class="content">
            <div class="pic"><img :src="pic" alt=""></div>
            <div class="tag" v-for=" (item,index) in items ">
                <div class="tip" :title="item.item">
                    <div class="link" :class="item.isHover? 'tipClick':'tipLink'" @click="tipClick(index)"><img class="tipPic" :src="item.isHover?item.pic2:item.pic1"
                            alt=""><span class="tipWord">{{ item.item }}</span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pic: require("@/assets/icons/leftMenu/pic2.png"),
            items: [
                {
                    item: "我的好友",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/2.png"),
                    pic2: require("@/assets/icons/leftMenu/2-1.png")
                },
                {
                    item: "寻找房间",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/3.png"),
                    pic2: require("@/assets/icons/leftMenu/3-1.png")
                },
                {
                    item: "创建房间",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/5.png"),
                    pic2: require("@/assets/icons/leftMenu/5-1.png")
                }
            ],
            height: document.body.clientHeight - 99,
            interval: ""
        };
    },
    created() {
        this.formatStr();
    },
    mounted() {
        // this.interval = setInterval(this.getHeight, 500);
    },
    destroyed() {
        // clearInterval(this.interval);
    },
    methods: {
        tipClick: function(index) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].isHover = false;
            }
            this.items[index].isHover = true;
            this.$root.bus.$emit("routeChange", index);
        },
        // getHeight: function() {
        //     this.height = document.body.clientHeight - 99 + "px";
        //     var leftMenu = document.getElementById("content");
        //     leftMenu.style.height = this.height;
        // },
        //格式化左侧菜单字符固定长度为5，不足用空格补齐
        formatStr: function() {
            for (var i = 0; i < this.items.length; i++) {
                if (this.items[i].item.length !== 4) {
                    var len = this.items[i].item.length;
                    for (var j = 0; j < 4 - len; j++) {
                        this.items[i].item =
                            this.items[i].item + "\xa0\xa0\xa0";
                    }
                }
                //
            }
        }
    }
};
</script>