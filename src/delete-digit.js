const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  str = n.toString();
  if (+str[0] < +str[1]) {
    return +str.slice(1)
  } else {
    const minDigit = Math.min(...str.split('').map(item => Number(item)));
    let = position = str.lastIndexOf(minDigit.toString());
    return Number(str.slice(0, position) + str.slice(position + 1))

  }




}

module.exports = {
  deleteDigit
};
