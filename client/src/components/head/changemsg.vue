<style lang="stylus">
.changemsg
    width 400px
    height auto
    padding 25px
    background-color #fff
    border 1px solid #fff
    border-radius 25px

    .card
        height 100%

        .myMsg
            width 100%

            div
                width 100%

                span
                    font-size 14px
                    font-family 'Microsoft YaHei'
                    line-height 30px

                    b
                        display inline-block
                        width 25%
                        font-size 14px
                        font-family 'Microsoft YaHei'
                        line-height 30px

        .changeMsg
            .changeForm
                div
                    //display flex
                    //align-items center
                    line-height 35px

                    .word
                        display inline-block
                        width 100px

                        b
                            font-size 14px
                            font-family 'Microsoft YaHei'

                    span
                        font-size 14px
                        font-family 'Microsoft YaHei'
</style>

<template>
    <div class="changemsg">
        <Tabs type="card" class="card">
            <TabPane label="个人信息" class="myMsg">
                <div class="name"><span><b>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名:</b></span><span>{{ userMsg.name }}</span></div>
                <div class="sex"><span><b>性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别:</b></span><span>{{ userMsg.sex }}</span></div>
                <div class="mdate"><span><b>出生日期:</b></span><span>{{ userMsg.mdate }}</span></div>
                <div class="age"><span><b>年&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp龄:</b></span><span>{{ userMsg.age }}</span></div>
                <div class="mobile"><span><b>手机号码:</b></span><span>{{ userMsg.mobile }}</span></div>
                <div class="email"><span><b>邮箱地址:</b></span><span>{{ userMsg.email }}</span></div>
                <div class="hobby"><span><b>兴趣爱好:</b></span>
                    <Card :padding=0 :dis-hover="true"><span>{{ userMsg.hobby }}</span></Card>
                </div>
                <div class="introduction"><span><b>个人简介:</b></span>
                    <Card :padding=0 :dis-hover="true"><span>{{ userMsg.introduction }}</span></Card>
                </div>
            </TabPane>
            <TabPane label="修改信息" class="changeMsg">
                <form class="changeForm">
                    <div><span class="word"><b>姓&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp名:</b></span><Input placeholder="请输入你的大名" style="width: 200px"
                            v-model="newMsg.name" /></div>
                    <div><span class="word"><b>性&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp别:</b></span>
                        <RadioGroup v-model="newMsg.sex">
                            <Radio label="男" style="margin:0 40px 0 20px">
                                <Icon type="md-man" size=16 />
                                <span>男</span>
                            </Radio>
                            <Radio label="女">
                                <Icon type="md-woman" size=16 />
                                <span>女</span>
                            </Radio>
                        </RadioGroup>
                    </div>
                    <div><span class="word"><b>出生日期:</b></span>
                        <DatePicker type="date" :clearable="false" style="width: 200px" v-model="newMsg.mdate" @on-change="formatDate"></DatePicker>
                    </div>
                    <div><span class="word"><b>年&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp龄:</b></span><span>{{ newMsg.age }}</span></div>
                    <div><span class="word"><b>手机号码:</b></span><Input placeholder="请输入你的手机号码" style="width: 200px" v-model="newMsg.mobile" /></div>
                    <div><span class="word"><b>邮箱地址:</b></span><Input placeholder="请输入你的邮箱地址" style="width: 200px" v-model="newMsg.email" /></div>
                    <div><span class="word"><b>兴趣爱好:</b></span><Input v-model="newMsg.hobby" type="textarea" placeholder="请输入你的兴趣爱好..." /></div>
                    <div><span class="word"><b>个人简介:</b></span><Input v-model="newMsg.introduction" type="textarea" :rows="4" placeholder="请简单的介绍自己..." /></div>
                </form>
            </TabPane>
            <span class="
                    link" @click="closeMsg" size="small" slot="extra">关闭</span>
        </Tabs>
    </div>
</template>


<script>
export default {
    data() {
        return {
            userMsg: {
                name: "Ryan",
                sex: "男",
                mdate: "1997/03/23",
                age: "23",
                mobile: "13798234727",
                email: "1774138718@qq.com",
                hobby: "毽球",
                introduction: "小帅哥一枚"
            },            
            newMsg: {
                name: "Ryan",
                sex: "男",
                mdate: "1997/03/23",
                age: "23",
                mobile: "13798234727",
                email: "1774138718@qq.com",
                hobby: "毽球",
                introduction: "小帅哥一枚"
            },
        };
    },
    props: { onClose: { type: Function, default: null } },
    mounted() {
        this.formatDate();
    },
    methods: {
        closeMsg() {
            if (this.onClose) {
                this.onClose();
            }
        },
        formatDate() {
            var nYear = new Date().getFullYear();
            var mYear = this.newMsg.mdate.getFullYear();
            this.newMsg.age = nYear - mYear;
            var mMonth = this.newMsg.mdate.getMonth() + 1;
            var mDate = this.newMsg.mdate.getDate();
            this.newMsg.mdate = [mYear, mMonth, mDate].join("-");
        }
    }
};
</script>
