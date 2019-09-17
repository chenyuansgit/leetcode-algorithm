/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle === '') {
    return 0;
  }
  if (needle.length > haystack.length) {
    return -1;
  }

  for (let i = 0, point = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[point]) {
      point++;
      if (point === needle.length) {
        return i - needle.length + 1;
      }
    } else {
      i = i - point;
      point = 0;
    }
  }
  return -1;
};


console.log(strStr('ssabcee', 'abcs'));
console.log(strStr('mississippi', 'issip')); // 4
