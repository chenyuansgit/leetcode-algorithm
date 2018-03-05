/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let res = 0;

    // 将重复的元素置为null
    for (let i = 0, j = 1; i < nums.length; ) {
        if (nums[i] === nums[j]) {
            nums[j] = null;
            j++;
        } else {
            res += 1;
            i = j;
            j++;
        }
    }
    //console.log("nums1:", nums);

    // 删除值为null的元素
    for (let i = 0, j = 1; i < nums.length && j < nums.length;) {
        if (nums[i] !== null) {
            i++;
            j++;
        } else if (nums[i] === null && nums[j] !== null) {
            nums[i] = nums[j];
            nums[j] = null;
            i++;
            j++;
        } else if (nums[i] === null && nums[j] === null) {
            j++;
        }
    }
    //console.log("nums2:", nums);
    return res;
};

// 不懂
/*var removeDuplicates = function (nums) {
    if (nums.length == 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
        console.log("nums:", nums);
    }

    return i + 1;
};*/
console.log(removeDuplicates([1, 1, 2]));
console.log(removeDuplicates([1, 1, 1, 2, 2, 4, 6]));
console.log(removeDuplicates([1, 1, 2, 2, 4, 6]));
console.log(removeDuplicates([1, 1, 2, 2, 4, 4, 6]));