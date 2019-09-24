/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  // 如果num位数小于2，直接返回
  if(num/10 < 1){
    return num;
  }

  let newNum = 0;
  while (num >= 1){
    newNum += num%10;
    num = (num - num%10)/10;
    //console.log('num:', num);
  }
  //console.log('newNum:', newNum);
  return addDigits(newNum);
};

console.log(addDigits(38)); // 2  : 3 + 8 = 11, 1 + 1 = 2
console.log(addDigits(39)); // 3
console.log(addDigits(101)); // 2