/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var getNumberStr = function (strArr) {
  // 将两个数组对照起来
  let hash = {};
  let arr = [];
  for (let i = 0; i < strArr.length; i++) {
    const item = hash[strArr[i]];
    if (!item) {
      hash[strArr[i]] = i + 1;
      arr[i] = i + 1;
    } else {
      arr[i] = item;
    }
  }
  console.log('arr:', arr);
  return arr.join('');
};
var wordPattern = function (pattern, str) {
  const arr1 = pattern.split('');
  const str1 = getNumberStr(arr1);
  //console.log('str1:', str1);

  const arr2 = str.split(' ');
  const str2 = getNumberStr(arr2);
  //console.log('str2:', str2);

  return str1 === str2;
};

console.log(wordPattern("abba", "dog cat cat dog")); // true
console.log(wordPattern("abba", "dog cat cat fish")); // false