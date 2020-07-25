const cors = require("cors");
const express = require("express");
const socketIO = require("socket.io");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(require("./routes/globalRoute"));

const server = app.listen(PORT, () => {
  console.log(`✔ server is running at http://localhost:${PORT}`);
});

const io = socketIO.listen(server);

io.on("connection", (socket) => {
  console.log(`[${socket.id}] is connection `);
});
