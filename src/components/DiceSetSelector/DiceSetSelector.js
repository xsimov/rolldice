import React, { useReducer } from 'react';
import styled from 'styled-components';
import { SimpleGrid, Flex, Box, Button } from '@chakra-ui/react';
import { DieSelector } from '../DieSelector/DieSelector';
import { diceSetActions, emptyDiceSet } from './diceSetActions';

const RollButton = styled(Button)`
  /* ----------------------------------------------
 * Generated by Animista on 2020-11-8 18:06:36
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

  /**
 * ----------------------------------------
 * animation color-change-5x
 * ----------------------------------------
 */
  @-webkit-keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }
  @keyframes color-change-5x {
    0% {
      background: #19dcea;
    }
    25% {
      background: #b22cff;
    }
    50% {
      background: #ea2222;
    }
    75% {
      background: #f5be10;
    }
    100% {
      background: #3bd80d;
    }
  }

  & {
    -webkit-animation: color-change-5x 4s linear infinite alternate both;
    animation: color-change-5x 4s linear infinite alternate both;
  }
`;

const DiceSetSelector = ({ rollDice, clearResult, ...rest }) => {
  const [diceSet, dispatch] = useReducer(diceSetActions, emptyDiceSet);

  return (
    <Box {...rest}>
      <SimpleGrid columns={2} spacing={4} padding={4}>
        {Object.keys(diceSet).map((dieName) => (
          <DieSelector
            key={dieName}
            dieName={dieName}
            decrementDie={() => {
              dispatch({ type: 'decrement', dieName });
            }}
            incrementDie={() => {
              dispatch({ type: 'increment', dieName });
            }}
            setDieCount={(newCount) => {
              dispatch({ type: 'setCount', dieName, newCount });
            }}
            dieCount={diceSet[dieName].count}
          />
        ))}
      </SimpleGrid>
      <Flex justifyContent="center">
        <RollButton onClick={() => rollDice(diceSet)}>ROLL!</RollButton>
        <Button
          colorScheme="green"
          variant="outline"
          onClick={() => {
            clearResult();
            dispatch({ type: 'clear' });
          }}
        >
          Clear dice
        </Button>
      </Flex>
    </Box>
  );
};

export { DiceSetSelector };
