/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let differencePoint = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[differencePoint] !== nums[i]) {
      differencePoint++;
      nums[differencePoint] = nums[i];
    }
  }
  nums.length = differencePoint + 1;
  //console.log('nums:', nums);
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));