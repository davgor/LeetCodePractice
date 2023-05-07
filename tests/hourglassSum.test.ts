import { hourglassSum } from '../src/hourglassSum';

describe('testing index file', () => {
  test('matrix result should be 28', () => {
    const matrix = [
        [-9, -9, -9, 1, 1, 1],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9, 1, 2, 3],
        [0, 0, 8, 6, 6, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]
    expect(hourglassSum(matrix)).toBe(28);
  });
  test('Matrix result should be 19', () => {
    const matrix = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ]
    expect(hourglassSum(matrix)).toBe(19);
  });
  test('Matrix result should be 7', () => {
    const matrix = [
        [1, 1, 1],
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 2],
        [0, 0, 0],
        [0, 0, 1]
    ]
    expect(hourglassSum(matrix)).toBe(7);
  });
  test('Matrix result should be 7', () => {
    const matrix = [
        [1, 1, 1],
        [0, 1, 0],
        [1, 1, 1]
    ]
    expect(hourglassSum(matrix)).toBe(7);
  });
  test('Matrix result should be 7', () => {
    const matrix = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0]
    ]
    expect(hourglassSum(matrix)).toBe(7);
  });
  test('Should error not tall enough', () => {
    const matrix = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
    ]
    expect(() => { hourglassSum(matrix) }).toThrow("No hourglass possible")
  });
  test('Should error not wide enough', () => {
    const matrix = [
        [1, 1],
        [0, 1],
        [1, 1],
        [0, 0],
        [0, 0],
        [0, 0]
    ]
    expect(() => { hourglassSum(matrix) }).toThrow("No hourglass possible")
  });
  test('Should error not tall or wide enough', () => {
    const matrix = [
        [1, 1],
        [0, 1]
    ]
    expect(() => { hourglassSum(matrix) }).toThrow("No hourglass possible")
  });
});