/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
/*var rotate = function (nums, k) {
    var n = nums.length;
    /!* while (len < k) {
         len = len + len;
     }*!/
    n = n - k;
    for (var j = 0; j < n; j++) {
        nums.push(nums[0]);
        nums.shift();
    }

    console.log("nums:", nums);
};*/

var rotate = function (nums, k) {
    var n = nums.length;
    // 处理当k > n 的情况
    if (k > n) {
        k %= n;
    }
    let to = n - k;
    // 将开头的元素追加到数组末尾
    for (var i = 0; i < to; i++) {
        nums.push(nums[i]);
    }
    // 截取字符串
    nums.splice(0, to);

    console.log("nums:", nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3); // [5,6,7,1,2,3,4]
rotate([1], 0); // [1]
rotate([1, 2], 1); // [2,1]
rotate([1, 2], 3); // [2,1]