const { NotImplementedError } = require('../lib');

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

function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let additionStr = '';
  if (options.addition !== undefined) {
    const addition = typeof options.addition === 'string' ? options.addition : String(options.addition);

    const additionArray = [];
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArray.push(addition);
    }
    additionStr = additionArray.join(additionSeparator);
  }

  const mainString = str + additionStr;

  const resultArray = [];
  for (let i = 0; i < repeatTimes; i++) {
    resultArray.push(mainString);
  }

  return resultArray.join(separator);
}

module.exports = {
  repeater
};
