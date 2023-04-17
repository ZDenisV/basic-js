const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0,  additionSeparator = '|'}) {

  if (str === null) str = 'null';
  if (addition === null) addition = 'null';
  if (typeof(str) === 'object') str = `${str}`;
  if (typeof(addition) === 'object') addition = `${addition}`;



  const _repeater = (string, addString, rep) => {
    let newString = (string + addString).repeat(rep)
    return newString.slice(0, newString.length - addString.length)
  }

  let result = '';


  if (!repeatTimes && !additionRepeatTimes) {
    result =  str.toString() + addition.toString();
  }

  if (repeatTimes && !additionRepeatTimes) {
    result = _repeater(str.toString() + addition.toString(), separator, repeatTimes)
  }

  if (repeatTimes && additionRepeatTimes) {
    result = _repeater((str.toString() + _repeater(addition.toString(), additionSeparator, additionRepeatTimes)), separator, repeatTimes);
  }

  return result;
}
module.exports = {
  repeater
};
