const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  str = str + '$';
  let counter = 1;
  newStr = '';
 for (let i = 0; i < str.length - 1; i++) {
    if (str[i] == str[i + 1]) {
      counter++;
    } else {
      newStr += counter > 1 ? `${counter}${str[i]}` : str[i];
      counter = 1;
    }
 }
 return newStr;
}

module.exports = {
  encodeLine
};
