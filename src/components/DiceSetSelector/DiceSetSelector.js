import React, { useReducer } from "react";
import { SimpleGrid, Flex, Button } from "@chakra-ui/core";
import { DieSelector } from "../DieSelector";
import { calculateScore, dice as allDice } from "../../logic";

const emptyDiceSet = Object.keys(allDice).reduce(
  (counts, dieName) => ({
    ...counts,
    [dieName]: { faces: allDice[dieName], count: 0, name: dieName },
  }),
  {},
);

const diceSetActions = (diceSet, { type, dieName, newCount }) => {
  const die = diceSet[dieName];

  switch (type) {
    case "increment":
      return {
        ...diceSet,
        [dieName]: { ...die, count: die.count + 1 },
      };
    case "decrement":
      if (die.count === 0) return diceSet;

      return {
        ...diceSet,
        [dieName]: { ...die, count: die.count - 1 },
      };
    case "setCount":
      return {
        ...diceSet,
        [dieName]: { ...die, count: newCount },
      };
  }
};

const DiceSetSelector = ({ addRollResult }) => {
  const [diceSet, dispatch] = useReducer(diceSetActions, emptyDiceSet);

  const rollDice = () => {
    console.log("diceSet before calculare", diceSet);
    const result = calculateScore(diceSet);
    addRollResult(result);
  };

  return (
    <>
      <SimpleGrid columns={2} spacing={4} padding={4}>
        {Object.keys(diceSet).map((dieName) => (
          <DieSelector
            dieName={dieName}
            decrementDie={() => {
              dispatch({ type: "decrement", dieName });
            }}
            incrementDie={() => {
              dispatch({ type: "increment", dieName });
            }}
            setDieCount={(newCount) => {
              dispatch({ type: "setCount", dieName, newCount });
            }}
            dieCount={diceSet[dieName].count}
          />
        ))}
      </SimpleGrid>
      <Flex justifyContent="center">
        <Button variantColor="red" onClick={rollDice}>
          ROLL!
        </Button>
      </Flex>
    </>
  );
};

export { DiceSetSelector };
