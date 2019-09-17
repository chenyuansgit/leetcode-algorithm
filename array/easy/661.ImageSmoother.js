/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    const nx = M.length;
    const ny = M[0].length;

    let res = [];

    for (let i = 0; i < nx; i++) {
        res[i] = [];
        for (let j = 0; j < ny; j++) {
            res[i][j] = smooth(M, i, j);
        }
    }

    return res;
};

var smooth = function (M, x, y) {
    const nx = M.length;
    const ny = M[0].length;

    let sum = 0;
    let count = 0;

    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (x + i < 0 || x + i >= nx || y + j < 0 || y + j >= ny) {
                continue;
            }

            count++;
            sum += M[x + i][y + j];
        }
    }

    let result = Math.floor(sum / count);
    return result;
};


console.log(imageSmoother([[1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]]));