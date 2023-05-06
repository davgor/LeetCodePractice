import { reverseArraySimple, reverseArrayManual } from '../src/reverseArray';

const functionTypes = [ reverseArraySimple, reverseArrayManual ]

describe('testing reverse array file', () => {
  functionTypes.forEach(function (reverseArray) {
    test('[1, 2, 3, 4]', () => {
      expect(reverseArray([1, 2, 3, 4])).toStrictEqual([4, 3, 2, 1]);
    });
    test('[0, 4, 3, 2]', () => {
      expect(reverseArray([0, 4, 3, 2])).toStrictEqual([2, 3, 4, 0]);
    });
  })
});