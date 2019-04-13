"use strict";

const Controller = require("egg").Controller;

class ChatroomController extends Controller {
  async createRoom() {
    /**
     * 创建聊天室
     */
    const ctx = this.ctx;
    const { chatroomname, description } = ctx.request.body;
    const result = await ctx.model.Chatroom.create({
      chatroomname,
      description
    });
    console.log(result);
    ctx.status = 200;
  }
  async joinRoom() {
    /**
     * 进入聊天室，
     */
    const ctx = this.ctx;
    const { userid, chatroomid } = ctx.request.body;
    const chatroom = await ctx.model.Chatroom.findOne({
      where: {
        chatroomid
      }
    });
    const user = await ctx.model.User.findOne({
      where: {
        userid
      }
    });
    if (!chatroom || !user) {
      ctx.status = 404;
      return;
    }
    const currentUser = JSON.parse(chatroom.currentUser);
    if (currentUser.indexOf(userid) !== -1) {
      ctx.status = 404;
      return;
    }
    currentUser.push(userid);
    await chatroom.update({
      currentUser: JSON.stringify(currentUser)
    });
    console.log(chatroom);
    ctx.status = 200;
  }
  async searchRoom() {
    /**
     * 搜索聊天室
     */
    const ctx = this.ctx;
    const { chatroomname } = ctx.request.body;
    const Op = Sequelize.Op;
    const query = {
      where: {
        chatroomname: {
          [Op.like]: `%${chatroomname}%`
        }
      },
      offset: 0
    };
    const result = await ctx.model.Chatroom.findAll(query);
    console.log(result);
  }
}

module.exports = ChatroomController;
