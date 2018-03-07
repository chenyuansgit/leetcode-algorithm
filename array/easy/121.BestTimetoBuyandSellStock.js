/**
 * @param {number[]} prices
 * @return {number}
 */
/*var maxProfit = function (prices) {
    let points = [];
    for (let i = 0; i < prices.length; i++) {
        // 波谷
        if (!(prices[i] > prices[i - 1]) && !(prices[i] > prices[i + 1])) {
            points.push(prices[i]);
        }
        // 波峰
        if (!(prices[i] < prices[i - 1]) && !(prices[i] < prices[i + 1])) {
            points.push(prices[i]);
        }
    }
    //console.log("points:", points);
    let max_profit = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            max_profit = Math.max(max_profit, points[j] - points[i]);
        }
    }
    return max_profit;
};*/

var maxProfit = function (prices) {
    let max_profit = 0, min = Number.POSITIVE_INFINITY;

    for (let i = 0; i < prices.length; i++) {
        /*max_profit = Math.max(max_profit, prices[i] - min);
        min = Math.min(min, prices[i]);*/

        if (prices[i] < min) min = prices[i];
        if (prices[i] - min > max_profit) max_profit = prices[i] - min;
    }
    //console.log("points:", points);
    return max_profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([4, 4])); //5