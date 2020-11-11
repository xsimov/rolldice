const path = require("path");
const express = require("express");
const app = express();
const http = require("http").createServer(app);

const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on("connection", (client) => {
  client.on("config", (data) => {
    console.log(`receiving data:`, data, client.id);
  });

  client.on("rolledDice", (data) => {
    console.log(`receiving data:`, data);
    client.broadcast.emit("updatedScore", data);
  });

  client.on("disconnect", () => {
    console.log("client disconnected!");
  });
});

app.use(express.static(path.join(__dirname, "build")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
