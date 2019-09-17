/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let comparePoint = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      comparePoint++;
      nums[comparePoint] = nums[i];
    }
  }
  nums.length = comparePoint + 1;
  console.log("nums:", nums);
  return nums.length;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

console.log(removeElement([0, 0], 0));