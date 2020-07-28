const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();

app.use(cors());
app.use(require("./routes/globalRoute"));

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => {
  console.log(`✔ server is running at http://localhost:${PORT}`);
});

import store from "./store";
import {
  addUser,
  removeUser,
  getUser,
  getUserInRoom,
} from "./_actions/users_action";

const io = socketIO.listen(server);

const emitor = {
  message: {
    type: "message",
    action: (
      user,
      text,
      profile = "https://3.bp.blogspot.com/-qDc5kIFIhb8/UoJEpGN9DmI/AAAAAAABl1s/BfP6FcBY1R8/s1600/BlueHead.jpg"
    ) => {
      return { user, text, profile };
    },
  },
  roomData: {
    type: "roomData",
    action: (room) => {
      return { users: getUserInRoom(room).payload.users };
    },
  },
};

io.on("connection", (socket) => {
  console.log(`${socket.id} is connection`);
  socket.on("disconnect", () => {
    const user = getUser(socket.id).payload.user;
    if (!user) return;
    store.dispatch(removeUser(socket.id));
    io.to(user.room).emit(
      emitor.message.type,
      emitor.message.action("[NOTICE]", `${user.name} is left`)
    );
    io.to(user.room).emit(
      emitor.roomData.type,
      emitor.roomData.action(user.room)
    );
  });

  socket.on("join", ({ name, room, profile }, cb) => {
    console.log(`${socket.id} ${name} ${room} is join ${profile}`);
    try {
      store.dispatch(addUser({ id: socket.id, name, room, profile }));
    } catch (e) {
      cb(e.message);
    }
    socket.emit(
      emitor.message.type,
      emitor.message.action("[NOTICE]", ` Welcome to room ${room} 😍`)
    );
    socket.join(room);
    socket.broadcast
      .to(room)
      .emit(
        emitor.message.type,
        emitor.message.action("[NOTICE]", ` ${name}  is joined  ✅`)
      );
    // console.log(getUserInRoom(room).payload.users);
    io.to(room).emit(emitor.roomData.type, emitor.roomData.action(room));
    cb();
  });
  socket.on("sendMessage", ({ text }, cb) => {
    const user = getUser(socket.id).payload.user;
    if (!user) {
      console.error("can't find user");
      return;
    }
    io.to(user.room).emit(
      emitor.message.type,
      emitor.message.action(user.name, text, user.profile)
    );
    cb();
  });
});
