/**
 * @param {string} s
 * @return {number}
 */

/*
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28
 */
var titleToNumber = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i) - 65 + 1;
    let other = s.length - i - 1;

    if (other > 0) {
      result += code * Math.pow(26, other);
    } else {
      result += code;
    }
  }
  return result;
};


console.log(titleToNumber('A')); // 1
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('AZ')); //52
console.log(titleToNumber('ZY')); //701
console.log(titleToNumber('AAA')); //703