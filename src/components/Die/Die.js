import React from "react";
import { useDie } from "./hooks/useDie";
import { animatedDiceByFaces } from "../NumberDieForms";

const Die = ({ className, faces }) => {
  const DieForm = animatedDiceByFaces[faces];
  const { rolledValue, animated, rollDie } = useDie(faces);

  return (
    <DieForm
      onClick={rollDie}
      rolledValue={rolledValue}
      animated={animated}
      className={className}
    />
  );
};

export { Die };
