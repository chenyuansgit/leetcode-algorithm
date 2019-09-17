/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let result = 0;

  let buy = Number.MAX_VALUE;
  for(let i = 0; i < prices.length; i++) {
    // 卖
    let sum = prices[i] - buy;
    if(sum >= 0){
      result += sum;
    }
    // 买
    buy = prices[i];
  }
  return result;
};


console.log(maxProfit([7,1,5,3,6,4])); //7