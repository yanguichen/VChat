<style  lang='stylus'>
.topmenu
    width 100%
    height 50px
    background-color #778fe6

    .log
        display flex
        align-items center
        justify-content center
        width 220px
        height 50px
        font 18px '微软雅黑'
        color #ffffff

    .community
        width 100px
        font 14px '微软雅黑'
        color #ffffff
        text-align center

        div
            line-height 50px

    .mycom
        width 100px
        font 14px '微软雅黑'
        color #ffffff
        text-align center

        div
            line-height 50px

    .pic
        float right
        width 70px

        .logImg
            a
                display flex
                height 50px
                align-items center
                justify-content center

    .shelter
        position fixed
        width 100%
        height 100%
        background-color #F5F5F5
        opacity 0.5
        z-index 998

    .msgFrame
        position fixed
        width 100%
        height 100%
        display flex
        align-items center
        justify-content center
        z-index 999
</style>

<template>
    <Row class="topmenu">
        <Col span="4" class="log"><img src="@/assets/icons/head/log.png" />
        <span style="cursor:default">网上交友平台</span>
        </Col>
        <Col span="4" class="community link">
        <div @click="change(1)">社区</div>
        </Col>
        <Col span="4" class="mycom link">
        <div @click="change(2)">我的社区</div>
        </Col>

        <Col span="4" class="pic">
        <!-- <span class="sign link" v-show="!isLog">登陆</span> -->
        <Dropdown class="logImg" trigger="click" @on-click="selectTypeAction">
            <a href="javascript:void(0)">
                <img class="touxiang link" alt="" :src="pic" />
            </a>
            <DropdownMenu slot="list">
                <DropdownItem name="msg">个人信息</DropdownItem>
                <DropdownItem name="logOut">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </Col>
        <!-- 遮罩层 -->
        <div class="shelter" v-show="isShowMsg"></div>
        <div class="msgFrame" v-show="isShowMsg">
            <!-- <div class="topFrame">
                <span class="msg">个人信息</span>
                <span class="closeMsg" @click="closeMsg">关闭</span>
            </div> -->
            <changeMsg :onClose="closeMsg" />
        </div>

    </Row>
</template>

<script>
import changeMsg from "@/components/head/changeMsg.vue";
import { delCookie } from "@/assets/js/cookie.js";
export default {
    data() {
        return {
            isShowMsg: false,
            pic: require("@/assets/icons/head/pic1.png")
        };
    },
    components: {
        changeMsg
    },
    methods: {
        change(index) {
            this.$root.bus.$emit("routeChange", index);
        },
        selectTypeAction(name) {
            switch (name) {
                case "msg": {
                    this.showMsg();
                    break;
                }

                case "logOut": {
                    this.logout();
                }
            }
        },
        showMsg() {
            this.isShowMsg = true;
        },
        closeMsg() {
            this.isShowMsg = false;
        },
        logout() {
            console.log("退出登录");
            delCookie("username");
            this.$router.push("/");
        }
    }
};
</script>
