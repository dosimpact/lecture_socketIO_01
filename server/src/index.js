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
  console.log(`${socket.id} is connection`);

  socket.on("disconnect", () => {
    console.log(`${socket.id} is disconnection`);
  });
});
