/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    // 用hash对象记录数字出现的次数
    let hashTable = [];
    for(let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if(hashTable[item] === undefined) {
            hashTable[item] = i;
        } else {
            let diff = i - hashTable[item];
            if(diff <= k) {
                return true;
            } else {
                hashTable[item] = i;
            }
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,4,1], 4));