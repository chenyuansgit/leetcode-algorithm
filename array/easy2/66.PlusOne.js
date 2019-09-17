/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {

  let plusNumber = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const newNumber = digits[i] + plusNumber;
    if (newNumber < 10) {
      digits[i] = newNumber;
      plusNumber = 0;
      break;
    } else {
      digits[i] = newNumber % 10;
    }
  }
  if (plusNumber !== 0) {
    digits.unshift(plusNumber);
  }
  return digits;
};

console.log(plusOne([1, 2, 3]));
console.log(plusOne([9, 9, 9]));