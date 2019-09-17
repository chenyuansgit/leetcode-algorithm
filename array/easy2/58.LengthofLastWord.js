/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let result = 0;
  if(!s) {
    return result;
  }
  s = s.trim();
  const arr = s.split(' ');
  const resArr = arr[arr.length - 1];
  return resArr.length;
};

console.log(lengthOfLastWord('hello worldi'));
console.log(lengthOfLastWord('aa bb ccc '));