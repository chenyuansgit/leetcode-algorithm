/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = [];
    // 获取最大值和最小值
    let max = nums.length;
    let min = 1;

    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;

        // 该数对应的index不存在
        if(index >= 0 && !nums[index]) {
            nums[index] = -1;
        }
        // 该数对应的index存在
        if(nums[index] > 0) {
            nums[index] *= -1;
        }
        // 获取最小值，最大值
        if(nums[i]) {
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