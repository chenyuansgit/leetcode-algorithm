/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
/*var removeElement = function (nums, val) {
    // 把所有值为val的元素置为null
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === val) {
            nums[i] = null;
        } else {
            res++;
        }
    }

    // 把值为null的元素放到数组最后
    for (let i = 0, j = 1; i < nums.length && j < nums.length;) {
        if (nums[i] !== null) {
            i++;
            j++;
        } else if(nums[i] === null && nums[j] !== null) {
            nums[i] = nums[j];
            nums[j] = null;
            i++;
            j++;
        } else if(nums[i] === null && nums[j] === null) {
            j++;
        }
    }
    console.log("nums:", nums);
    return res;
};*/

var removeElement = function (nums, val) {
    // 把所有值为val的元素置为null
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            res++;
        }
    }

    // 把值为null的元素放到数组最后
    let i = 0, j = 1;
    while ( i < nums.length && j < nums.length) {
        if (nums[i] !== val) {
            i++;
            j++;
        } else if(nums[i] === val && nums[j] !== val) {
            nums[i] = nums[j];
            nums[j] = val;
            i++;
            j++;
        } else if(nums[i] === val && nums[j] === val) {
            j++;
        }
    }
    //console.log("nums:", nums);
    return res;
};

console.log(removeElement([3,2,2,3], 3)); //2
console.log(removeElement([2], 3)); // 1