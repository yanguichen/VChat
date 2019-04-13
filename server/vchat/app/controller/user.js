// 用户信息
"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  async getInfo() {
    /**
     * 检测是否是当前用户
     * 是的话返回 公开信息 + 非公开信息
     */
    const { ctx } = this;
    ctx.body = "login";
  }
  async modifyInfo() {
    /**
     * 检测是否是当前用户
     * 是的话，修改数据库
     */
  }
  async setOftenUsedRoom() {
    /**
     * 设置常用聊天室
     */
  }
  async setFrequentContact() {
    /**
     * 设置常联系好友
     */
  }
}

module.exports = UserController;
