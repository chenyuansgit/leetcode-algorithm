/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root == null) return null;
  if (root == p) return p;
  if (root == q) return q;

  if(root.val > p.val&& root.val > q.val ) return lowestCommonAncestor(root.left, p, q);
  if(root.val < p.val&& root.val < q.val ) return lowestCommonAncestor(root.right, p, q);
  return root;
};


const list = {
  val: 6,
  left: {
    val: 2,
    left: {
      val: 0
    },
    right: {
      val: 4,
      left: {
        val: 3
      },
      right: {
        val: 5
      }
    }
  },
  right: {
    val: 8,
    left: {
      val: 7
    },
    right: {
      val: 9
    }
  }
};
console.log(lowestCommonAncestor(list, {val: 2}, {val: 8}));
console.log(lowestCommonAncestor(list, {val: 2}, {val: 4}));