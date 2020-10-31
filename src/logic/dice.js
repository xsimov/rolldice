import {
  increaseAdvantage,
  increaseDisadvantage,
  increaseSuccess,
  increaseFailure,
  increaseDesperation,
  increaseTriumph,
  increaseDarkSide,
  increaseLightSide,
  doNothing,
} from "./operations";

const benefitDie = {
  1: [doNothing],
  2: [doNothing],
  3: [increaseSuccess],
  4: [increaseSuccess, increaseAdvantage],
  5: [increaseAdvantage, increaseAdvantage],
  6: [increaseAdvantage],
};

const complicationDie = {
  1: [doNothing],
  2: [doNothing],
  3: [increaseFailure],
  4: [increaseFailure],
  5: [increaseDisadvantage],
  6: [increaseDisadvantage],
};

const abilityDie = {
  1: [doNothing],
  2: [increaseSuccess],
  3: [increaseSuccess],
  4: [increaseSuccess, increaseSuccess],
  5: [increaseAdvantage],
  6: [increaseAdvantage],
  7: [increaseSuccess, increaseAdvantage],
  8: [increaseAdvantage, increaseAdvantage],
};

const difficultyDie = {
  1: [doNothing],
  2: [increaseFailure],
  3: [increaseFailure, increaseFailure],
  4: [increaseDisadvantage],
  5: [increaseDisadvantage],
  6: [increaseDisadvantage],
  7: [increaseDisadvantage, increaseDisadvantage],
  8: [increaseFailure, increaseDisadvantage],
};

const proficiencyDie = {
  1: [doNothing],
  2: [increaseSuccess],
  3: [increaseSuccess],
  4: [increaseSuccess, increaseSuccess],
  5: [increaseSuccess, increaseSuccess],
  6: [increaseAdvantage],
  7: [increaseAdvantage, increaseSuccess],
  8: [increaseAdvantage, increaseSuccess],
  9: [increaseAdvantage, increaseSuccess],
  10: [increaseAdvantage, increaseAdvantage],
  11: [increaseAdvantage, increaseAdvantage],
  12: [increaseTriumph],
};

const challengeDie = {
  1: [doNothing],
  2: [increaseFailure],
  3: [increaseFailure],
  4: [increaseFailure, increaseFailure],
  5: [increaseFailure, increaseFailure],
  6: [increaseDisadvantage],
  7: [increaseDisadvantage],
  8: [increaseFailure, increaseDisadvantage],
  9: [increaseFailure, increaseDisadvantage],
  10: [increaseDisadvantage, increaseDisadvantage],
  11: [increaseDisadvantage, increaseDisadvantage],
  12: [increaseDesperation],
};

const forceDie = {
  1: [increaseDarkSide],
  2: [increaseDarkSide],
  3: [increaseDarkSide],
  4: [increaseDarkSide],
  5: [increaseDarkSide],
  6: [increaseDarkSide],
  7: [increaseDarkSide, increaseDarkSide],
  8: [increaseLightSide],
  9: [increaseLightSide],
  10: [increaseLightSide, increaseLightSide],
  11: [increaseLightSide, increaseLightSide],
  12: [increaseLightSide, increaseLightSide],
};

export {
  benefitDie,
  complicationDie,
  abilityDie,
  difficultyDie,
  proficiencyDie,
  challengeDie,
  forceDie,
};
