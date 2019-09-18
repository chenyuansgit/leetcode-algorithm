/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) {
    return root;
  }
  // 交换左右子树节点的值
  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  // 交换左子树
  root.left = invertTree(root.left);
  // 交换右子树
  root.right = invertTree(root.right);

  return root;
};