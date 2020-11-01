import React from "react";
import MainScreen from "./layouts/MainScreen";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const App = () => (
  <ThemeProvider>
    <CSSReset />
    <MainScreen />
  </ThemeProvider>
);

export default App;
