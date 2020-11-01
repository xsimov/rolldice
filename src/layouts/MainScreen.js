import styled from "styled-components";
import { Flex, Heading } from "@chakra-ui/core";
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

const MainScreen = () => {
  return (
    <>
      <NavigationBar>
        <AppName>Star Wars Dice Roller</AppName>
      </NavigationBar>
      <main>
        <DiceSetSelector diceSet={diceSet} />
      </main>
    </>
  );
};

export default MainScreen;
