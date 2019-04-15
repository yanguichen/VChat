"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, VARCHAR, STRING } = Sequelize;

    await queryInterface.createTable("user", {
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
      hobby: {
        type: STRING,
        defaultValue: ""
      }
    });

    await queryInterface.createTable("chatroom", {
      id: { type: INTEGER, primaryKey: true, autoIncrement: true },
      chatroomid: STRING(30),
      chatroomname: STRING(30),
      description: {
        type: STRING,
        defaultValue: ""
      },
      currentUser: {
        type: STRING,
        defaultValue: ""
      }
    });
  },

  down: async queryInterface => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable("user");
    await queryInterface.dropTable("chatroom");
  }
};
