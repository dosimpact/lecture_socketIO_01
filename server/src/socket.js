const socketIO = require("socket.io");
const { server } = require("./index");

const io = socketIO.listen(server);

io.on("connection", (socket) => {
  console.log(`[${socket.id}] is connection `);
});
