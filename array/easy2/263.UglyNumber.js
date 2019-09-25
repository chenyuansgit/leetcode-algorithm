/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  while (num >= 2){
    if(num % 2 === 0){
      num = num/2;
    } else if(num % 3 === 0){
      num = num/3;
    }else if(num % 5 === 0){
      num = num/5;
    } else {
      return false;
    }
  }
  return num === 1;
};

// Ugly numbers are positive numbers whose prime factors only include 2, 3, 5.
console.log(isUgly(6)); // true: 2*3
console.log(isUgly(14)); // false: 2*7