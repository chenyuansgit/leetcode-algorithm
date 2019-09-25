/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let hash = [];
  // 将nums中的数据放入hash
  for(let i = 0 ; i < nums.length; i++){
    const num = nums[i];
    hash[num] = 1;
  }
  // 找出hash中不存在的数
  for(let i = 0 ; i < hash.length; i++) {
    if(!hash[i]){
      return i;
    }
  }
  return hash.length;
};

console.log(missingNumber([3,0,1])); // 2
console.log(missingNumber([0])); // 1