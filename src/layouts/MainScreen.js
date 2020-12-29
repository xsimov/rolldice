import React, { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { Stack } from "@chakra-ui/react";
import { useDisclosure, useToast } from "@chakra-ui/react";
import { calculateScore } from "../logic";
import {
  readCredentials,
  storeCredentials,
} from "../externalComunications/storage";
import { DiceSetSelector } from "../components/DiceSetSelector";
import { PlayersList } from "../components/PlayersList/PlayersList";
import { RolledScore } from "../components/RolledScore";
import { SettingsModal } from "../components/SettingsModal/SettingsModal";
import { AppFooter } from "../components/AppFooter/AppFooter";
import { AppHeader } from "../components/AppHeader/AppHeader";

const DestinyPoints = () => <div />;

const { NODE_ENV } = process.env;
const url =
  NODE_ENV === "production" ? "https://sw.xsimov.com" : "http://localhost:3000";

const MainScreen = () => {
  const socketConnection = useRef(undefined);
  const showNotification = useToast();

  useEffect(() => {
    const socket = io(url);
    socketConnection.current = socket;

    socket.on("connect", async () => {
      const credentials = readCredentials();
      if (credentials.playerName) {
        socket.emit("credentials", credentials);
        return;
      }

      openSettingsModal();
    });

    socket.on("tokenAssigned", (credentials) => {
      storeCredentials(credentials);
    });

    socket.on("playersList", (list) => {
      setPlayersList(list);
    });

    socket.on("playerConnected", (newPlayer) => {
      if (newPlayer.playerToken === readCredentials().playerToken) {
        return;
      }

      setPlayersList((currentPlayers) => [...currentPlayers, newPlayer]);

      showNotification({
        position: "bottom-left",
        title: "Player connected!",
        description: `${newPlayer.playerName} just jumped on board!`,
        status: "success",
        isClosable: true,
      });
    });

    socket.on(
      "playerChangedSettings",
      ({ playerToken, playerName: newName }) => {
        setPlayersList((currentPlayers) =>
          currentPlayers.map((player) =>
            player.playerToken === playerToken
              ? { ...player, playerName: newName }
              : player,
          ),
        );
      },
    );

    socket.on("playerDisconnected", (disconnectedPlayer) => {
      if (disconnectedPlayer.playerToken === readCredentials().playerToken) {
        return;
      }

      setPlayersList((currentPlayers) =>
        currentPlayers.filter(
          (player) => player.playerToken !== disconnectedPlayer.playerToken,
        ),
      );

      showNotification({
        position: "bottom-left",
        title: "Player disconnected!",
        description: `${disconnectedPlayer.playerName} abandoned the ship!`,
        status: "warning",
        isClosable: true,
      });
    });

    socket.on("updatedScore", ({ score, playerName }) => {
      setRoller(playerName);
      setScore(score);
    });
  }, []);

  const [score, setScore] = useState({});
  const [playerName, setPlayerName] = useState("");
  const [playersList, setPlayersList] = useState([]);
  const [roller, setRoller] = useState("");
  const {
    isOpen: isSettingsModalOpen,
    onOpen: openSettingsModal,
    onClose: closeSettingsModal,
  } = useDisclosure();

  const {
    isOpen: isPlayersListOpen,
    onOpen: openPlayersList,
    onClose: closePlayersList,
  } = useDisclosure();

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

  const sendCredentials = (playerName) => {
    socketConnection.current.emit("credentials", {
      ...readCredentials(),
      playerName,
    });
  };

  return (
    <>
      <SettingsModal
        playerName={playerName}
        setPlayerName={setPlayerName}
        closeSettingsModal={closeSettingsModal}
        sendCredentials={sendCredentials}
        isOpen={isSettingsModalOpen}
      />
      <PlayersList
        closePlayersList={closePlayersList}
        playersList={playersList}
        isOpen={isPlayersListOpen}
        openSettingsModal={openSettingsModal}
      />
      <AppHeader openPlayersList={openPlayersList} />
      <Stack spacing={12}>
        <DestinyPoints />
        <DiceSetSelector rollDice={rollDice} clearResult={clearScore} mb={8} />
        <RolledScore score={score} roller={roller} />
      </Stack>
      <AppFooter />
    </>
  );
};

export default MainScreen;
