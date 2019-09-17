/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  let count = 0;

  while (n !== 0) {
    count += Math.floor(n / 5);
    n /= 5;
  }

  return count;
};

console.log(trailingZeroes(3)); // 0
console.log(trailingZeroes(5)); // 1
//console.log(trailingZeroes(10)); // 2
console.log(trailingZeroes(30)); // 7