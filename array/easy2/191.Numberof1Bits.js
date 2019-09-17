/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight2 = function (n) {
  let result = 0;
  // 获取数字的二进制形式
  let bitsStr = n.toString(2);

  //console.log('bitsStr:', bitsStr);
  // 获取字符串中1的个数
  for (let i = 0; i < bitsStr.length; i++) {
    if (bitsStr[i] == 1) {
      result++;
    }
  }
  return result;
};

var hammingWeight = function (n) {
  let result = 0;
  while (n > 0) {
    if (n & 1) {
      result++;
    }
    n = Math.floor(n/2);
  }

  return result;
};

//console.log(hammingWeight(3)); // 2
console.log(hammingWeight(4294967293));  // 31
// SELECT w1.id FROM Weather w1, Weather w2 WHERE (DATEDIFF(w1.Date, w2.Date) = 1) AND w1.Temperature > w2.Temperature;

// cat file.txt | grep -E '^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$'