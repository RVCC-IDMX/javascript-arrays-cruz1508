/* eslint-disable no-unused-vars */
/*
 * arrays-04.js
 * Language: javascript
 * Test: tests/arrays-04.test.js
 * Path: src/arrays-04.js
 *
 * Description: Advanced array challenges.
 *
 * Concepts:
 *  - Uses Math.abs, splice, join, and the spread operator.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

/**
 * Returns the sum of the absolute values of numbers in an array.
 * @param {Array<number>} nums - The array of numbers.
 * @returns {number} The sum.
 */
function getAbsoluteSum(nums) {
  return nums.reduce((sum, num) => sum + Math.abs(num), 0);
}
/**
 * Creates a new array excluding any string elements.
 * @param {Array} arr - The array containing various data types.
 * @returns {Array} A new array with only non-string elements.
 */
function removeStrings(arr) {
  return arr.filter(item => typeof item !== 'string');
}

/**
 * Finds and returns the minimum and maximum values in an array.
 * @param {Array<number>} arr - The array of numbers.
 * @returns {Array<number>} An array [min, max] or [] if empty.
 */
function findMinMax(arr) {
  return arr.length ? [Math.min(...arr), Math.max(...arr)] : [];
}
/**
 * Formats an array of 10 digits into a telephone number string.
 * Format: (123) 456-7890
 * @param {Array<number>} numbers - An array with 10 digits.
 * @returns {string} The formatted telephone number.
 */
function getTelNo(numbers) {
  return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(6).join('')}`;
}

module.exports = {
  getAbsoluteSum,
  removeStrings,
  findMinMax,
  getTelNo,
};