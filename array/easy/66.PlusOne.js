/**
 * @param {number[]} digits
 * @return {number[]}
 */
// 给出一个由整型数组表示的非负数字，将这个数字加一。数组中的各元素表示该数字的各位，越靠前的元素权越大，即越靠前的元素在数字中也越靠前。

// 法一：把字符串转换成数组直接+ （会超出js的运算范围）
/*var plusOne = function(digits) {
    let digitsStr  = digits.join('');
    let oldNumber = +digitsStr;
    let newNumber = oldNumber + 1;

    console.log("oldNumber:", oldNumber, "newNumber:", newNumber);
    let newDigitsArr = String(newNumber).split('');
    // 将字符转换成数字
    for(let i = 0; i< newDigitsArr.length; i++) {
        newDigitsArr[i] = +newDigitsArr[i];
    }
    return newDigitsArr;
};*/

var plusOne = function (digits) {
    let plus = 1;
    for (let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] < 9 && plus) {
            digits[i] += plus;
            plus = 0;
        } else if(digits[i] === 9 && plus) {
            digits[i] = 0;
        }
    }
    if(plus) {
        digits.unshift(plus);
    }
    return digits;
};

console.log(plusOne([9, 9, 9, 9]));
console.log(plusOne([0, 1, 2, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));