/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = [1];
    for (let i = 1; i < rowIndex + 1; i++) {
        let pre = 0;
        for (let j = 0; j <= i; j++) {
            let tmp = res[j] || 0;
            res[j] = (pre || 0) + (res[j] || 0);
            pre = tmp;
        }
    }
    return res;
};

console.log(getRow(0));