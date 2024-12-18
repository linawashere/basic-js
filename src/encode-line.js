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
  let newStr = '';
  for (let i = 0, j = 1; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      j++;
    } else {
      if (j > 1) {
        newStr += j;
      }
      j = 1;
      newStr += str[i];
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
