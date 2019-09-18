/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let hash = [];
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    // num可能是负数，取绝对值
    const tag = num >= 0 ? 1 : -1;
    const hashItem = hash[num * tag] || [];

    if (hashItem.length !== 0 && hashItem.indexOf(tag) !== -1) {
      return true;
    }

    hashItem.push(tag);
    hash[num * tag] = hashItem;
  }
  return false;
};

var containsDuplicate2 = function (nums) {
  return nums.length !== new Set(nums).size
};

console.log(containsDuplicate([1,2,3, 4])); // true

