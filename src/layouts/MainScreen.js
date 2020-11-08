import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import styled from "styled-components";
import {
  Heading,
  Input,
  Stack,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/core";
import { useDisclosure } from "@chakra-ui/core";
import { calculateScore } from "../logic";
import { DiceSetSelector } from "../components/DiceSetSelector";
import { RolledScore } from "../components/RolledScore";
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

const DestinyPoints = () => <div />;

const MainScreen = () => {
  const socketConnection = useRef(undefined);
  const resolvePlayerNamePromise = useRef(() => {});

  useEffect(() => {
    const socket = io("http://localhost:3003");
    socketConnection.current = socket;

    socket.on("connect", async () => {
      console.log("client connected");
      askPlayerName();
      const name = await new Promise((resolve) => {
        resolvePlayerNamePromise.current = resolve;
      });
      console.log("after promiiise!");
      socket.emit("config", name);
    });

    socket.on("updatedScore", ({ score, playerName }) => {
      console.log("receiving score: ", score);
      setRoller(playerName);
      setScore(score);
    });
  }, []);

  const [score, setScore] = useState({});
  const [playerName, setPlayerName] = useState("");
  const [roller, setRoller] = useState("");
  const { isOpen, onOpen: askPlayerName, onClose } = useDisclosure();

  const clearScore = () => setScore({});
  const rollDice = (diceSet) => {
    const score = calculateScore(diceSet);

    setScore(score);
    setRoller("You");

    socketConnection.current.emit("rolledDice", {
      playerName,
      score,
    });
  };

  const onCloseModal = () => {
    if (playerName === "") return;

    onClose();
    resolvePlayerNamePromise.current(playerName);
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Identification</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={onCloseModal}>
              <Input
                variant="flushed"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
              />
            </form>
          </ModalBody>

          <ModalFooter>
            <Button
              disabled={playerName.length < 1}
              variantColor="green"
              onClick={onCloseModal}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <NavigationBar>
        <AppName>Star Wars Dice Roller</AppName>
      </NavigationBar>
      <Stack spacing={8}>
        <DestinyPoints />
        <DiceSetSelector rollDice={rollDice} clearResult={clearScore} mb={8} />
        <RolledScore score={score} roller={roller} />
      </Stack>
    </>
  );
};

export default MainScreen;
