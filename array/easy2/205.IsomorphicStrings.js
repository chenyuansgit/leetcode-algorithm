/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // 看两个字符串长度是否相同
  if (s === t) {
    return true;
  }
  if (s.length !== t.length) {
    return false;
  }
  // 处理第一个字符串
  let aNum =  '';
  let bNum =  '';
  for (let i = 0; i < s.length; i++) {
    let pre1 = s[i - 1] || '';
    let now1 = s[i];

    let pre2 = t[i - 1] || '';
    let now2 = t[i];


    let numPre1 = aNum[aNum.length - 1] || 0;
    let numPre2 = bNum[bNum.length - 1] || 0;


    if (now1 != pre1) {
      aNum = aNum + (Number(numPre1) + 1);
    } else {
      aNum = aNum + numPre1;
    }

    if (now2 != pre2) {
      bNum = bNum + (Number(numPre2) + 1);
    } else {
      bNum = bNum + numPre2;
    }
  }
  //console.log("anum:", aNum);
  //console.log("bNum:", bNum);
  return aNum == bNum;
};


console.log(isIsomorphic('app', 'abc'));
console.log(isIsomorphic('app', 'egg')); // true
console.log(isIsomorphic('paper', 'title')); // true