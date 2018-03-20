/**
 * @param {number[]} nums
 * @return {number}
 */

/*
// 错误：有负数的时候会出错：[ <1 empty item>, 1, 1, '-2147483648': 1 ]
var thirdMax = function (nums) {
    // 用hashTable
    let hashTable = [];
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        hashTable[item] = 1;
    }
    console.log("hashTable:", hashTable);
    // 选择第三大的数
    let index = 0;
    let len = hashTable.length;
    for (let i = len; i >= 0; i--) {
        if (hashTable[i]) {
            index++;
        }
        //console.log("index:", index);
        if (index === 3) {
            return i;
        }
    }
    return len - 1;
};
*/


var thirdMax = function (nums) {
    // 用三个数表示三个数:从大到小
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let item1 = nums[i];
        for (let j = 0; j < 3; j++) {
            let pre = arr[j - 1];
            let item2 = arr[j];
            if (item2 === undefined || item1 > item2) {
                // 将数插在该数的前面
                if (item1 !== pre) {
                    arr.splice(j, 0, item1);
                }
                break;
            }
        }
    }
    console.log("arr:", arr);

    return  arr.length >= 3 ?  arr[2] : arr[0];

};

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1, 2, -2147483648])); //-2147483648