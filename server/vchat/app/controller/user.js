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
  }
  async modifyInfo() {
    /**
     * 检测是否是当前用户
     * 是的话，修改数据库
     */
    const ctx = this.ctx;
    const { info } = ctx.request;
    const user = await ctx.model.User.findOne({
      userid: info.userid
    });
    if (!user) {
      ctx.status = 404;
      return;
    }
    await user.update({
      ...info
    });
    ctx.status = 200;
  }
  async setOftenUsedRoom() {
    /**
     * 设置常用聊天室
     */
    const ctx = this.ctx;
    const { userid, chatroomid } = ctx.request.body;
    const user = ctx.model.User.findOne({
      userid
    });
    if (!user) {
      ctx.status = 404;
      return;
    }
    const chatroomids = JSON.parse(user.attentionChatroom);
    if (chatroomids.indexOf(chatroomid) !== -1) {
      ctx.status = 404;
      return;
    }

    chatroomids.unshift(chatroomid);

    await user.update({
      attentionChatroom: JSON.stringify(chatroomids)
    });

    ctx.status = 200;
  }
  async setFrequentContact() {
    /**
     * 设置常联系好友
     */
    const ctx = this.ctx;
    const { userid, targetid } = ctx.request.body;
    const user = await ctx.model.User.findOne({
      userid
    });
    if (!user) {
      ctx.status = 404;
      return;
    }

    const attentionUser = JSON.parse(user.attentionUser);
    if (attentionUser.indexOf(targetid) !== -1) {
      ctx.status = 404;
      return;
    }

    attentionUser.push(targetid);
    await user.update({
      attentionUser: JSON.stringify(attentionUser)
    });

    ctx.status = 200;
  }
}

module.exports = UserController;
