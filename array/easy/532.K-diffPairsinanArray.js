/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    let count = 0;
    if (k < 0) {
        return count;
    }
    // 用hash对象：数 - 【索引】
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let item = nums[i];
        if (!hash[item]) {
            hash[item] = [];
        }
        hash[item].push(i);
    }
    //console.log("hash:", hash);
    // 遍历对象
    for (let item in hash) {
        let other = item - k;
        //console.log('0:', item, other, item == other);
        if (hash[other] && item != other) {
            //count += (hash[item].length * hash[other].length);
            //console.log('1:', item, other, hash[item].length * hash[other].length);
            count += 1;
        } else if (hash[other] && item == other && hash[other].length >= 2) {
            //const n = hash[other].length - 1;
            //count += ((n + 1) * n / 2);
            //console.log('2:', item, other, ((n + 1) * n / 2));
            count += 1;
        }
    }
    return count;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 1, 5], 0)); // 1
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4