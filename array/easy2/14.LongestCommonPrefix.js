/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let result = '';
  const strLen = strs[0] ? strs[0].length : 0;
  for (let i = 0; i < strLen; i++) {
    let code = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (code !== strs[j][i]) {
        return result;
      }
    }
    result += code;
  }
  return result;
};

const longestCommonPrefix2 = (strs) => {
  if (!strs || !strs.length) return '';
  strs.sort();

  let result = '';
  strs = [strs[0], strs[strs.length - 1]];
  for(let i = 0; i < strs[0].length; i++) {
    if(strs[0][i] !== strs[1][i]) {
      return result;
    }
    result += strs[0][i];
  }
  return result;
};
console.log(longestCommonPrefix2(["flower", "flow", "flight"]));
//console.log(longestCommonPrefix2(["aflower", "flow", "flight"]));
//console.log(longestCommonPrefix2(["aa1", "ab4", "a3"]));