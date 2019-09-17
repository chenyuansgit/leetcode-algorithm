/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const str = x >= 0 ? `${x}` : `${-x}`;
  const arr = str.split('');
  const reverseArr = arr.reverse();

  let result = '';
  if(x >= 0) {
    result = 1 * reverseArr.join('');
  } else {
    result = -1 * reverseArr.join('');
  }

  if(result > 2**31 - 1 || result < -1 * 2**31){
    result = 0;
  }
  return result;
};

console.log(reverse(1534236469));