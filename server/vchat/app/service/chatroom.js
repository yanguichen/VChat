const Service = require("egg").Service;

class ChatroomService extends Service {
  /**
   * 创建聊天室
   */
  async createChatroom(chatroomName, description) {
    const shortid = require("shortid");
    const chatroomId = "cid_" + shortid.generate();
    const currentUser = [];
    const result = await this.app.mysql.insert("chatroom", {
      chatroomName,
      chatroomId,
      description,
      currentUser
    });
    if (result.affectedRows === 1) {
      return [, chatroomId];
    }
    return [true];
  }
  /**
   * 搜索聊天室
   * 模糊搜索
   */
  async searchChatroom(chatroomId) {
    const chatroom = await this.app.mysql.get("chatroom", {
      chatroomId: chatroomId
    });
    return chatroom;
  }
  /**
   * 进入聊天室
   */
  async joinChatroom(chatroomId, userId) {}
  /**
   * 离开聊天室
   */
  async leaveChatroom(chatroomId, userId) {}
}

/**
 * 表名区分大小写
 * 关键字不区分大小写
 * id
 * chatroomid
 * chatroomname
 * description
 * currentUser: {
 *  users: [{
 *    username: xxx,
 *    userid: xxx,
 *  }]
 * }
 */

module.exports = ChatroomService;
