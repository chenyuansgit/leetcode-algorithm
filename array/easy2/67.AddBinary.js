/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  // 交换长的在前面
  const len = a.length > b.length ? a.length : b.length;
  let result = '';
  let pre = 0;
  for (let i = 0; i < len; i++) {
    const aPoint = a.length - i - 1;
    const bPoint = b.length - i - 1;

    let aItem = Number(a[aPoint]) || 0;
    let bItem = Number(b[bPoint]) || 0;
    let sum = aItem + bItem + pre;

    result = (sum % 2) + result;
    if (sum >= 2) {
      pre = 1;
    } else {
      pre = 0;
    }
  }
  if (pre !== 0) {
    result = pre + result;
  }
  return result;
};

console.log(addBinary('101', '1'));
console.log(addBinary('1', '111'));


