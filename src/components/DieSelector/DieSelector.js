import React from "react";
import styled from "styled-components";
import {
  Flex,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
} from "@chakra-ui/react";
import { getDieImages } from "../../assets/dieImages";

const ClickableLeftAddon = styled(InputLeftAddon)`
  cursor: pointer;
  user-select: none;
`;

const ClickableRightAddon = styled(InputRightAddon)`
  cursor: pointer;
  user-select: none;
`;

const SmallCenteredInput = styled(Input)`
  text-align: center;
`;

const DieImage = styled.img`
  height: 100% !important;
`;

const DieSelector = ({
  dieName,
  dieCount,
  decrementDie,
  incrementDie,
  setDieCount,
}) => (
  <Flex spacing={4} justifyContent="center">
    <InputGroup>
      <ClickableLeftAddon onClick={decrementDie}>
        <DieImage src={getDieImages(dieName).decrement} />
      </ClickableLeftAddon>
      <SmallCenteredInput
        type="number"
        min={0}
        roundedLeft={0}
        roundedRight={0}
        value={dieCount}
        onChange={(event) => setDieCount(parseInt(event.target.value))}
      />
      <ClickableRightAddon onClick={incrementDie}>
        <DieImage src={getDieImages(dieName).increment} />
      </ClickableRightAddon>
    </InputGroup>
  </Flex>
);

export { DieSelector };
