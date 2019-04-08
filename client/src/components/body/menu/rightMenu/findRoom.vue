<style lang="stylus">
.findRoom 
    .title 
        padding-bottom 7px
        b 
            font-size 14px
    .lists 
        margin 8px 0 4px 0
</style>

<template>
    <div class="findRoom">
        <div class="title"><b>聊天室</b></div>
        <form id="form" action="">
            <Input icon="ios-search" placeholder="搜索聊天室" style="width: 250px" @on-click="search"/>
            <Button type="primary" @click="search" >搜索</Button>
        </form>
        <div class="lists"><b>聊天室列表</b></div>
        <Table size="small" stripe border  :columns="columns" :data="data" ></Table>
    </div>
</template>

<script>
export default {
    data() {
        return {
        columns: [
                {
                    title: '序号',
                    key: 'id',
                    align:'center',
                    width:"60px"

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
            data: [
                {
                    id:"1",
                    name:"ryan",
                    disc:"",
                    number:1
                }
            ],
        }
    },
    methods: {
        search(){
        },
        show (params) {
            this.$Modal.confirm({
                title: '确定加入',
                content: `聊天室名称：${this.data[params.index].name}<br>人数：${this.data[params.index].number}<br>描述:${this.data[params.index].disc}`,
                cancelText:"取消",
                onOk:function(){
                    //调用接口，加入制定id的聊天室
                    return console.log(params.row.id)
                }
            })
        },
    },
}
</script>
