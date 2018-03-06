/**
 * @param {number[]} nums
 * @return {number}
 */

// 最简单方法：计算以某个数打头的所有字串的和(计算超时)
/*var maxSubArray = function (nums) {
    let maxSub = undefined;
    for (let i = 0; i < nums.length; i++) {
        let subSum = 0;
        for (let j = i; j < nums.length; j++) {
            subSum += nums[j];
            if(maxSub !== undefined){
                maxSub = Math.max(maxSub, subSum);
            } else {
                maxSub = subSum;
            }
        }
    }
    return maxSub ? maxSub : 0;
};*/

var maxSubArray = function (nums) {
    let maxSub = [];
    maxSub[0] = nums[0];
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxSub[i] = Math.max(maxSub[i - 1] + nums[i], nums[i]);
        res = Math.max(maxSub[i], res);
    }
    //console.log("maxSub:", maxSub);
    return res;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([3])); // 3
console.log(maxSubArray([-1])); // -1
console.log(maxSubArray([-1, 0, -2])); // 0