/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 把0移到数组最后面
var moveZeroes = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] === 0 && nums[j + 1] !== 0) {
                // 交换当前和下一个数的位置
                nums[j] = nums[j + 1];
                nums[j + 1] = 0;
            }
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0, 0, 0, 3, 12]));