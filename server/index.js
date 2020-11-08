const { emit } = require("process");

const server = require("http").createServer();

const io = require("socket.io")(server, {
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

server.listen(3003);
