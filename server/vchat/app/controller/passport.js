// 登陆
"use strict";

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
    
  }
  async logout() {
    /**
     * 登出
     */
  }
  async register() {
    /**
     * 注册
     */
  }
}

module.exports = PassportController;
