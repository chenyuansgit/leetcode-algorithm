/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  if (n <= 2) {
    return 0;
  }
  // 构建hash
  let hash = Array(n).fill(0);

  let count = 0;
  // 依次遍历hash，将不是质数的item设置为1
  for (let i = 2; i < n; i++) {
    if (!hash[i]) { // 质数
      count++;
      for (let time = 2; time * i < n; time++) {
        hash[time * i] = 1;
      }
      //console.log("hash:", i, hash);
    }
  }

  return count;
};

console.log(countPrimes(10)); // 4 [2, 3, 5, 7]
console.log(countPrimes(2)); // 0
console.log(countPrimes(3)); // 2 [2]