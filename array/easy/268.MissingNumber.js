/**
 * @param {number[]} nums
 * @return {number}
 */

// 在同一个数组中用负数表示占位
/*var missingNumber = function (nums) {
    let hasZero = false;
    // 用负数表示占位
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let item = Math.abs(nums[i]);
        if(nums[item] !== undefined && nums[item] !== 0) {
            nums[item] = nums[item] < 0 ? nums[item] : nums[item] * -1;
        } else if(item === 0) {
            hasZero = true;
        } else {
            nums[item] = -1;
        }
        console.log("item", item, "nums:", nums);
    }

    console.log("hasZero:", hasZero);
    // 遍历数组看哪个数不是负数
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (item > 0 ) {
            return i;
        } else if (item === 0 && !hasZero) {
            return 0;
        }
    }
    return nums.length;
};*/
var missingNumber = function (nums) {
    let hasZero = false;
    // 用负数表示占位
    let n = nums.length;
    for (let i = 0; i < n; i++) {
        let item = Math.abs(nums[i]);
        if(nums[item] !== undefined) {
            if( nums[item] === 0) {
                hasZero = true;
            }
            nums[item] = -1 * Math.abs(nums[item]);
        } else {
            nums[item] = -1;
        }
        console.log("item", item, "nums:", nums);
    }

    console.log("hasZero:", hasZero);
    // 遍历数组看哪个数不是负数
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (item >= 0 ) {
            return i;
        } else if (item === 0 && !hasZero) {
            return 0;
        }
    }
    return nums.length;
};

/*var missingNumber = function(nums) {
    var hs = [];
    for (let i = 0; i < nums.length; i++) {
        hs[nums[i]] = 1;
    }
    // 遍历hs表，找出其中值不为1的项
    for (let i = 0; i < hs.length; i++) {
        if (hs[i] !== 1) {
            return i;
        }
    }
    return hs.length; // hs的最后一个
};*/

console.log(missingNumber([2,0])); // 1
console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([3, 0, 1])); //2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
//console.log(missingNumber([0])); //1
