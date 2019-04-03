<style lang="stylus">
.notes
    margin 10px

    .myNotes
        display inline-block
        margin-bottom 10px

    .addNote
        float right
        line-height 30px

    .lists
        background-color #fff
        //border 1px solid #DCDCDC
        padding 10px

        .list
            padding 10px
            border 2px solid #DCDCDC

            .title
                font-size 14px

            .createDate
                line-height 25px

            .noteContent
                padding 5px
                background-color #BBB
                border 1px solid #BBB
                border-radius 5px
                color #fff

    .vertical-center-modal
        display flex
        align-items center
        justify-content center
</style>


<template>
    <div class="notes">
        <h2 class="myNotes">我的日记</h2>
        <span class="addNote" @click="showAdd">
            <Icon type="ios-add" size=35 title="add" /></span>
        <div class="lists" v-for=" item in items">
            <div class="list">
                <div><b class="title">标题：</b><span class="title">{{ item.title }}</span></div>
                <div><b class="createDate">创建日期：</b><span class="createDate">{{ item.date }}</span></div>
                <div><b class="content">日记内容：</b>
                    <div class="noteContent">
                        {{ item.content }}
                    </div>
                </div>
            </div>
        </div>
        <Modal title="新增日记" v-model="isshowAdd" class-name="vertical-center-modal">
            <div><Input placeholder="请输入标题" style="width: 100%" /></div>
            <div><Input type="textarea" :rows="4" placeholder="请输入日记内容" style="width: 100%" /></div>
        </Modal>
    </div>
</template>

<script>
export default {
    data() {
        return {
            nowDate: "",
            isshowAdd: false,
            items: [
                {
                    title: "第一篇日记",
                    date: "2019/04/03",
                    content: "今天很开心"
                },
                {
                    title: "第一篇日记",
                    date: "2019/04/01",
                    content: "今天很开心"
                }
            ]
        };
    },
    mounted() {
        this.formatDate();
    },
    methods: {
        formatDate() {
            var nYear = new Date().getFullYear();
            var nMonth = new Date().getMonth() + 1;
            var nDate = new Date().getDate();
            this.nowDate = [nYear, nMonth, nDate].join("/");
        },
        showAdd() {
            this.isshowAdd = true;
        },
        addNote() {
            this.formatDate();
            this.items.push({
                title: "第一篇日记",
                date: this.nowDate,
                content: "今天很开心"
            });
        }
    }
};
</script>
