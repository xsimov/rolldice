import React, { useEffect, useRef } from "react";
import {
  Input,
  Modal,
  ModalCloseButton,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/core";

const IdentificationModal = ({
  isOpen,
  onCloseModal,
  playerName,
  setPlayerName,
}) => {
  const nameInput = useRef(null);

  useEffect(() => {
    isOpen &&
      setTimeout(() => {
        nameInput.current.focus();
      }, 1000);
  }, [isOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal} scrollBehavior="outside">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Identification</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={onCloseModal}>
            <Input
              name="playerName"
              ref={nameInput}
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
  );
};

export { IdentificationModal };
