const inverseOf = {
  success: "failure",
  advantage: "disadvantage",
};

const countsToVisual = (countsResult) => {
  const visualResultObject = Object.keys(countsResult).reduce(
    (visualResult, category) => {
      if (countsResult[category] < 0) {
        return {
          ...visualResult,
          [inverseOf[category]]: countsResult[category] * -1,
        };
      }

      return {
        ...visualResult,
        [category]: countsResult[category],
      };
    },
    [],
  );

  return Object.keys(visualResultObject).reduce(
    (total, category) => [
      ...total,
      ...Array(visualResultObject[category]).fill(category),
    ],
    [],
  );
};

export { countsToVisual };
