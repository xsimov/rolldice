import React from "react";
import { Flex, Badge } from "@chakra-ui/core";

export const SucceededOrFailedText = ({
  rolledSucceded,
  diceNotRolled,
  ...rest
}) => {
  if (diceNotRolled) return null;

  return (
    <Flex justifyContent="center" {...rest}>
      {rolledSucceded ? (
        <Badge variantColor="green" variant="solid" fontSize="2xl">
          Success
        </Badge>
      ) : (
        <Badge variantColor="red" variant="solid" fontSize="2xl">
          Failure
        </Badge>
      )}
    </Flex>
  );
};
