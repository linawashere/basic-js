const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(/* arr */) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const resArr = [];
  const length = arr.length;
  let skipNext = false;

  for (let i = 0; i < length; i++) {
    const item = arr[i];

    if (skipNext) {
      skipNext = false;
      continue;
    }

    if (item === '--discard-next') {
      skipNext = true;
      continue;
    } 

    if (item === '--discard-prev') {
      if (resArr.length > 0) {
        resArr.pop();
      }
      continue;
    }

    if (typeof item === 'number') {
      resArr.push(item);
    }
  }

  return resArr;
}

module.exports = {
  transform
};
