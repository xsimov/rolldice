describe('calculateScore', () => {
  context('');
});

const calculateScore = ({ dice = [], initialScore }) => {
  const score = validateScore(initialScore);
  const operations = dice.map((die) => roll(die));

  return operations.reduce(
    (currentScore, operation) => operation(currentScore),
    score,
  );
};

const roll = (die) => {
  const dieFaces = die.keys.length;
  const valueRolled = (Math.random() * dieFaces).ceil();

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

export default calculateScore;
