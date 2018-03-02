/**
 * @param {number[]} nums
 * @return {number}
 */

// 最长连续数

var findMaxConsecutiveOnes = function (nums) {
    let res = 0;

    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            res = Math.max(res, tmp); // 比三目运算符效率高
            tmp = 0;
        } else {
            tmp++;
        }
    }
    res = Math.max(res, tmp);
    return res;
};
console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]));
console.log(findMaxConsecutiveOnes([1, 1, 1, 1, 1, 1]));