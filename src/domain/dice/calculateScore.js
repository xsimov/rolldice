import { splatDiceSetIntoDiceArray } from './diceDataTypesConversors';

const calculateScore = (diceSet = {}, initialScore = {}) => {
  const dice = splatDiceSetIntoDiceArray(diceSet);
  const score = validateScore(initialScore);
  const operations = dice.map((die) => roll(die)).flat();

  return operations.reduce(
    (currentScore, operation) => operation(currentScore),
    score,
  );
};

const calculateRandomValue = (faces) => Math.floor(Math.random() * faces) + 1;

const roll = (die) => {
  const dieFaces = Object.keys(die.faces).length;
  const valueRolled = calculateRandomValue(dieFaces);

  return die.faces[valueRolled];
};

const validateScore = ({
  success = 0,
  advantage = 0,
  triumph = 0,
  desperation = 0,
  lightSide = 0,
  darkSide = 0,
}) => ({
  success,
  advantage,
  triumph,
  desperation,
  lightSide,
  darkSide,
});

export { calculateScore };
