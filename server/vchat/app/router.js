"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, io } = app;

  router.post("/login", controller.passport.login);
  router.post("/register", controller.passport.register);

  router.post("/userinfo", controller.user.getInfo);
  router.post("/modify-userinfo", controller.user.modifyInfo);
  router.post("/set-frequent-contact", controller.user.setFrequentContact);
  router.post("/set-often-used-room", controller.user.setOftenUsedRoom);

  router.post("/create-room", controller.chatroom.createRoom);
  router.post("/join-room", controller.chatroom.joinRoom);
  router.post("/search-room", controller.chatroom.searchRoom);

  io.of("/").route("exchange", io.controller.nsp.exchange);
};
