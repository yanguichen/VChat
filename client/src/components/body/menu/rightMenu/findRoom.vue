<style lang="stylus">
.findRoom 
    width 100%
    height 100%
    .title 
        padding-bottom 7px
        b 
            font-size 14px
    #form 
        display inline-block
        .search 
            margin-left 30px
    .addRoom 
        position absolute 
        bottom 8px
        right 3px
        z-index 1
    .lists 
        margin 8px 0 4px 0
// .modal
    .chatName
        .roomName
            // display block
            margin-right 20px
    .chatDisc
        margin-top 10px
        display flex 
        align-items flex-start
        .roomDisc
            margin-right 20px
</style>

<template>
    <div class="findRoom">
        <div class="title"><b>聊天室</b></div>
        <form id="form" action="">
            <Input class="input" v-model="searchList" icon="ios-search" placeholder="搜索聊天室" style="width: 250px" @on-click="showLists"/>
            <Button class="search" type="primary" @click="showLists" >搜索</Button>
        </form>
        <span class="addRoom link" @click="showAddRoom"><Icon type="ios-add-circle" size="34" title="创建聊天室"/></span>
        <div class="lists"><b>聊天室列表</b></div>
        <Table stripe border  height="250" size="small" no-data-text="通过搜索获取聊天室列表" :columns="columns" :data="filterLists" ></Table>
        <Modal class="modal"
        v-model="isShowAddRoom"
        title="创建聊天室"
        @on-ok="ok">
        <div class="chatName"><span class="roomName">聊天室名称</span><Input id="roomName" v-model="roomName" placeholder="聊天室名称" style="width: 250px"/></div>
        <div class="chatDisc"><span class="roomDisc">聊天室描述</span><Input id="roomDisc" v-model="roomDisc" type="textarea" :rows="4" placeholder="聊天室描述" style="width: 250px"/></div>
    </Modal>
    </div>
</template>

<script>
import Axios from "@/axios/axios.js" 
export default {
    data() {
        return {
            Axios:Axios.getAxios,
            roomName:"",
            roomDisc:"",
            columns: [
                    {
                        title: '序号',
                        key: 'id',
                        align:'center',
                        width:"60px",
                        filter: {
                        type: 'Input' //输入框过滤
                        }
                    },
                    {
                        title: '聊天室名称',
                        key: 'name',
                        align:'center',
                        width:"120px"

                    },
                    {
                        title: '描述',
                        key: 'disc',
                        align:'center'
                    },
                    {
                        title: '人数',
                        key: 'number',
                        align:'center',
                        width:"80px"
                    },
                    {
                        title: '加入',
                        key: 'enter',
                        align:'center',
                        width:"120px",
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                    },
                                    on: {
                                        click: () => {
                                            // this.index = params.index;
                                            this.show(params);
                                        }
                                    }
                                }, '加入')
                                ])
                            }
                        }
                ],
                lists: [
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"陈燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂陈",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"hahahahahaha",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"陈燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂陈",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"hahahahahaha",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"陈燕桂",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"燕桂陈",
                        number:1,
                        userId:""
                    },
                    {
                        id:"1",
                        name:"ryan",
                        disc:"hahahahahaha",
                        number:1,
                        userId:""
                    },
                ],
                isShowAddRoom:false,
                isSearch:false,
                searchList:"",
                filterLists:[],
        }
    },
    mounted(){
    },
    methods: {
        //搜索聊天室
        showLists(){
            var ts = this;
            //调用后台搜索聊天室接口，提供一个字符串，返回json格式的聊天室信息
            ts.Axios.post("",ts.searchList).then((response)=>{
                    console.log(response);
            });
            // for(list in this.lists){
            //     // console.log(this.lists[list].disc);
            //     if(this.lists[list].disc.search(patt)>-1){
            //         this.filterLists.push(this.lists[list]);
            //     }
            // }
        },
        //加入聊天室
        show (params) {
            this.$Modal.confirm({
                title: '确定加入',
                content: `聊天室名称：${this.lists[params.index].name}<br>人数：${this.lists[params.index].number}<br>描述:${this.lists[params.index].disc}`,
                cancelText:"取消",
                onOk:function(){
                    var ts = this;
                    console.log(params);
                    var roomname = params.row.name;
                    //调用接口，加入指定id的聊天室
                    // ts.Axios.post("",{
                    //     params:{
                    //         chatroomid : params.row.id
                    //     }
                    // }).then((response)=>{
                    //         console.log(response);
                    // });
                    this.$root.bus.$emit("routeChange", 1);
                    // console.log(params.row.id)
                }
            })
        },
        showAddRoom(){
            this.isShowAddRoom = true;
        },
        closeAddRoom(){
            this.isShowAddRoom = false;
        },
        //创建聊天室，向后台提供聊天室名称及描述，跳转到聊天室界面
        ok(){
            var ts= this;
            var roomname = ts.roomName;
            var roomdisc = ts.roomDisc;
            console.log("聊天室名称："+roomname + "聊天室描述：" + roomdisc); 
            //调用后台接口
            // var params = {
            //     chatroomname:roomname,
            //     description:rootdisc
            // }
            // ts.Axios.post("",{params:params}).then((response)=>{
                    // console.log(response);
            // });
            this.$root.bus.$emit("routeChange", 1);
        },
    },
}
</script>
