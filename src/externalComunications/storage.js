const nameKey = "SW-credentials-player-name";
const tokenKey = "SW-credentials-player-token";

const storeCredentials = ({ playerName, playerToken }) => {
  localStorage.setItem(nameKey, playerName);
  localStorage.setItem(tokenKey, playerToken);
};

const clearCredentials = () => {
  localStorage.clear();
};

const readCredentials = () => ({
  playerName: localStorage.getItem(nameKey),
  playerToken: localStorage.getItem(tokenKey),
});

export { storeCredentials, readCredentials, clearCredentials };
