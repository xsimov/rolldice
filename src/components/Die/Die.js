import React from "react";
import { useDie } from "./hooks/useDie";
import { Triangle } from "../DieForms";

const dieForms = {
  4: Triangle,
};

const Die = ({ className, faces }) => {
  const DieForm = dieForms[faces];
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
