import React from "react";
import * as scoreImages from "../../scoreImages";
import { Flex } from "@chakra-ui/core";
import { SucceededOrFailedText } from "./SucceededOrFailedText";
import { countsToVisual } from "../../logic";

const RolledResult = ({ result }) => {
  const rolledSucceded = result.success > 0;
  const visualResult = countsToVisual(result);

  return (
    <>
      <SucceededOrFailedText
        rolledSucceded={rolledSucceded}
        diceNotRolled={result.success === undefined}
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
    </>
  );
};

export { RolledResult };
