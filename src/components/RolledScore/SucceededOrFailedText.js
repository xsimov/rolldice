import React from 'react';
import { Flex, Stack, Badge } from '@chakra-ui/react';

export const SucceededOrFailedText = ({
  rolledSucceded,
  diceNotRolled,
  rollerName,
  ...rest
}) => {
  if (diceNotRolled) return null;

  return (
    <Stack spacing={2} {...rest}>
      <Flex justifyContent="center">
        <span>{rollerName} rolled a</span>
      </Flex>
      <Flex justifyContent="center">
        {rolledSucceded ? (
          <Badge colorScheme="green" variant="solid" fontSize="2xl">
            Success
          </Badge>
        ) : (
          <Badge colorScheme="red" variant="solid" fontSize="2xl">
            Failure
          </Badge>
        )}
      </Flex>
    </Stack>
  );
};
