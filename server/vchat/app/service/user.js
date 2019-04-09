const Service = require("egg").Service;

class UserService extends Service {
  /**
   * 从数据库中读取用户信息
   */
  async selectUserInfo() {}
  /**
   * 新增用户
   */
  async addUser() {}
  /**
   * 修改用户信息
   */
  async updateUserInfo() {}
  /**
   * 新增好友关系
   */
  async addRelation() {}
  /**
   * 删除好友关系
   */
  async delRelation() {}
  /**
   * 查询好友关系
   */
  async selectRelation() {}
}
/**
 * id
 * username
 * userid
 * password
 * attentionUser: {
 *  userIds: [],
 * }
 * attentionChatroom: {
 *  chatroomIds: [],
 * }
 * gender
 * phone
 * email
 * interest
 */

module.exports = UserService;
