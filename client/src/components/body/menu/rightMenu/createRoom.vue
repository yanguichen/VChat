<style lang="stylus">
.createRoom
    height 100% 
    width 100%
    // border 1px solid #ccc
    max-width 450px
    position relative
    background-color #f5f5f5
    box-shadow: 2px -2px 5px #888888;
    .title 
        display flex 
        align-items center
        padding-left 10px
        border-top 1px solid #ccc
        border-left 1px solid #ccc
        border-right 1px solid #ccc
        height 6%
        background-color #dbdbdb
    .content
        height 70%
        border 1px solid #ccc
    .sendMsg 
        width 100%
        height 24%
        position absolute
        bottom 0
        display flex 
        justify-content center
        border-bottom 1px solid #ccc
        border-left 1px solid #ccc
        border-right 1px solid #ccc
        .msg 
            border 0
            resize:none
            outline: none;
            padding 5px
            width 100%
            height 60%
        .send 
            width 100%
            position absolute 
            bottom 0px
            height 40%
            background-color #fff
            .sendBtn
                float right
                margin-right 4px
</style>


<template>
    <div class="createRoom">
        <div class="title"><b>{{ roomMsg.roomName }}</b></div>
        <div class="content"></div>
        <div class="sendMsg">
            <textarea id="msg" class="msg"></textarea>
            <div class="send"><Button class="sendBtn" type="primary" @click="send" >发送</Button></div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    data() {
        return {
            roomMsg:{
                roomId:"",
                roomName:"默认",
                roomDisc:"",
                roomNumber:0,
            },
        };
    },
    watch:{
        roomMsg:{
            handler(val, oldVal){
                console.log("b.c: "+val.roomName, oldVal.roomName);
            },
            deep:true
        }
    },
    mounted:function() {
    },
    methods: {
        send(){
        }
    }
};
</script>
