/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if(x < 0) {
    return false;
  }
  return `${x}` === `${x}`.split('').reverse().join('');
};

var isPalindrome2 = function(x) {
  if (x < 0) {
    return false;
  }
  var z = 1;
  var array = [];
  var left;
  do {
    z = z * 10;
    left = x % z;
    array.push(Math.trunc(left / (z / 10)));
  } while (left !== x);
  console.log("####:", array);
  return array.join('') === array.reverse().join('');
};

var isPalindrome3 = function(x) {
  if (x < 0) {
    return false;
  }
  if(x == 0) {
    return true;
  }
  let i = 10;
  let left = x;

  let arr = [];
  while(left > 0) {
    arr.push(left % i);
    left = Math.floor(left/i);
  }
  return `${x}` === arr.join('');
};

console.log(isPalindrome3(1010));