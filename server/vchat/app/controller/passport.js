// 登陆
"use strict";

const shortidGenerator = require("shortid").generate;
const Controller = require("egg").Controller;

class PassportController extends Controller {
  async login() {
    /**
     * post
     * 登陆
     * 如果 账号 + 密码 正确，则返回 200
     * 否则 返回 401
     */
    const ctx = this.ctx;
    const { userid, password } = ctx.request.body;
    const user = await ctx.model.User.findOne({
      userid
    });
    if (!user || user.password !== password) {
      ctx.status = 401;
      return;
    }
    ctx.status = 200;
    ctx.body = {
      userid: user.userid,
      username: user.username,
      age: user.age,
      attentionUser: user.attentionUser,
      attentionChatroom: user.attentionChatroom,
      gender: user.gender,
      phone: user.phone,
      email: user.email,
      hobby: user.hobby
    };
  }
  async register() {
    /**
     * 注册
     */
    const ctx = this.ctx;
    const userid = shortidGenerator();
    const { username, password } = ctx.request.body;
    const user = await ctx.model.User.create({
      username,
      userid,
      password
    });

    console.log(user);

    // TODO: 记得 token
    ctx.status = 200;
    ctx.body = userid;
  }
}

module.exports = PassportController;
