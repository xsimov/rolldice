import React, { useEffect, useRef, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

const SettingsModal = ({
  isOpen,
  playerName,
  setPlayerName,
  sendCredentials,
  closeSettingsModal: closeModal,
}) => {
  const nameInput = useRef(null);
  const [formError, setFormError] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const timerId = setTimeout(() => {
      nameInput.current.focus();
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [isOpen]);

  const validateAndClose = (e) => {
    e && e.preventDefault();

    if (playerName === "") {
      setFormError(true);
      return;
    }

    setFormError(false);
    sendCredentials(playerName);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onClose={validateAndClose} scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={validateAndClose}>
          <ModalHeader>Identify yourself</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="playerName" isRequired isInvalid={formError}>
              <FormLabel>Your name</FormLabel>
              <Input
                ref={nameInput}
                variant="flushed"
                value={playerName}
                onChange={(e) => {
                  setPlayerName(e.target.value);
                }}
              />
              <FormErrorMessage>This is mandatory for your ID</FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" type="submit">
              Close
            </Button>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export { SettingsModal };
