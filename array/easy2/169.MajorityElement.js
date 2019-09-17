/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement2 = function (nums) {
  let hash = {};
  let maxNum = Number.MIN_VALUE;
  let result = null;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    hash[num] = hash[num] ? hash[num] + 1 : 1;
    if (hash[num] > maxNum) {
      maxNum = hash[num];
      result = num;
    }
  }
  console.log("hash:", hash);
  return result;
};

var majorityElement = function (nums) {
  let mx = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[mx] == nums[i]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      mx = i;
      count = 1;
    }
  }
  return nums[mx];
};

//console.log(majorityElement([3, 2, 3])); // 3
//console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
//console.log(majorityElement([6, 5, 5])); // 5
console.log(majorityElement([5, 4, 5, 6, 5, 5])); // 5