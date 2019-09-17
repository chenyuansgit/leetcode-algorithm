/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit2 = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    let buy = prices[i];
    for (let j = i; j < prices.length; j++) {
      let sell = prices[j];
      let order = sell - buy;
      max = Math.max(order, max);
    }
  }
  return max;
};

var maxProfit = function (prices) {
  let max = 0;
  let buy = Number.MAX_VALUE;
  for (let i = 0; i < prices.length; i++) {
    // 买
    buy = Math.min(buy, prices[i]);

    // 卖
    let sell = prices[i] - buy;
    max = Math.max(sell, max);
  }
  return max;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([5, 4, 3])); // 0