/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// 运算时间太长
/*var findMaxAverage = function (nums, k) {
    // 思路：从左到右依次遍历
    if (nums.length < k || k <= 0) {
        return 0;
    }


    let max = Number.NEGATIVE_INFINITY;
    for (let i = 0; i <= nums.length - k; i++) {
        let sum = 0;
        let tmp1 = [];
        let tmp2 = [];
        for (let j = 0; j < k; j++) {
            sum += nums[i + j] || 0;
            tmp1.push(i+j);
            tmp2.push(sum);
        }
        console.log("tmp:", tmp1, tmp2);
        max = Math.max(max, sum / k);
    }

    return max;
};*/


var findMaxAverage = function (nums, k) {
    // 思路：从左到右依次遍历
    if (nums.length < k || k <= 0) {
        return 0;
    }


    let max = Number.NEGATIVE_INFINITY;

    // 计算第一个连数和
    let pre = 0;
    for (let i = 0; i < k; i++) {
        pre += nums[i];
    }
    max = Math.max(pre, max);
    // 计算以后的连数和：上一个连数和+当前数 - 第一个数
    for (let i = k; i < nums.length; i++) {
        pre = pre + nums[i] - nums[i - k];
        max = Math.max(pre, max);
    }
    return max / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4)); // 12.75
console.log(findMaxAverage([5], 1)); // 5
console.log(findMaxAverage([-1], 1));  // -1