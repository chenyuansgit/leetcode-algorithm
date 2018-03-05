/**
 * @param {number[]} nums
 * @return {number}
 */

// tip：主要考察一维数组排序

// 效率更高
var arrayPairSum1 = function (nums) {
    const start = Date.now();
    if (nums.length < 2) {
        return 0;
    }
    // 从小到大排序
    nums.sort(function (a, b) {
        return a - b;
    });
    // 相邻每两对数min取和
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i + 1]);
    }
    console.log("new nums:", nums);
    const end = Date.now();
    console.log('1cost:', end - start);
    return sum;
};

var arrayPairSum = function (nums) {
    if (nums.length < 2) {
        return 0;
    }
    // 创建hash数组
    let hashTable = [];
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        hashTable[item + 10000] = hashTable[item + 10000] ? hashTable[item + 10000]+1 : 1;
    }
    //console.log("hashTable:", hashTable);
    // 遍历hash表
    let sum = 0;
    for (let i = 0, flag = 1; i < hashTable.length; i++) {
        if (hashTable[i] && flag === 1) {
            sum += i - 10000;
            flag = -flag;
        } else if (hashTable[i] && flag === -1) {
            flag = -flag;
        }

        if(hashTable[i]) {
            hashTable[i]--;
            i--;
        }
    }
    return sum;
};

/*console.log(arrayPairSum1([1, -3]));
console.log(arrayPairSum1([1, -3, 2, 4]));
console.log(arrayPairSum1([1,2,3,2]));
console.log(arrayPairSum1([-470, 66, -4835, -5623]));*/

console.log(arrayPairSum([1, -3]));
console.log(arrayPairSum([1, -3, 2, 4]));
console.log(arrayPairSum([1,2,3,2]));
console.log(arrayPairSum([-470, 66, -4835, -5623]));