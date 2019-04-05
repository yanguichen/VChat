"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post("/login", controller.passport.login);
  router.post("/logout", controller.passport.logout);
  router.post("/register", controller.passport.register);
  router.post("/userinfo", controller.user.getInfo);
  router.post("/modify-userinfo", controller.user.modifyInfo);
  router.post("/create-room", controller.chatroom.createRoom);
  router.post("/join-room", controller.chatroom.joinRoom);
  router.post("/search-room", controller.chatroom.searchRoom);
  router.post("/set-often-used-room", controller.chatroom.setOftenUsedRoom);
  router.post("/set-frequent-contact", controller.contact.setFrequentContact);
};
