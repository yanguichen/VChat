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
        
    .panel 
        .content
            padding-left 18px
            background-color #e9e7ef
            .lists 
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
        <div class="friend link" @click="showLists"><Icon :type="iconType" size=13 /><b class="word">我的好友</b></div>
        <div class="panel" v-show="isShowLists">
            <div class="content">
                <div class="lists" v-for=" list in lists " :key="list">
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
            iconType:"ios-arrow-forward",
            isShowLists:false,
            lists:["张三","李四"]
        }
    },
    methods:{
        showLists(){
            this.isShowLists = !this.isShowLists;
        }
    }
}
</script>
