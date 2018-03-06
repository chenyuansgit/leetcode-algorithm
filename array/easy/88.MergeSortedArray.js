/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    // 将nums2追加到nums1
    for (let i = 0; i < n; i++) {
        //nums1.push(nums2[i]);
        nums1[m++] = nums2[i];
    }

    // 将nums1重新排序
    nums1.sort(function (a, b) {
        return a - b;
    });

    console.log("nums1:", nums1);
};

merge([1, 2, 3, 4], 4, [2, 3], 2);
merge([0], 0, [1], 1); // [1]