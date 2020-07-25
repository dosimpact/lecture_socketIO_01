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

const io = socketIO.listen(server);
const { addUser, getUser, getUsersInRoom, removeUser } = require("./users");

io.on("connection", (socket) => {
  let message;
  let roomData;
  console.log(`${socket.id} is connection`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnection`);
    const { user, error } = removeUser(socket.id);
    if (error || !user) {
      return;
    }
    message = {
      text: `[NOTICE] ${user.name} is left to ${user.room}`,
      user: "admin",
    };
    io.to(user.room).emit("message", message);
  });

  socket.on("join", (payload, cb) => {
    const { user, error } = addUser(socket.id, payload.name, payload.room);
    if (error || !user) {
      cb(error);
      return;
    }
    socket.join(user.room);
    message = {
      text: `[NOTICE] ${user.name} welcome to ${user.room}`,
      user: "admin",
    };
    socket.emit("message", message);

    message = { text: `[NOTICE] ${user.name} is joined`, user: "admin" };
    socket.broadcast.emit("message", message);

    roomData = { users: getUsersInRoom(user.room).users };
    io.to(user.room).emit("roomDate", roomData);
  });

  socket.on("sendMessage", (payload, cb) => {
    const { text } = payload;
    const { user, error } = getUser(socket.id);
    if (error || !user) {
      cb(error);
      return;
    }
    message = { user: user.name, text };
    io.to(user.room).emit("message", message);
    cb();
  });
});
