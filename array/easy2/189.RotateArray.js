/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 不通过
var rotate2 = function (nums, k) {
  let len = nums.length;
  for (let i = 0; i < k; i++) {
    let pre = nums.slice(0, len - 1);
    let last = nums.slice(len - 1);
    nums = last.concat(pre);
    //console.log('nums:', nums);
  }
  return nums;
};

var rotate = function (nums, k) {
  let len = nums.length;
  if (k > len) {
    k %= len;
  }
  let move = len - k;
  for (let i = 0; i < move; i++) {
    nums.push(nums[i]);
  }
  //console.log('nums:', nums);
  nums.splice(0, move);
};

var rotate3 = function (nums, k) {
  let len = nums.length;
  if (k > len) {
    k %= len;
  }

  for (let i = 0; i < k; i++) {
    let last = nums[len - 1];
    nums.unshift(last);
  }
  nums.length = len;
};

//console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
//console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]

let nums = [1, 2, 3, 4, 5, 6, 7];
console.log(rotate(nums, 3)); // [5,6,7,1,2,3,4]

console.log('result:', nums);