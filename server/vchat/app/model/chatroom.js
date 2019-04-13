module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const Chatroom = app.model.define("chatroom", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    chatroomid: STRING(30),
    chatroomname: STRING(30),
    description: STRING,
    currentUser: {
      type: STRING,
      defaultValue: ""
    }
  });
  return Chatroom;
};
