const splatDiceSetIntoDiceArray = (diceSet) =>
  Object.keys(diceSet).reduce(
    (dieArray, dieName) => [
      ...dieArray,
      ...addAsManyDiceAsCount(diceSet[dieName]),
    ],
    [],
  );

const compactArrayIntoSetWithCounts = (diceArray) => {
  diceArray.reduce(
    (diceSet, { faces, name }) => ({
      ...diceSet,
      [name]: { name, count: 1, faces },
    }),
    {},
  );
};

const addAsManyDiceAsCount = ({ faces, name, count, accum = [] }) => {
  if (count === 0) return [];
  if (count === 1) return [...accum, { faces, name }];

  return addAsManyDiceAsCount({
    faces,
    name,
    count: count - 1,
    accum: [...accum, { faces, name }],
  });
};

export { splatDiceSetIntoDiceArray, compactArrayIntoSetWithCounts };
