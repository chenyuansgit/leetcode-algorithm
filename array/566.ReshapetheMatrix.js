/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */

// 遍历二维数组

var matrixReshape = function (nums, r, c) {
    if (r * c !== nums.length * nums[0].length) {
        return nums;
    }

    const res = [];
    for (let i = 0; i < r; i++) {
        res[i] = [];
    }
    console.log("res:", res);
    // 遍历元素
    let index = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[0].length; j++) {
            //console.log("index:", index, nums[i][j]);
            res[index].push(nums[i][j]);
            if (res[index].length === c) {
                index++;
            }
        }
    }
    return res;
};

//console.log(matrixReshape([[1, 2], [3, 4]], 1, 4));
//console.log(matrixReshape([[1, 2], [3, 4]], 2, 4));
console.log(matrixReshape([[1],[2],[3],[4]], 2, 2));