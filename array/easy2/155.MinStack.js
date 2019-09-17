/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.len = 0;
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack[this.len++] = x;
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.len > 0) {
    return this.stack[this.len--];
  }
  return '';
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.len > 0) {
    return this.stack[this.len - 1];
  }
  return '';
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.len < 0) {
    return '';
  }
  let min = Number.MAX_VALUE;
  for (let i = 0; i < this.len; i++) {
    min = min > this.stack[i] ? this.stack[i] : min;
  }
  return min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
console.log(obj.push(3));
console.log(obj.push(-2));
console.log(obj.push(-4));
console.log(obj.push(1))
console.log(obj.pop());
console.log(obj.top());
console.log(obj.getMin());