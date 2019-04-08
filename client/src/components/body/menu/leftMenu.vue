<style lang="stylus">
.leftMenu
    width 100%
    height 100%
    .interact 
        padding 7px 0 12px 0
        text-align center
        b
            color #1f2531

    .content
        width 100%
        .tag
            .tip
                width 100%
                margin-bottom 15px
                padding 5px 0 5px 0 
                display flex
                justify-content center

                .tipLink
                    padding 0 5px 0 5px
                    display flex
                    align-items center
                    border-left 2px solid #ccc

                    .tipPic
                        line-height 24px


                .tipClick
                    padding 0 5px 0 5px
                    display flex
                    align-items center
                    border-left 2px solid #6699CC

                    .tipPic
                        line-height 24px


            .tipLink:hover
                background-color #aaa
                border-left 2px solid #aaa
</style>
<template>
    <div class="leftMenu">
        <div  class="interact"><b>互动</b></div>
        <div id="content" class="content">
            <div class="tag" v-for=" (item,index) in items " :key="index">
                <div class="tip" :title="item.item">
                    <div class="link" :class="item.isHover? 'tipClick':'tipLink'" @click="tipClick(index)">
                        <!-- <img class="tipPic" :src="item.isHover?item.pic2:item.pic1" alt=""> -->
                        <Icon class="tipPic" :type="item.type" color="#1f2531" :size="item.size"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>
<script>
export default {
    data() {
        return {
            items: [
                // {
                //     item: "我的好友",
                //     isHover: false,
                //     pic1: require("@/assets/icons/leftMenu/2.png"),
                //     pic2: require("@/assets/icons/leftMenu/2-1.png")
                // },
                {
                    item: "聊天室",
                    isHover: true,
                    type:"md-chatboxes",
                    size:24
                },
                {
                    item: "创建聊天室",
                    isHover: false,
                    type:"md-add",
                    size:24
                }
            ],
            height: document.body.clientHeight - 99,
            interval: ""
        };
    },
    created() {
        // this.formatStr();
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
                this.items[i].size = "24";
            }
            this.items[index].isHover = true;
            // this.items[index].size = "28";
            this.$root.bus.$emit("routeChange", index);
        },
        // getHeight: function() {
        //     this.height = document.body.clientHeight - 99 + "px";
        //     var leftMenu = document.getElementById("content");
        //     leftMenu.style.height = this.height;
        // },
        //格式化左侧菜单字符固定长度为5，不足用空格补齐
        // formatStr: function() {
        //     for (var i = 0; i < this.items.length; i++) {
        //         if (this.items[i].item.length !== 4) {
        //             var len = this.items[i].item.length;
        //             for (var j = 0; j < 4 - len; j++) {
        //                 this.items[i].item =
        //                     this.items[i].item + "\xa0\xa0\xa0";
        //             }
        //         }
        //         //
        //     }
        // }
    }
};
</script>