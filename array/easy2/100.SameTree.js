/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) {
    return true;
  } else if (p === null || q === null) {
    return false;
  }
  if (p.val === q.val) {
    // 对比左右子树
    let leftSame = isSameTree(p.left, q.left);
    let rightSame = isSameTree(p.right, q.right);
    return leftSame && rightSame;
  }
  return false;


};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let n1 = new TreeNode(1);
let n2 = new TreeNode(1);

console.log(isSameTree(n1, n2));