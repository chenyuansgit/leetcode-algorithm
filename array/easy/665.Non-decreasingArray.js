/**
 * @param {number[]} nums
 * @return {boolean}
 */
// 要是递增数列： [1,2,3]

var isOrder = function (nums) {
    let order = true;

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] < nums[i]) {
            return false;
        }
    }

    return order;
};
var checkPossibility = function (nums) {

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            let left = false, right = false;
            if (nums[i - 1] !== undefined) {
                nums[i] = nums[i - 1];
                left = isOrder(nums);
            }

            if (nums[i + 1] !== undefined) {
                nums[i] = nums[i + 1];
                right = isOrder(nums);
            }

            return left || right;
        }
    }

    return true;
};

//console.log(checkPossibility([4, 2, 3])); // true
//console.log(checkPossibility([4, 2, 1])); // false
//console.log(checkPossibility([3, 4, 2, 3])); // false
console.log(checkPossibility([2,3,3,2,4])); // true


var a = 'abcd';
a.len = 4;

a.toUpperCase();
console.log(a.len, typeof a, a, typeof checkPossibility, typeof null);

var c = {};
var d = {};

console.log("res:", c===d, c.test, c.test == null);

var a = true;
var b = true;
console.log(typeof a==b);