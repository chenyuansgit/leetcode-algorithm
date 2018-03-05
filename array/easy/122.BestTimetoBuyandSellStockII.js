/**
 * @param {number[]} prices
 * @return {number}
 */

// 股票：低买高卖
/*var maxProfit = function (prices) {
    let profile = 0;
    let stack = [];

    for (let i = 0; i < prices.length; i++) {
        // 波峰
        if (!(prices[i - 1] > prices[i]) && !(prices[i + 1] > prices[i])) {
            stack.push(prices[i]);
        }

        // 低谷
        if (!(prices[i - 1] < prices[i]) && !(prices[i + 1] < prices[i])) {
            stack.push(prices[i]);
        }
    }

    //console.log("stack:", stack);
    // 计算
    for (let i = 0; i < stack.length - 1; i++) {
        if (stack[i + 1] - stack[i] > 0) {
            profile += (stack[i + 1] - stack[i]);
            i += 1;
        }
    }

    return profile;
};*/

var maxProfit = function (prices) {
    let profile = 0;

    for (let i = 1; i < prices.length; i++) {
        profile += Math.max(prices[i] - prices[i-1], 0);
    }
    return profile;
};

console.log(maxProfit([0, 1, 2, 3]));
console.log(maxProfit([3, 2, 1, 0]));

console.log(maxProfit([1, 2, 3, 2, 6, 0]));