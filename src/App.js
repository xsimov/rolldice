import React from 'react';
import MainScreen from './layouts/MainScreen';
import { ChakraProvider } from '@chakra-ui/react';
import { APIConnectionProvider } from './externalComunications/APIConnection/APIConnectionHook';
import { IconContext } from 'react-icons';

const App = () => (
  <ChakraProvider>
    <APIConnectionProvider>
      <IconContext.Provider value={{ style: { display: 'inline-flex' } }}>
        <MainScreen />
      </IconContext.Provider>
    </APIConnectionProvider>
  </ChakraProvider>
);

export default App;
