/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const simple = {
    '}': '{',
    ']': '[',
    ')': '('
  };
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    const prev = arr[arr.length - 1] || '';
    const now = s[i];
    //console.log(prev, now, simple[now]);
    if (simple[now] === prev) {
     //arr.pop();
      arr.length--;
    } else {
      arr.push(now);
    }
  }
  //console.log("arr:", arr);
  const result = arr.length === 0 ? true : false;
  return result;
};

console.log(isValid('()[]{}'));
console.log(isValid('{[}]'));