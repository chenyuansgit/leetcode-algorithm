/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  while (n !== 0 && n % 2 === 0) {
    n >>= 1;
  }
  return n === 1;
};

var isPowerOfTwo2 = function (n) {
  if (n <= 0)
    return false;

  while (n > 2) {
    if (n % 2 != 0)
      return false;
    n /= 2;
  }
  return true;
};
console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(12));// false
console.log(isPowerOfTwo(1));
