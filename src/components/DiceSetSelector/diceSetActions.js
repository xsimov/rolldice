import { dice as allDice } from '../../logic';

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
    case 'increment':
      return {
        ...diceSet,
        [dieName]: { ...die, count: die.count + 1 },
      };
    case 'decrement':
      if (die.count === 0) return diceSet;

      return {
        ...diceSet,
        [dieName]: { ...die, count: die.count - 1 },
      };
    case 'setCount':
      return {
        ...diceSet,
        [dieName]: { ...die, count: newCount },
      };
    case 'clear':
      return emptyDiceSet;
    default:
      return diceSet;
  }
};

export { diceSetActions, emptyDiceSet };
