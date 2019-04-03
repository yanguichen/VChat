<style lang="stylus">
.friend
    //padding 10px 10px 0 10px
    .word
        margin-bottom 10px

    #friendTable
        min-height 419px
</style>


<template>
    <div class="friend">
        <h3 class="word">我的好友</h3>
        <Table id="friendTable" :height="screenHeight" :columns="columns1" :data="data1"></Table>
    </div>
</template>
<script>
export default {
    methods: {
        getHeight: function() {
            this.screenHeight = document.body.clientHeight - 140;
        }
    },
    mounted() {
        this.interval = setInterval(this.getHeight, 500);
    },
    destroyed() {
        clearInterval(this.interval);
    },
    data() {
        return {
            screenHeight: document.body.clientHeight - 140,
            interval: "",
            columns1: [
                {
                    title: "姓名",
                    key: "name"
                },
                {
                    title: "性别",
                    key: "sex"
                },
                {
                    title: "出生日期",
                    key: "mdate"
                },
                {
                    title: "年龄",
                    key: "age"
                },
                {
                    title: "手机号码",
                    key: "mobile"
                },
                {
                    title: "邮箱地址",
                    key: "email"
                },
                {
                    title: "兴趣爱好",
                    key: "hobby"
                },
                {
                    title: "个人简介",
                    key: "introduction"
                }
            ],
            data1: [
                {
                    name: "John Brown",
                    sex: "男",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Jim Green",
                    sex: "男",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Joe Black",
                    sex: "女",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Jon Snow",
                    sex: "女",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "John Brown",
                    sex: "女",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Jim Green",
                    sex: "男",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Joe Black",
                    sex: "男",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                },
                {
                    name: "Jon Snow",
                    sex: "女",
                    mdate: "2016-10-03",
                    age: 18,
                    mobile: "",
                    email: "",
                    hobby: "",
                    introduction: ""
                }
            ]
        };
    }
};
</script>