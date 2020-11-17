import abilityDieIncrement from './ability_inc.png';
import abilityDieDecrement from './ability_dec.png';
import difficultyDieIncrement from './difficulty_inc.png';
import difficultyDieDecrement from './difficulty_dec.png';
import challengeDieIncrement from './challenge_inc.png';
import challengeDieDecrement from './challenge_dec.png';
import benefitDieIncrement from './boost_inc.png';
import benefitDieDecrement from './boost_dec.png';
import complicationDieIncrement from './setback_inc.png';
import complicationDieDecrement from './setback_dec.png';
import proficiencyDieIncrement from './proficiency_inc.png';
import proficiencyDieDecrement from './proficiency_dec.png';
import forceDieIncrement from './force_inc.png';
import forceDieDecrement from './force_dec.png';

const dieImages = {
  abilityDie: {
    increment: abilityDieIncrement,
    decrement: abilityDieDecrement,
  },
  difficultyDie: {
    increment: difficultyDieIncrement,
    decrement: difficultyDieDecrement,
  },
  challengeDie: {
    increment: challengeDieIncrement,
    decrement: challengeDieDecrement,
  },
  benefitDie: {
    increment: benefitDieIncrement,
    decrement: benefitDieDecrement,
  },
  complicationDie: {
    increment: complicationDieIncrement,
    decrement: complicationDieDecrement,
  },
  proficiencyDie: {
    increment: proficiencyDieIncrement,
    decrement: proficiencyDieDecrement,
  },
  forceDie: {
    increment: forceDieIncrement,
    decrement: forceDieDecrement,
  },
};

const getDieImages = (dieName) => {
  if (!dieImages[dieName]) console.error('dieName not present: ', dieName);

  return dieImages[dieName];
};

export { getDieImages };
