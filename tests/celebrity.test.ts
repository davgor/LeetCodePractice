import { findCelebrityLeastEfficent, findCelebrityOofN } from '../src/celebrity';

const functionTypes = [ findCelebrityLeastEfficent, findCelebrityOofN ]

describe('testing find celebrity file', () => {
  functionTypes.forEach(function(findCelebrity) {
    test('3 is celebrity', () => {
      const matrix = [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 0, 0],
          [0, 0, 1, 0]
      ]
      expect(findCelebrity(matrix)).toBe(2);
    });
    test('3 is celebrity', () => {
      const matrix = [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 0, 1, 0]
      ]
      expect(findCelebrity(matrix)).toBe(2);
    });
    test('no one is celebrity', () => {
      const matrix = [
          [0, 0, 1, 0],
          [0, 0, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0]
      ]
      expect(findCelebrity(matrix)).toBe(-1);
    });
    test('1 one is celebrity', () => {
      const matrix = [
          [0, 0, 0, 0],
          [0, 0, 1, 0],
          [0, 1, 0, 0],
          [0, 0, 1, 0]
      ]
      expect(findCelebrity(matrix)).toBe(0);
    });
  });
});