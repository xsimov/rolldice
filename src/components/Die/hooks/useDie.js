import { useState } from "react";

const useDie = faces => {
  const [animated, setAnimated] = useState(false);
  const [rolledValue, setRolledValue] = useState(
    Math.ceil(Math.random() * faces)
  );

  const rollDie = () => {
    setAnimated(true);
    setRolledValue("?");
    setTimeout(() => {
      setRolledValue(Math.ceil(Math.random() * faces));
      setAnimated(false);
    }, 500);
  };

  return { rolledValue, rollDie, animated };
};

export { useDie };
