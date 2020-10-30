const increaseAdvantage = ({ advantage } = result) => ({
  ...result,
  advantage: advantage + 1,
});

const decreaseAdvantage = ({ advantage } = result) => ({
  ...result,
  advantage: advantage - 1,
});
const increaseDisadvantage = decreaseAdvantage;

const increaseSuccess = ({ success } = result) => ({
  ...result,
  success: success + 1,
});

const decreaseSuccess = ({ success } = result) => ({
  ...result,
  success: success - 1,
});
const increaseFailure = decreaseSuccess;

const increaseTriumph = ({ triumph, success } = result) => ({
  ...result,
  triumph: triumph + 1,
  success: success + 1,
});

const increaseDesperation = ({ desperation, success } = result) => ({
  ...result,
  desperation: desperation + 1,
  success: success - 1,
});

const doNothing = (result) => result;

export {
  increaseAdvantage,
  increaseDisadvantage,
  increaseSuccess,
  increaseFailure,
  increaseDesperation,
  increaseTriumph,
  doNothing,
};
