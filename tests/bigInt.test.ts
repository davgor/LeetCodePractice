import { bigIntAttempt } from "../src/bigInt";

const functionTypes = [bigIntAttempt]

const testCases = [
    { num1: '3.5', num2: '3.75', answer: '7.25' },
    { num1: '13.5', num2: '3.75', answer: '17.25' },
    { num1: '13', num2: '3', answer: '16' },
    { num1: '99', num2: '1', answer: '100' },
    { num1: '99.9', num2: '.1', answer: '100' },
    { num1: '99', num2: '1.1', answer: '100.1' },
    { num1: '9990845698045398023438960943', num2: '784537892438092348094324325', answer: '10775383590483490371533285268' },
    { num1: '99908456980453960943.343466546563463', num2: '784532348094324325.24253252354', answer: '100692989328548285268.585999070103463' },

]

functionTypes.forEach(function (bigInt) {
    testCases.forEach(function (testCase) {
        test(`${testCase.num1} + ${testCase.num2} === ${testCase.answer}`, () => {
            expect(bigInt(testCase.num1, testCase.num2)).toBe(testCase.answer);
        });
    });
});