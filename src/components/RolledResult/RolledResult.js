import React from "react";
import * as scores from "../../scoreImages";
import { Flex } from "@chakra-ui/core";

const inverseOf = {
  success: "failure",
  advantage: "disadvantage",
};

const RolledResult = ({ result }) => {
  const rolledSucceded = result.success > 0;

  const visual = Object.keys(result).reduce((visualResult, category) => {
    if (result[category] < 0) {
      return {
        ...visualResult,
        [inverseOf[category]]: result[category] * -1,
      };
    }

    return {
      ...visualResult,
      [category]: result[category],
    };
  }, []);

  return (
    <>
      <Flex justifyContent="center">
        {rolledSucceded ? (
          <span>You Succeeded!</span>
        ) : (
          <span>You Failed!</span>
        )}
      </Flex>
      <Flex justifyContent="center">
        {Object.keys(visual).map((category) =>
          [...Array(visual[category])].map((_, i) => (
            <img key={`${category}-${i}`} src={scores[category]} />
          )),
        )}
      </Flex>
    </>
  );
};

export { RolledResult };
