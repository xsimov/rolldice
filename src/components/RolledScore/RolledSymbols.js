import React from 'react';
import * as scoreImages from '../../scoreImages';
import { Flex } from '@chakra-ui/react';
import { countsToVisual } from '../../domain';

const RolledSymbols = ({ score, onSymbolClick = () => {} }) => {
  const visualResult = countsToVisual(score);

  return (
    <Flex justifyContent="center">
      {visualResult.map((category, i) => (
        <img
          pointer="cursor"
          onClick={() => onSymbolClick(category)}
          key={`${category}-${i}`}
          alt={category}
          src={scoreImages[category]}
        />
      ))}
    </Flex>
  );
};

export { RolledSymbols };
