/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  let result = [1];
  if (rowIndex < 0) return [];
  if (rowIndex === 0) return result;
  for (let i = 1; i <= rowIndex; i++) {
    let len = result.length;

    let pre = result[0] || 0;
    for (let j = 1; j <= len; j++) {
      let now = result[j] || 0;
      result[j] = pre + now;
      pre = now;
    }
  }
  return result;
};

console.log(getRow(3));