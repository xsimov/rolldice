import React from 'react';
import { Stack } from '@chakra-ui/react';
import { SucceededOrFailedText } from './SucceededOrFailedText';
import { RolledSymbols } from './RolledSymbols';

const RolledScore = ({ score, roller: rollerName, ...rest }) => {
  const rolledSucceded = score.success > 0;

  return (
    <Stack spacing={4} {...rest}>
      <SucceededOrFailedText
        rolledSucceded={rolledSucceded}
        diceNotRolled={score.success === undefined}
        rollerName={rollerName}
      />
      <RolledSymbols score={score} />
    </Stack>
  );
};

export { RolledScore };
