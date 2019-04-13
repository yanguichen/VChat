module.exports = app => {
  const { STRING, INTEGER } = app.Sequelize;
  const User = app.model.define("user", {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING(30),
    userid: STRING(30),
    age: {
      type: STRING(30),
      defaultValue: ""
    },
    attentionUser: {
      type: STRING(30),
      defaultValue: ""
    },
    attentionChatroom: {
      type: STRING,
      defaultValue: ""
    },
    gender: {
      type: STRING(30),
      defaultValue: ""
    },
    phone: {
      type: STRING(30),
      defaultValue: ""
    },
    email: {
      type: STRING(30),
      defaultValue: ""
    },
    interest: {
      type: STRING,
      defaultValue: ""
    }
  });
  return User;
};
