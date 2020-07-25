const cors = require("cors");
const express = require("express");
const io = require("socket.io");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(require("./routes/globalRoute"));

const server = app.listen(PORT, () => {
  console.log(`✔ server is running at http://localhost:${PORT}`);
});

module.exports = { server };
