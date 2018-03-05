/**
 * @param {number[][]} grid
 * @return {number}
 */

// 计算岛面积：递归
var getNearbyOne = function (grid, i, j, flagArr) {
    if (grid[i] && grid[i][j] === 1 && flagArr[i] && !flagArr[i][j]) {
        //console.log(i, j, grid[i][j]);
        flagArr[i][j] = 1;
        return 1 + getNearbyOne(grid, i, j - 1, flagArr)
            + getNearbyOne(grid, i, j + 1, flagArr)
            + getNearbyOne(grid, i - 1, j, flagArr)
            + getNearbyOne(grid, i + 1, j, flagArr);
    } else if (flagArr[i]) {
        flagArr[i][j] = 1;
    }

    return 0;
};

var maxAreaOfIsland = function (grid) {
    let max = 0;
    let flagArr = [];
    for (let i = 0; i < grid.length; i++) {
        flagArr.push([]);
    }
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (flagArr[i] && !flagArr[i][j]) {
                const count = getNearbyOne(grid, i, j, flagArr);
                max = Math.max(max, count);
            }
        }
    }
    return max;
};


console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));

console.log(maxAreaOfIsland([[0, 0, 0, 0, 0, 0, 0, 0]]));