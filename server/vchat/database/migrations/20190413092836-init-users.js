'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    const { INTEGER, VARCHAR, STRING } = Sequelize;

    await queryInterface.createTable('user', {
      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      username: STRING(30),
      userid: STRING(30),
      age: INTEGER,
      attentionUser: VARCHAR,
      attentionChatroom: VARCHAR,
      gender: STRING(5),
      phone: STRING(11),
      email: STRING(30),
      interest: VARCHAR
    });

    await queryInterface.createTable('chatroom', {
      id: {type: INTEGER, primaryKey: true, autoIncrement: true},
      chatroomid: STRING(30),
      chatroomname: STRING(30),
      description: VARCHAR,
      currentUser: VARCHAR,
    });
  },

  down: (queryInterface) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('user');
    await queryInterface.dropTable('chatroom');
  }
};
