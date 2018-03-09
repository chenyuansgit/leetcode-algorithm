/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// 用hash实现（效率低）
/*var twoSum = function (numbers, target) {
    let hashTable = [];

    // 用hash表保存每个数的位置
    for (let i = 0; i < numbers.length; i++) {
        let item = numbers[i];
        if (!hashTable[item]) {
            hashTable[item] = [];
        }
        hashTable[item].push(i+1);
    }
console.log("hashTable:", hashTable);
    // 查询target
    for (let i = 0; i < hashTable.length; i++) {
        let num1 = i;
        let num2 = target - i;

        if (num1 === num2 &&  hashTable[num2] && hashTable[num2].length > 1) {
            return hashTable[num2][0] < hashTable[num2][1]
                ? [hashTable[num2][0], hashTable[num2][1]]
                : [hashTable[num2][1], hashTable[num2][0]];
        } else if (hashTable[num1] && hashTable[num2] && hashTable[num2].length > 0) {
            return  hashTable[num1][0] < hashTable[num2][0]
                ? [hashTable[num1][0], hashTable[num2][0]]
                : [hashTable[num2][0], hashTable[num1][0]];
        }
    }
    return [];
};*/

var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [1,2]
console.log(twoSum([-1, 0], -1)); // [1,2]

console.log(twoSum([0,0,3,4], 0)); // [1,2]
console.log(twoSum([5, 25, 75], 100)); // [2,3]