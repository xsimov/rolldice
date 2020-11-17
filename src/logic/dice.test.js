import {
  benefitDie,
  complicationDie,
  abilityDie,
  difficultyDie,
  proficiencyDie,
  challengeDie,
  forceDie,
} from './dice';

const emptyResult = {
  success: 0,
  advantage: 0,
  triumph: 0,
  desperation: 0,
  lightSide: 0,
  darkSide: 0,
};

describe('StarWars Dice operations', () => {
  test.each`
    dieName              | die                | input | expectedResult
    ${'benefitDie'}      | ${benefitDie}      | ${1}  | ${emptyResult}
    ${'benefitDie'}      | ${benefitDie}      | ${2}  | ${emptyResult}
    ${'benefitDie'}      | ${benefitDie}      | ${3}  | ${{ ...emptyResult, success: 1 }}
    ${'benefitDie'}      | ${benefitDie}      | ${4}  | ${{ ...emptyResult, success: 1, advantage: 1 }}
    ${'benefitDie'}      | ${benefitDie}      | ${5}  | ${{ ...emptyResult, advantage: 2 }}
    ${'benefitDie'}      | ${benefitDie}      | ${6}  | ${{ ...emptyResult, advantage: 1 }}
    ${'complicationDie'} | ${complicationDie} | ${1}  | ${emptyResult}
    ${'complicationDie'} | ${complicationDie} | ${2}  | ${emptyResult}
    ${'complicationDie'} | ${complicationDie} | ${3}  | ${{ ...emptyResult, success: -1 }}
    ${'complicationDie'} | ${complicationDie} | ${4}  | ${{ ...emptyResult, success: -1 }}
    ${'complicationDie'} | ${complicationDie} | ${5}  | ${{ ...emptyResult, advantage: -1 }}
    ${'complicationDie'} | ${complicationDie} | ${6}  | ${{ ...emptyResult, advantage: -1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${1}  | ${emptyResult}
    ${'abilityDie'}      | ${abilityDie}      | ${2}  | ${{ ...emptyResult, success: 1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${3}  | ${{ ...emptyResult, success: 1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${4}  | ${{ ...emptyResult, success: 2 }}
    ${'abilityDie'}      | ${abilityDie}      | ${5}  | ${{ ...emptyResult, advantage: 1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${6}  | ${{ ...emptyResult, advantage: 1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${7}  | ${{ ...emptyResult, advantage: 1, success: 1 }}
    ${'abilityDie'}      | ${abilityDie}      | ${8}  | ${{ ...emptyResult, advantage: 2 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${1}  | ${emptyResult}
    ${'difficultyDie'}   | ${difficultyDie}   | ${2}  | ${{ ...emptyResult, success: -1 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${3}  | ${{ ...emptyResult, success: -2 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${4}  | ${{ ...emptyResult, advantage: -1 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${5}  | ${{ ...emptyResult, advantage: -1 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${6}  | ${{ ...emptyResult, advantage: -1 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${7}  | ${{ ...emptyResult, advantage: -2 }}
    ${'difficultyDie'}   | ${difficultyDie}   | ${8}  | ${{ ...emptyResult, advantage: -1, success: -1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${1}  | ${emptyResult}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${2}  | ${{ ...emptyResult, success: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${3}  | ${{ ...emptyResult, success: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${4}  | ${{ ...emptyResult, success: 2 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${5}  | ${{ ...emptyResult, success: 2 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${6}  | ${{ ...emptyResult, advantage: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${7}  | ${{ ...emptyResult, advantage: 1, success: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${8}  | ${{ ...emptyResult, advantage: 1, success: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${9}  | ${{ ...emptyResult, advantage: 1, success: 1 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${10} | ${{ ...emptyResult, advantage: 2 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${11} | ${{ ...emptyResult, advantage: 2 }}
    ${'proficiencyDie'}  | ${proficiencyDie}  | ${12} | ${{ ...emptyResult, triumph: 1, success: 1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${1}  | ${emptyResult}
    ${'challengeDie'}    | ${challengeDie}    | ${2}  | ${{ ...emptyResult, success: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${3}  | ${{ ...emptyResult, success: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${4}  | ${{ ...emptyResult, success: -2 }}
    ${'challengeDie'}    | ${challengeDie}    | ${5}  | ${{ ...emptyResult, success: -2 }}
    ${'challengeDie'}    | ${challengeDie}    | ${6}  | ${{ ...emptyResult, advantage: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${7}  | ${{ ...emptyResult, advantage: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${8}  | ${{ ...emptyResult, advantage: -1, success: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${9}  | ${{ ...emptyResult, advantage: -1, success: -1 }}
    ${'challengeDie'}    | ${challengeDie}    | ${10} | ${{ ...emptyResult, advantage: -2 }}
    ${'challengeDie'}    | ${challengeDie}    | ${11} | ${{ ...emptyResult, advantage: -2 }}
    ${'challengeDie'}    | ${challengeDie}    | ${12} | ${{ ...emptyResult, desperation: 1, success: -1 }}
    ${'forceDie'}        | ${forceDie}        | ${1}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${2}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${3}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${4}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${5}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${6}  | ${{ ...emptyResult, darkSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${7}  | ${{ ...emptyResult, darkSide: 2 }}
    ${'forceDie'}        | ${forceDie}        | ${8}  | ${{ ...emptyResult, lightSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${9}  | ${{ ...emptyResult, lightSide: 1 }}
    ${'forceDie'}        | ${forceDie}        | ${10} | ${{ ...emptyResult, lightSide: 2 }}
    ${'forceDie'}        | ${forceDie}        | ${11} | ${{ ...emptyResult, lightSide: 2 }}
    ${'forceDie'}        | ${forceDie}        | ${12} | ${{ ...emptyResult, lightSide: 2 }}
  `(
    'when rolling $input in $dieName it transforms the result with the correct operations',
    ({ die, input, expectedResult }) => {
      const operations = die[input];
      const result = operations.reduce((accum, op) => op(accum), emptyResult);
      expect(result).toEqual(expectedResult);
    },
  );
});
