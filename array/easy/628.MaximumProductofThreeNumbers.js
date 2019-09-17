/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    // 思路1：把数组从小到大排序， 最大的三个数的乘积为最大值（考虑有负数的情况）
    // 两个最小值*最大值，三个最大值
    if (nums.length < 3) {
        return 0;
    }

    nums.sort(function (a, b) {
        return a - b;
    });

    console.log("nums:", nums);

    let left = nums[0] * nums[1] * nums[nums.length - 1];
    let right = nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1];
    let max = Math.max(left, right);
    return max;
};

console.log(maximumProduct([0, 1, 2, -1])); // 0
console.log(maximumProduct([1,2,3,4])); // 0