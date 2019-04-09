<style lang="stylus">
.centerMenu
    .friend
        background-color #aaa
        padding 7px 0 7px 4px
        .word     
            color #000
            -moz-user-select:none;/*火狐*/
            -webkit-user-select:none;/*webkit浏览器*/
            -ms-user-select:none;/*IE10*/
            -khtml-user-select:none;/*早期浏览器*/
            user-select:none;
        
    .panel1 
        .content
            padding-left 18px
            background-color #e9e7ef
            .lists1 
                .list 
                    color #000
                    -moz-user-select:none;/*火狐*/
                    -webkit-user-select:none;/*webkit浏览器*/
                    -ms-user-select:none;/*IE10*/
                    -khtml-user-select:none;/*早期浏览器*/
                    user-select:none;

</style>
<template>
    <div class="centerMenu">
        <div class="friend link" @click="showList1">
            <Icon :type="iconType1" size=14 style="margin-top:-3px" />
            <b class="word">我的好友</b>
            <!-- <Icon type="md-heart-outline" /> -->
        </div>
        <div class="panel1" v-show="isShowList1">
            <div class="content">
                <div class="lists1" v-for=" list in lists1 " :key="list">
                    <div class="list">
                        {{list}}
                    </div>
                </div>
            </div>
        </div>
        <div class="friend link" @click="showList2">
            <Icon :type="iconType2" size=14 style="margin-top:-3px" />
            <b class="word">常用聊天室</b>
            <!-- <Icon type="md-heart-outline" /> -->
        </div>
        <div class="panel1" v-show="isShowList2">
            <div class="content">
                <div class="lists1" v-for=" list in lists2 " :key="list">
                    <div class="list">
                        {{list}}
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
            iconType1:"ios-arrow-forward",
            isShowList1:false,
            lists1:["张三","李四"],
            iconType2:"ios-arrow-forward",
            isShowList2:false,
            lists2:["聊天室1","聊天室2"],
        }
    },
    methods:{
        showList1(){
            this.isShowList1 = !this.isShowList1;
            this.iconType1 = this.iconType1 == "ios-arrow-forward"?"ios-arrow-down":"ios-arrow-forward";
        },
        showList2(){
            this.isShowList2 = !this.isShowList2;
            this.iconType2 = this.iconType2 == "ios-arrow-forward"?"ios-arrow-down":"ios-arrow-forward";
        }
    }
}
</script>
