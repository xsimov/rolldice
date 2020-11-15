import React from "react";
import * as scoreImages from "../../scoreImages";
import { Flex, Stack } from "@chakra-ui/react";
import { SucceededOrFailedText } from "./SucceededOrFailedText";
import { countsToVisual } from "../../logic";

const RolledScore = ({ score, roller: rollerName, ...rest }) => {
  const rolledSucceded = score.success > 0;
  const visualResult = countsToVisual(score);

  return (
    <Stack spacing={4} {...rest}>
      <SucceededOrFailedText
        rolledSucceded={rolledSucceded}
        diceNotRolled={score.success === undefined}
        rollerName={rollerName}
      />
      <Flex justifyContent="center">
        {visualResult.map((category, i) => (
          <img
            key={`${category}-${i}`}
            alt={category}
            src={scoreImages[category]}
          />
        ))}
      </Flex>
    </Stack>
  );
};

export { RolledScore };
