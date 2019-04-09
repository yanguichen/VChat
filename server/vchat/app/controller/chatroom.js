"use strict";

const Controller = require("egg").Controller;

class ChatroomController extends Controller {
  async createRoom() {
    /**
     * 创建聊天室
     */
  }
  async joinRoom() {
    /**
     * 进入聊天室，
     */
  }
  async searchRoom() {
    /**
     * 搜索聊天室
     */
    const ctx = this.ctx;
    const chatroomId = ctx.params.chatroomId;
    const chatroom = await ctx.service.chatroom.searchRoom(chatroomId);
    ctx.body = chatroom;
  }
  async setOftenUsedRoom() {
    /**
     * 设为常用聊天室
     */
  }
}
