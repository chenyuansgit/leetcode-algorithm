/**
 * @param {number[]} nums
 * @return {number}
 */

// 用hash对象
var majorityElement = function(nums) {
    let hashTable = {};

    let maxCount = 0;
    let maxIndex =  0;

    for(let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if(hashTable[element]) {
            hashTable[element]++;
        } else {
            hashTable[element] = 1;
        }

        if(hashTable[element] > maxCount) {
            maxCount = hashTable[element];
            maxIndex = i;
        }
    }
    return nums[maxIndex];
};

console.log(majorityElement([1,2,3,1,2,2]));