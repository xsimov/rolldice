import React, { createContext, useContext, useMemo } from 'react';
import io from 'socket.io-client';
import { getSocketURL } from './utils';

const SocketContext = createContext();

const APIConnectionProvider = ({ children }) => {
  const socket = useMemo(() => io(getSocketURL()), []);

  return (
    <SocketContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </SocketContext.Provider>
  );
};

const useAPIConnection = () => {
  if (!useContext(SocketContext)) {
    throw 'useAPIConnection must be within a APIConnectionProvider!';
  }

  return useContext(SocketContext);
};

export { APIConnectionProvider, useAPIConnection };
