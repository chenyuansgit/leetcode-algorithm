/**
 * @param {number[]} nums
 * @return {number}
 */
// 需要排序
/*var findUnsortedSubarray = function (nums) {
    // 把数组从小到大排序
    const tmp = nums.concat([]);
    nums.sort(function (a, b) {
        return a - b;
    });
    //console.log(tmp, nums);
    // 找出跟原数组不一样的数
    let changes = [];
    for (let i = 0; i < nums.length; i++) {
        if(tmp[i] !== nums[i]) {
            changes.push(i);
        }
    }
    //console.log("changes:", changes);
    return changes[changes.length-1] - changes[0] + 1 || 0;
};*/

var findUnsortedSubarray = function (nums) {
    if (nums.length < 2) return 0;
    let n = nums.length, begin = -1, end = -2, min = nums[n - 1], max = nums[0];

    for (let i = 1; i < n; i++) {
        max = Math.max(max, nums[i]);
        min = Math.min(min, nums[n - i - 1]);
        if (nums[i] < max) end = i;
        if (nums[n - 1 - i] > min) begin = n - i - 1;
    }
    return end - begin + 1;

};


console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15])); // 5
console.log(findUnsortedSubarray([1, 2, 3, 4, 5])); // 0