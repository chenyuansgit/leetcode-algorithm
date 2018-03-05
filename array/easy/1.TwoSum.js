/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hashTable = {};

    // 用hash对象将数值和索引标记
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (!hashTable[item]) {
            hashTable[item] = [];
        }
        hashTable[item].push(i);
    }

    //console.log("hashTable:", hashTable);
    for (let key in hashTable) {
        const item = key;
        const other = target - item;
        if(item == other && hashTable[other].length >= 2) {
            return [hashTable[item][0], hashTable[item][1]];
        } else if(hashTable[other]) {
            return [hashTable[item][0], hashTable[other][0]];
        }
    }
    return [];
};

//console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([2, 6, 2, 15], 4));