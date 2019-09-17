/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for(let i = 0; i < flowerbed.length; i++) {
        let left = flowerbed[i-1] || 0;
        let right = flowerbed[i+1] || 0;
        if(flowerbed[i] === 0) { // 位置空闲
            if(left === 0 && right === 0) { // 左右都为空
                n--;
                flowerbed[i] = 1;
            }
        }
    }
    return n <= 0;
};

console.log(canPlaceFlowers([1,0,0,0,1], 1)); // true
console.log(canPlaceFlowers([1,0,0,0,1], 2)); // false
console.log(canPlaceFlowers([1,0,0,1,0], 2)); // false
console.log(canPlaceFlowers([0,0,1,0,1], 1)); // true
console.log(canPlaceFlowers([0,0,1,0,0], 1));  // true
