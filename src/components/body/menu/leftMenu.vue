<style lang="stylus">
.leftMenu
    width 100%
    min-height 460px
    margin-right 10px
    float left
    background-color #fff

    .content
        width 100%

        .pic
            height 160px
            text-align center
            line-height 160px

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
                        margin 0 20px 0 0
                        line-height 24px

                    .tipWord
                        height 100%
                        font 15px '微软雅黑'

                .tipClick
                    padding-top 18px
                    display flex
                    align-items center

                    .tipPic
                        margin 0 20px 0 0
                        line-height 24px

                    .tipWord
                        height 100%
                        font 15px '微软雅黑'
                        color #2e70ef

        .tag:hover
            background-color #f7faff
</style>
<template>
    <div class="leftMenu">
        <div id="content" class="content">
            <div class="pic"><img :src="pic" alt=""></div>
            <div class="tag" v-for=" (item,index) in items ">
                <div class="tip">
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
                    item: "我的图片",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/3.png"),
                    pic2: require("@/assets/icons/leftMenu/3-1.png")
                },
                {
                    item: "我的笔记",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/5.png"),
                    pic2: require("@/assets/icons/leftMenu/5-1.png")
                },
                {
                    item: "我的分享",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/6.png"),
                    pic2: require("@/assets/icons/leftMenu/6-1.png")
                },
                {
                    item: "回收站",
                    isHover: false,
                    pic1: require("@/assets/icons/leftMenu/7.png"),
                    pic2: require("@/assets/icons/leftMenu/7-1.png")
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
        this.interval = setInterval(this.getHeight, 500);
    },
    destroyed() {
        clearInterval(this.interval);
    },
    methods: {
        tipClick: function(index) {
            for (var i = 0; i < this.items.length; i++) {
                this.items[i].isHover = false;
            }
            this.items[index].isHover = true;
            this.$root.bus.$emit("routeChage", index + 3);
        },
        getHeight: function() {
            this.height = document.body.clientHeight - 99 + "px";
            var leftMenu = document.getElementById("content");
            leftMenu.style.height = this.height;
        },
        //格式化左侧菜单字符固定长度为4，不足用空格补齐
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