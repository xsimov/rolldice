import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
  DrawerCloseButton,
  List,
  ListItem,
  ListIcon,
  Heading,
  Button,
} from "@chakra-ui/react";
import { GiLightSabers } from "react-icons/gi";

const PlayersList = ({
  playersList,
  isOpen,
  closePlayersList,
  openSettingsModal,
}) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={closePlayersList}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerCloseButton />
        </DrawerHeader>
        <DrawerBody>
          <Button onClick={openSettingsModal}>Edit your settings</Button>
          <Heading as="h4" size="md">
            Connected players
          </Heading>
          <List pl={4}>
            {playersList.map(({ playerName, playerToken }) => (
              <ListItem key={playerToken}>
                <ListIcon as={GiLightSabers} />
                {playerName}
              </ListItem>
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export { PlayersList };
