import React from "react";
import { Flex } from "@chakra-ui/core";

export const SucceededOrFailedText = ({ rolledSucceded, diceNotRolled }) => {
  if (diceNotRolled) return null;

  return (
    <Flex justifyContent="center">
      {rolledSucceded ? <span>You Succeeded!</span> : <span>You Failed!</span>}
    </Flex>
  );
};
