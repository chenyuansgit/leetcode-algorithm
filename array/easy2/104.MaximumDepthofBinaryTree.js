/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if(!root) {
    return 0;
  }
  let result = 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  return result;
};

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 3
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 2,
    left: {
      val: 4,
      left: {
        val: 3
      },
      right: {
        val: 4
      }
    },
    right: {
      val: 3
    }
  }
};
console.log(maxDepth(root));