import React from "react";
import MainScreen from "./layouts/MainScreen";
import { ChakraProvider } from "@chakra-ui/react";
import { IconContext } from "react-icons";

const App = () => (
  <ChakraProvider>
    <IconContext.Provider value={{ style: { display: "inline-flex" } }}>
      <MainScreen />
    </IconContext.Provider>
  </ChakraProvider>
);

export default App;
