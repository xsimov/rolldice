const increaseAdvantage = ({ advantage, ...rest }) => ({
  ...rest,
  advantage: advantage + 1,
});

const decreaseAdvantage = ({ advantage, ...rest }) => ({
  ...rest,
  advantage: advantage - 1,
});
const increaseDisadvantage = decreaseAdvantage;

const increaseSuccess = ({ success, ...rest }) => ({
  ...rest,
  success: success + 1,
});

const decreaseSuccess = ({ success, ...rest }) => ({
  ...rest,
  success: success - 1,
});
const increaseFailure = decreaseSuccess;

const increaseTriumph = ({ triumph, success, ...rest }) => ({
  ...rest,
  triumph: triumph + 1,
  success: success + 1,
});

const increaseDesperation = ({ desperation, success, ...rest }) => ({
  ...rest,
  desperation: desperation + 1,
  success: success - 1,
});

const increaseLightSide = ({ lightSide, ...rest }) => ({
  ...rest,
  lightSide: lightSide + 1,
});

const increaseDarkSide = ({ darkSide, ...rest }) => ({
  ...rest,
  darkSide: darkSide + 1,
});

const doNothing = (result) => result;

export {
  increaseAdvantage,
  increaseDisadvantage,
  increaseSuccess,
  increaseFailure,
  increaseDesperation,
  increaseTriumph,
  increaseLightSide,
  increaseDarkSide,
  doNothing,
};
