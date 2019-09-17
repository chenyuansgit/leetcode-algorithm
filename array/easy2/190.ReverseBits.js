/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // 获取二进制字符串
  let str = n.toString(2);
  //console.log('str1:', str);
  // 字符串倒序
  str = str.split('').reverse().join('').padEnd(32, '0');
  //console.log('str2:', str);
  // 将字符串转换成数字
  let res = parseInt(str, 2);
  return res;
};

console.log(reverseBits(43261596)); // 964176192 (00111001011110000010100101000000)