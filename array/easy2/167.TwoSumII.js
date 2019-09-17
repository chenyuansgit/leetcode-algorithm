/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Runtime Error
var twoSum2 = function (numbers, target) {
  let hash = {};
  // 放到hash队列
  for (let i = 0; i < numbers.length; i++) {
    hash[numbers[i]] = hash[numbers[i]] ? hash[numbers[i]].push(i) : [i];
  }
  // 检查是否满足条件
  for (let i = 0; i < numbers.length; i++) {
    let left = numbers[i];
    let right = target - left;
    if (left === right && hash[right] && hash[right].length >= 2) {
      return [hash[numbers[i]][0] + 1, hash[numbers[i]][1] + 1];
    } else if (left !== right && hash[right]) {
      return [i + 1, hash[right][0] + 1];
    }
  }
  return [];
};

var twoSum = function (numbers, target) {
  let pointLeft = 0;
  let pointRight = numbers.length - 1;

  while (pointLeft < pointRight) {
    let sum = numbers[pointLeft] + numbers[pointRight];
    if (sum === target) {
      return [pointLeft + 1, pointRight + 1];
    } else if (sum < target) {
      pointLeft++;
    } else {
      pointRight--;
    }
  }
};

//console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
//console.log(twoSum([-2, 7, 11, 15], 5)); // [1,2]
console.log(twoSum([-5, -2, 7], -7));  // [1,3]