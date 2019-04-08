<style  lang='stylus'>
.topmenu
    width 100%
    min-height 50px
    height 5%
    background-color #6699CC

    .logo
        display inline-block 
        width 200px 
        height 100%
        margin-left 5px
        .log
            display flex
            align-items center
            height 100%

            span
                font 16px '微软雅黑'
                color #fff


    .logMsg
        // display inline-block 
        width 105px
        float right
        .log
            display flex
            height 50px
            align-items center
            justify-content flex-end
            .logList 
                display flex 
                align-items center 
                justify-content center
                .username
                    margin-right 2px
                    color #fff
                .userPic
                    margin-right 5px
    
    .getMsg 
        float right
        
        .word 
            height 50px
            display flex 
            align-items center 
            justify-content center
            color #fff
        // dispaly inline-block
            
    .shelter
        position fixed
        top 0
        right 0
        width 100%
        height 100%
        background-color #F5F5F5
        opacity 0.5
        z-index 998

    .msgFrame
        position fixed
        top 0
        right 0
        width 100%
        height 100%
        display flex
        align-items center
        justify-content center
        z-index 999
</style>

<template>
    <div class="topmenu">
        <div class="logo">
            <div class="log">
                <img src="@/assets/icons/head/log.png" />
                <span style="cursor:default">网上交友平台</span>
            </div>
        </div>
        <!-- <Col span="4" class="community link">
        <div @click="change(1)">社区</div>
        </Col>
        <Col span="4" class="mycom link">
        <div @click="change(2)">我的社区</div>
        </Col> -->

        <div class="logMsg">
        <!-- <span class="sign link" v-show="!isLog">登陆</span> -->
        <Dropdown class="log link" placement="right-start" trigger="click" @on-click="selectTypeAction">
            <a href="javascript:void(0)" class="logList">
                <img class="userPic link" alt="" :src="pic" />
                <span class="username">{{ username }}</span>
                <Icon type="ios-arrow-down" size="18" color="#fff"/>
            </a>
            <DropdownMenu slot="list">
                <DropdownItem name="msg">个人信息</DropdownItem>
                <DropdownItem name="logOut">退出登录</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        </div>
        <div class="getMsg">
            <span class="word"><Icon type="ios-mail-outline" size="20" /></span>
        </div>
        <!-- 遮罩层 -->
        <div class="shelter" v-show="isShowMsg"></div>
        <div class="msgFrame" v-show="isShowMsg">
            <!-- <div class="topFrame">
                <span class="msg">个人信息</span>
                <span class="closeMsg" @click="closeMsg">关闭</span>
            </div> -->
            <changeMsg :onClose="closeMsg" />
        </div>

    </div>
</template>

<script>
import changeMsg from "@/components/head/changeMsg.vue";
import { delCookie } from "@/assets/js/cookie.js";
export default {
    data() {
        return {
            username:"Ryan",
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
