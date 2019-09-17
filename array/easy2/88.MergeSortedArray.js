/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/*var merge = function(nums1, m, nums2, n) {
  // 将两个数组合并
  for(let i = 0; i < n; i++) {
    nums1[m+i] = nums2[i];
  }
  // 数组排序
  nums1.sort(function(n1, n2){
    return n1 - n2;
  });
  return nums1;
};*/

var merge = function (nums1, m, nums2, n) {
  // 数组总长度
  let allLen = m + n;

  // 从后开始遍历数组，当前位置的值设置为两个元素的最大值
  for (let i = allLen - 1, mPointer = m - 1, nPointer = n - 1; i >= 0, mPointer >= 0, nPointer >= 0; i--) {
    /*if (nums1[mPointer] >= nums2[nPointer]) {
      nums1[i] = nums1[mPointer];
      mPointer--;
    } else {
      nums1[i] = nums2[nPointer];
      nPointer--;
    }*/
    nums1[i] = (nums1[mPointer] >= nums2[nPointer]) ? nums1[mPointer--] : nums2[nPointer--];
  }
  return nums1;
};

console.log(merge([1, 2, 4, 0, 0], 3, [3, 5], 2));

/*console.log(merge([-10, -10, -9, -9, -9, -8, -8, -7, -7, -7, -6, -6, -6, -6, -6, -6, -6, -5, -5, -5, -4, -4, -4, -3, -3, -2, -2, -1, -1, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 9, 9, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  55,
  [-10, -10, -9, -9, -9, -9, -8, -8, -8, -8, -8, -7, -7, -7, -7, -7, -7, -7, -7, -6, -6, -6, -6, -5, -5, -5, -5, -5, -4, -4, -4, -4, -4, -3, -3, -3, -2, -2, -2, -2, -2, -2, -2, -1, -1, -1, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9],
  99));*/
