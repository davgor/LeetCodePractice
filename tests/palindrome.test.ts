import { palindromeBrute, palindromeOofN, palindromeDoublePointer } from '../src/palindrome';

const functionTypes = [ palindromeBrute, palindromeOofN, palindromeDoublePointer ]

describe('testing palindrome file', () => {
    functionTypes.forEach(function (palindrome) {
        test('AAABBBAAA is a palindrome', () => {
            expect(palindrome('AAABBBAAA')).toBe(true);
          });
          test('DAVID is not a palindrome', () => {
            expect(palindrome('DAVID')).toBe(false);
          });
          test('DAVAD is not a palindrome', () => {
            expect(palindrome('DAVAD')).toBe(true);
          });
          test('DAVMAD is not a palindrome', () => {
            expect(palindrome('DAVMAD')).toBe(false);
          });
          test('hih hih is a palindrome', () => {
            expect(palindrome('hih hih')).toBe(true);
          });
          test('123321 is a palindrome', () => {
            expect(palindrome(123321)).toBe(true);
          });
          test('123456 is not a palindrome', () => {
            expect(palindrome(123456)).toBe(false);
          });
          test('123.321 is a palindrome', () => {
            expect(palindrome(123.321)).toBe(true);
          });
    })
});