import { Button } from '@chakra-ui/react';
import React, { useReducer } from 'react';
import { Center } from '@chakra-ui/react';
import { RolledSymbols } from '../RolledScore/RolledSymbols';
import { calculateScore } from '../../logic';
import { dice } from '../../logic';

const destinyPointsActions = (destinyPoints, { action, numberOfPlayers }) => {
  switch (action) {
    case 'rollDice':
      const diceSet = {
        forceDie: { faces: dice.forceDie, count: numberOfPlayers },
      };
      const newScore = calculateScore(diceSet);
      return { ...destinyPoints, score: newScore, diceRolled: true };
    case 'flipLightSymbol':
      if (destinyPoints.score.lightSide === 0) return destinyPoints;

      return {
        ...destinyPoints,
        score: {
          lightSide: destinyPoints.score.lightSide - 1,
          darkSide: destinyPoints.score.darkSide + 1,
        },
      };
    case 'flipDarkSymbol':
      if (destinyPoints.score.darkSide === 0) return destinyPoints;

      return {
        ...destinyPoints,
        score: {
          lightSide: destinyPoints.score.lightSide + 1,
          darkSide: destinyPoints.score.darkSide - 1,
        },
      };
    default:
      return destinyPoints;
  }
};

const emptyDestinyPoints = {
  diceRolled: false,
  score: {
    lightSide: 0,
    darkSide: 0,
  },
};

const DestinyPoints = ({ playersList }) => {
  const [destinyPoints, dispatch] = useReducer(
    destinyPointsActions,
    emptyDestinyPoints,
  );

  const flipSymbol = (symbolName) => {
    if (symbolName === 'lightSide') {
      return dispatch({ action: 'flipLightSymbol' });
    }

    dispatch({ action: 'flipDarkSymbol' });
  };

  return (
    <Center>
      {destinyPoints.diceRolled ? (
        <RolledSymbols score={destinyPoints.score} onSymbolClick={flipSymbol} />
      ) : (
        <Button
          onClick={() =>
            dispatch({
              action: 'rollDice',
              numberOfPlayers: playersList.length,
            })
          }
        >
          Run the force die!
        </Button>
      )}
    </Center>
  );
};

export { DestinyPoints };
