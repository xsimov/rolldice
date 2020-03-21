import { useState } from "react";

const calculateRandomValue = (faces) => Math.floor(Math.random() * faces) + 1;

const useDie = (faces) => {
  const [animated, setAnimated] = useState(false);
  const [rolledValue, setRolledValue] = useState(calculateRandomValue(faces));

  const rollDie = () => {
    setAnimated(true);
    setRolledValue("?");

    setTimeout(() => {
      setRolledValue(calculateRandomValue(faces));
      setAnimated(false);
    }, 500);
  };

  return { rolledValue, rollDie, animated };
};

export { useDie };
