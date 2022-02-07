import {
  readCredentials,
  storeCredentials,
} from '../../externalComunications/storage';

const authenticateUser = (socket, requestNewCredentials) => {
  socket.on('connect', async () => {
    const credentials = readCredentials();

    if (credentials.playerName) {
      socket.emit('credentials', credentials);
      return;
    }

    requestNewCredentials();
  });

  socket.on('tokenAssigned', (credentials) => {
    storeCredentials(credentials);
  });
};

export { authenticateUser };
