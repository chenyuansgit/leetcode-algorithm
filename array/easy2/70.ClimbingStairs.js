/**
 * @param {number} n
 * @return {number}
 */
/*var climbStairs = function (n) {
  if (n  <= 2) {
    return n;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};*/

var climbStairs = function (n) {
  let dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

console.log(climbStairs(2));

console.log(climbStairs(5));