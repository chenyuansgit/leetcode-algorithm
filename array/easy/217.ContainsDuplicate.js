/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // 用hash对象记录数字出现的次数
    let hashTable = [];
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if(!hashTable[item]) {
            hashTable[item] = 1;
        } else {
            return true;
        }
    }
    return false;
};


console.log(containsDuplicate([1,2,3, 1]));