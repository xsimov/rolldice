import React from 'react';
import styled from 'styled-components';
import { Button, Heading, Flex, useColorMode } from '@chakra-ui/react';
import swBackground from '../../assets/sw4.jpg';
import { CgDarkMode } from 'react-icons/cg/';

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

const Flipper = styled(CgDarkMode)`
  align-self: flex-end;
  cursor: pointer;
  color: black;
`;

const AppHeader = ({ openPlayersList }) => {
  const { toggleColorMode } = useColorMode();
  return (
    <NavigationBar>
      <AppName>Star Wars Dice Roller</AppName>
      <Flex>
        <Button colorScheme="blue" onClick={openPlayersList}>
          Players
        </Button>
        <Flipper onClick={toggleColorMode} />
      </Flex>
    </NavigationBar>
  );
};

export { AppHeader };
