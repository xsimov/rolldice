import React from "react";
import { useDie } from "./hooks/useDie";
import { dieFormsByFaces } from "../DieForms";

const Die = ({ className, faces }) => {
  const DieForm = dieFormsByFaces[faces];
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
