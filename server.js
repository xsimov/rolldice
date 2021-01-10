const uuid = require('uuid');
const path = require('path');
const express = require('express');
const app = express();
const http = require('http').createServer(app);

let usersDB = {};

const io = require('socket.io')(http, {
  cors: {
    origin: '*',
    credentials: true,
  },
});

const newToken = () => {
  const token = uuid.v4();

  if (!usersDB[token]) {
    return token;
  }

  return newToken();
};

io.on('connection', (client) => {
  client.on('credentials', ({ playerName, playerToken }) => {
    const token = usersDB[playerToken] ? playerToken : newToken();

    const playerWasActive = (usersDB[playerToken] || {}).active;

    this.player = { playerName, playerToken: token, active: true };
    usersDB[token] = this.player;
    client.emit('tokenAssigned', this.player);

    if (!playerWasActive) {
      client.broadcast.emit('playerConnected', this.player);
    } else {
      client.broadcast.emit('playerChangedSettings', this.player);
    }

    client.emit(
      'playersList',
      Object.keys(usersDB)
        .filter((key) => usersDB[key].active)
        .reduce((accum, key) => [...accum, usersDB[key]], []),
    );
  });

  client.on('rolledDice', (data) => {
    client.broadcast.emit('updatedScore', data);
  });

  client.on('disconnect', () => {
    // usersDB[this.player.playerToken] = { ...this.player, active: false };

    client.broadcast.emit('playerDisconnected', this.player);
  });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

http.listen(3000, () => {
  console.log('listening on localhost:3000');
});
