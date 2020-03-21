import React from "react";
import { Die } from "./components/Die";
import styled from "styled-components";

const BigDie = styled(Die)`
  width: 20rem;
  height: 20rem;
`;

function App() {
  return <BigDie faces={4} />;
}

export default App;
