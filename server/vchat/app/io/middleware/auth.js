module.exports = () => {
  return async (ctx, next) => {
    const { app, socket, logger, helper } = ctx;
    const id = socket.id;
    const nsp = app.io.of("/");
    const query = socket.handshake.query;

    const { chatroomid, userid } = query;
    const rooms = [chatroomid];
    logger.debug("#user_info", id, room, userid);

    const tick = (id, msg) => {
      logger.debug("#tick", id, msg);

      socket.emit(id, helper.parseMsg("deny", msg));

      nsp.adapter.remoteDisconnect(id, true, err => {
        logger.error(err);
      });
    };

    const hasRoom = await ctx.model.Chatroom.findOne({
      chatroomid
    });
    logger.debug("#has_exits", hasRoom);

    if (!hasRoom) {
      tick(id, {
        type: "disabled",
        message: "disabled, this room is disabled"
      });
      return;
    }

    logger.debug("#join", chatroomid);
    socket.join(chatroomid);

    nsp.adapter.clients(rooms, (err, clients) => {
      logger.debug("#online_join", clients);

      nsp.to(chatroomid).emit("online", {
        clients,
        action: "join",
        target: "participator",
        messgae: `User(${userid}) joined.`
      });
    });

    await next();

    logger.debug("#leave", chatroomid);
    nsp.adapter.clients(rooms, (err, clients) => {
      logger.debug("#online_leave", clients);

      nsp.to(chatroomid).emit("online", {
        clients,
        action: "leave",
        target: "participator",
        message: `User(${userid}) leave.`
      });
    });
  };
};
