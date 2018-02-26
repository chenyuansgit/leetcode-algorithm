/**
 * @param {number[][]} matrix
 * @return {boolean}
 */

// tip：二维数组对角线问题 （r1 - c1 = r2 - c2）

var isToeplitzMatrix = function (matrix) {
    // 遍历元素，按r-c归类
    let hashTable = {};

    const rCount = matrix.length;
    const cCount = matrix[0].length;
    for (let i = 0; i < rCount; i++) {
        for (let j = 0; j < cCount; j++) {
            const index = i - j;
            if (!hashTable[index]) {
                hashTable[index] = [];
            }
            hashTable[index].push(matrix[i][j]);

            // 查看每一类的成员值是否相等
            if(hashTable[index].length > 0 && matrix[i][j] !== hashTable[index][0]) {
                return false;
            }
        }
    }
    /*console.log("hashTable:", hashTable);
    // 查看每一类的成员值是否相等
    for (let key in hashTable) {
        const values = hashTable[key];
        const isSame = values.every(function(element) {
            return element === values[0];
        });
        if(!isSame) {
            return false;
        }
    }*/
    return true;
};

console.log(isToeplitzMatrix([[1, 2, 3, 4], [5, 1, 2, 3], [9, 5, 1, 2]])); // true
console.log(isToeplitzMatrix([[1,2],[2,2]])); // false