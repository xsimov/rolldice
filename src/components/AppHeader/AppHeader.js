import React from "react";
import styled from "styled-components";
import { Button, Heading } from "@chakra-ui/react";
import swBackground from "../../assets/sw4.jpg";

const NavigationBar = styled.nav`
  color: white;
  display: flex;
  justify-content: space-between;
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

const AppHeader = ({ openPlayersList }) => (
  <NavigationBar>
    <AppName>Star Wars Dice Roller</AppName>
    <Button colorScheme="blue" onClick={openPlayersList}>
      Players
    </Button>
  </NavigationBar>
);

export { AppHeader };
