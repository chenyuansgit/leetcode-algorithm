/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if(numRows === 0){
    return [];
  }
  let result = [[1]];
  for(let i = 1; i < numRows; i++) {
    let currentArr = [];
    let preArr = result[i - 1] || [];
    for(let j = 0; j <= i; j++) {
      currentArr[j] = (preArr[j - 1] || 0) + (preArr[j] || 0);
    }
    result.push(currentArr);
  }
  return result;
};

console.log(generate(3));