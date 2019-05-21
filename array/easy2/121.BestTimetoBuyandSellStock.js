/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
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

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5