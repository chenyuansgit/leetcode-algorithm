/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray2 = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    const sum = pre + nums[i];
    if (nums[i] > sum) {
      pre = nums[i];
    } else {
      pre = sum;
    }
    max = Math.max(pre, max);
  }
  return max;
};

var maxSubArray = function (nums) {
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < nums.length; i++) {
    const preMax = nums[i - 1] || 0;
    const nowMax = Math.max(preMax + nums[i], nums[i]);

    // 将元素设置为当前为止的最大值
    nums[i] = nowMax;
    max = Math.max(nowMax, max);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); //6
console.log(maxSubArray([-2, 1, -3])); // 1
console.log(maxSubArray([-2])); // -2