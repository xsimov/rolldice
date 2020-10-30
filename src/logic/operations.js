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

const increaseTriumph = operationFactory(({ triumph } = result) => ({
  ...result,
  triumph: triumph + 1,
}));

const increaseDesperation = operationFactory(({ desperation } = result) => ({
  ...result,
  desperation: desperation + 1,
}));

const doNothing = operationFactory((result) => result);

const operationFactory = (operation) => ({
  fns: [operation],
  originalFn: operation,
  times: (x) => {
    for (let i = 0; i < x; i++) {
      this.fns = [...this.fns, this.originalFn];
    }
    return this;
  },
  and: (otherOperation) => {
    this.fns = [...this.fns, otherOperation.fns];
    return this;
  },
});

export {
  increaseAdvantage,
  increaseDisadvantage,
  increaseSuccess,
  increaseFailure,
  increaseDesperation,
  increaseTriumph,
  doNothing,
};
