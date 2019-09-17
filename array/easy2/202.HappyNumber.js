/**
 * @param {number} n
 * @return {boolean}
 */


var isHappy = function (n) {
  // 获取n的每一位数
  let arr = n.toString().split('');
  let sum = 0;
  arr.forEach(function (i) {
    sum += i * i;
  });
  if (sum == 1) {
    return true;
  }

  return isHappy(sum);
};

var isHappy2 = function (n) {
  let res = [];
  while (1) {
    let arr = n.toString().split('');
    let sum = 0;
    arr.forEach(function (i) {
      sum += i * i;
    });
    if (sum == 1)
      return true;
    if (res.includes(sum))
      return false;
    res.push(sum);
    n = sum;
  }
};

console.log(isHappy2(19)); // true
console.log(isHappy2(7)); // true