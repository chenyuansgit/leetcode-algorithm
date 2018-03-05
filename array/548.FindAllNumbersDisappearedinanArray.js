/**
 * @param {number[]} nums
 * @return {number[]}
 */

// hash表获取不存在的数：用了额外空间

/*var findDisappearedNumbers = function (nums) {
    let hashTable = [];
    let res = [];
    // 获取最大值和最小值
    let max = nums.length;
    let min = 1;

    for (let i = 0; i < nums.length; i++) {
        hashTable[nums[i]] = 1;
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[i]);
    }

    for(let i = min; i <= max; i++) {
        if(!hashTable[i]) {
            res.push(i);
        }
    }
    return res;
};*/

// 用负数表明存在，不用额外空间
var findDisappearedNumbers = function (nums) {
    let res = [];
    // 获取最大值和最小值
    let max = nums.length;
    let min = 1;

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        // 该数对应的index不存在
        if (index >= 0 && !nums[index]) {
            nums[index] = -1;
        }
        // 该数对应的index存在
        if (nums[index] > 0) {
            nums[index] *= -1;
        }
        // 获取最小值，最大值
        if (nums[i]) {
            max = Math.max(max, Math.abs(nums[i]));
            min = Math.min(min, Math.abs(nums[i]));
        }

    }
    //console.log("nums:", nums, min, max);
    for (let i = min; i <= max; i++) {
        if (!nums[i - 1] || nums[i - 1] > 0) {
            res.push(i);
        }
    }
    return res;
};
console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([1, 11]));