'use strict';
const bubble = require('../bubble.js');
const testCases = require('../unsortedArr.js');
const testCaseAnswers = require('../sortedArr.js');

let testCase1 = testCases.one;
let testCase2 = testCases.two;
let testCase3 = testCases.three;

const testCaseAnswers1 = testCaseAnswers.one;
const testCaseAnswers2 = testCaseAnswers.two;
const testCaseAnswers3 = testCaseAnswers.three;

describe('Bubble Sort Testing', () => {
  it('Should sort an unsorted array', () => {
    expect(bubble(testCase1)).toEqual(testCaseAnswers1);
    expect(bubble(testCase2)).toEqual(testCaseAnswers2);
    expect(bubble(testCase3)).toEqual(testCaseAnswers3);
  });
});
