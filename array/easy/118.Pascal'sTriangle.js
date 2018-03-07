/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if(numRows <= 0) {
        return [];
    }
    let res = [[1]];
    for (let i = 1; i < numRows; i++) {
        let itemArr = [];
        for (let j = 0; j <= i; j++) {
            let item = 0;
            if (res[i - 1] !== undefined) {
                item = (res[i - 1][j - 1] || 0) + (res[i - 1][j] || 0);
            }
            itemArr.push(item);
        }
        res.push(itemArr);
    }
    return res;
};

console.log(generate(1));
console.log(generate(5));