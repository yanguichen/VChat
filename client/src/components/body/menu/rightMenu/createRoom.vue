<style lang="stylus">
.createRoom
    height 100% 
    width 100%
    // border 1px solid #ccc
    max-width 450px
    box-shadow: 2px -2px 5px #888888;
    .title 
        display flex 
        align-items center
        justify-content center
        padding-left 10px
        // border-top 1px solid #ccc
        // border-left 1px solid #ccc
        // border-right 1px solid #ccc
        height 8%
        width 100%
        background-color #dbdbdb
        // text-align center
        // .roomName
        //     text-align center
            // position relative
            // left 0px
    .roomBox 
        position relative
        // display inline-block
        float left
        width 100%
        max-width 450px
        height 92%
        background-color #fff
        .listsBox
            // display inline-block 
            float left
            width 15%
            height 100%
            background-color #fff
            border-right 1px solid #ccc
            .lists
                margin-left 5px
        .content
            height 72%
            width 85%
            float left
            
        .sendMsg 
            width 85%
            height 20%
            float top
            border-top 1px solid #ccc
            // position positive
            // bottom 0
            // float bottom
            display flex 
            justify-content center
            // border-bottom 1px solid #ccc
            // border-left 1px solid #ccc
            // border-right 1px solid #ccc
            .msg 
                border 0
                resize:none
                outline: none;
                padding 5px
                width 100%
                // height 60%
        .send 
            width 100%
            height 8%
            float top
            // position absolute 
            // bottom 0px
            // height 40%
            background-color #fff
            .sendBtn
                float right
                margin-right 4px
</style>


<template>
    <div class="createRoom">
        <div class="title"><span class="roomName"><b>{{ roomMsg.roomName }}</b></span></div>
        <div class="roomBox">
            <div class="listsBox">
                <Input class="input" v-model="searchList" size="small"  icon="ios-search" style="width: auto"/>
                <div class="lists">
                    <div v-for=" (list,index) in filterLists " :key="index">{{ list }}</div>
                </div>
            </div>
            <div class="content"></div>
            <div class="sendMsg">
                <textarea id="msg" class="msg"></textarea>
            </div>
            <div class="send"><Button class="sendBtn" type="primary" size="small" @click="send" >发送</Button></div>
        </div>
    </div>
</template>
<script>
import Axios from "@/axios/axios.js" ;
export default {
    components: {},
    data() {
        return {
            isShowDrawer:false,
            isSearch:false,
            searchList:"",
            roomMsg:{
                roomId:"",
                roomName:"默认",
                roomDisc:"",
                roomNumber:0,
                roomUser:["a","b"],
            },
            filterLists:[],
        };
    },
    watch:{
        // roomMsg:{
        //     handler(val, oldVal){
        //         console.log("b.c: "+val.roomName, oldVal.roomName);
        //     },
        //     deep:true
        // }
        searchList(newVal,oldVal){
            this.showLists();
        }
        
    },
    mounted:function() {
        this.filterLists = this.roomMsg.roomUser;
    },
    methods: {
        send(){
        },
        showLists(){
            // console.log(this.searchList);
            if(this.searchList !== ""){
                this.isSearch = true;
                var patt = new RegExp(this.searchList, 'i');
                var list;
                this.filterLists=[];
                // console.log(patt);
                for(list in this.roomMsg.roomUser){
                    // console.log(this.lists[list].disc);
                    if(this.roomMsg.roomUser[list].search(patt)>-1){
                        this.filterLists.push(this.roomMsg.roomUser[list]);
                    }
                }
                console.log(this.filterLists);
                if(this.filterLists.length == 0){
                    this.filterLists.push("暂无数据");
                }
            }else{
                // this.isSearch = false;
                this.filterLists = this.roomMsg.roomUser;
            }
        },
    }
};
</script>
