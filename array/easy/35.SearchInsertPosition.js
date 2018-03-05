/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/*var searchInsert = function (nums, target) {
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            index = i;
            break;
        } else {
            index = i + 1;
        }
    }
    return index;
};*/

var searchInsert = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i;
        }
    }
    return nums.length;
};
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 0)); // 0
console.log(searchInsert([1, 3, 5, 6], 7)); // 4