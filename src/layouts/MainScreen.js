import React, { useState } from "react";
import styled from "styled-components";
import { Heading } from "@chakra-ui/core";
import { calculateScore } from "../logic";
import { DiceSetSelector } from "../components/DiceSetSelector";
import { RolledResult } from "../components/RolledResult";
import swBackground from "../assets/sw4.jpg";

const NavigationBar = styled.nav`
  color: white;
  display: flex;
  background: olive;
  padding: 1rem;
  background: url(${swBackground});
  background-size: cover;
  height: 16rem;
`;

const AppName = styled(Heading)`
  color: yellow;
  align-self: flex-end;
  background: rgba(0, 0, 0, 0.7);
  padding: 1rem;
  border-radius: 1rem;
  font-family: starWars !important;
`;

// const DestinyPoints = <div />;

const MainScreen = () => {
  const [result, setResult] = useState({});

  return (
    <>
      <NavigationBar>
        <AppName>Star Wars Dice Roller</AppName>
      </NavigationBar>
      <main>
        {/* <DestinyPoints /> */}
        <DiceSetSelector
          rollDice={(diceSet) => {
            setResult(calculateScore(diceSet));
          }}
        />
        <RolledResult result={result} />
      </main>
    </>
  );
};

export default MainScreen;
