import React, { useReducer } from "react";
import { SimpleGrid, Flex, Button } from "@chakra-ui/core";
import { DieSelector } from "../DieSelector";
import { diceSetActions, emptyDiceSet } from "./diceSetActions";

const DiceSetSelector = ({ rollDice }) => {
  const [diceSet, dispatch] = useReducer(diceSetActions, emptyDiceSet);

  return (
    <>
      <SimpleGrid columns={2} spacing={4} padding={4}>
        {Object.keys(diceSet).map((dieName) => (
          <DieSelector
            key={dieName}
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
        <Button variantColor="red" onClick={() => rollDice(diceSet)}>
          ROLL!
        </Button>
        <Button
          variantColor="green"
          variant="outline"
          onClick={() => dispatch({ type: "clear" })}
        >
          Clear dice
        </Button>
      </Flex>
    </>
  );
};

export { DiceSetSelector };
