/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  let hash = {};
  for(let i = 0 ; i < nums.length; i++) {
    const num = nums[i];
    const index = hash[num];

    if(index !== undefined && i - index <= k){
      return true;
    }

    hash[num] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1,0,1,1], 1)); // true