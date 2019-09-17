/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let startPoint = 0;
  let endPoint = s.length - 1;

  while (startPoint < s.length && startPoint < endPoint) {
    let startChar = s[startPoint].toLowerCase();
    let endChar = s[endPoint].toLowerCase();

    // 判断是否为字符
    let startIsChar = /^[0-9a-zA-Z]+$/.test(startChar);
    let endIsChar = /^[0-9a-zA-Z]+$/.test(endChar);

    // 非字母则移位
    if (!startIsChar) {
      startPoint++;
      continue;
    }
    if (!endIsChar) {
      endPoint--;
      continue;
    }

    // 比较字符值
    if (startIsChar && endIsChar && startChar !== endChar) {
      return false;
    }
    startPoint++;
    endPoint--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false
console.log(isPalindrome("0P")); // false
console.log(isPalindrome("a.")); // true