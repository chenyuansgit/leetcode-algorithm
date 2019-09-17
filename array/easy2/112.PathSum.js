/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  if (!root) {
    return false;
  }
  let value = root.val;
  if (value === sum && !root.left && !root.right) {
    return true;
  }
 /* if (value > sum) {
    return false;
  }*/

  let leftHsa = hasPathSum(root.left, sum - value);
  let rightHsa = hasPathSum(root.right, sum - value);
  return leftHsa || rightHsa;
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3,
      left: {
        val: 4
      }
    }
  },
  right: {
    val: 2,
    right: {
      val: 3,
      right: {
        val: 4
      }
    }
  }
};
console.log(hasPathSum(root, 10));