/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
  //this.nums = nums;
  this.dp = [];
  this.dp[0] = nums[0] || 0;
  for(let i = 1; i < nums.length; i++) {
    this.dp[i] = this.dp[i-1] + nums[i];
  }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
 /* let sum = 0;
  for(let index = i; index <= j; index++){
    sum += this.nums[index];
  }
  return sum;*/
 //console.log('this.dp:', this.dp);
 return this.dp[j] - (this.dp[i- 1] || 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
console.log(obj.sumRange(0,2)); // 1
console.log(obj.sumRange(2,5)); // -1
console.log(obj.sumRange(0,5)); // -3