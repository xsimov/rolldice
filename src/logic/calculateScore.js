const calculateScore = ({ diceSet = {}, initialScore }) => {
  const dice = splatDiceSetIntoDiceArray(diceSet);
  const score = validateScore(initialScore);
  const operations = dice.map((die) => roll(die));

  return operations.reduce(
    (currentScore, operation) => operation(currentScore),
    score,
  );
};

const calculateRandomValue = (faces) => Math.floor(Math.random() * faces) + 1;

const splatDiceSetIntoDiceArray = (diceSet) =>
  Object.keys(diceSet).reduce(
    (dieArray, dieName) => [
      ...dieArray,
      ...addAsManyDiceAsCount(diceSet[dieName]),
    ],
    [],
  );

const addAsManyDiceAsCount = ({ die, count, accum = [] }) => {
  if (count === 0) return [];
  if (count === 1) return [...accum, die];

  return addAsManyDiceAsCount({
    die,
    count: count - 1,
    accum: [...accum, die],
  });
};

const roll = (die) => {
  const dieFaces = die.keys.length;
  const valueRolled = calculateRandomValue(dieFaces);

  return die[valueRolled];
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
