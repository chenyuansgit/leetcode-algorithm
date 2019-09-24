/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*var dfs = function (root, path, results) {
  path += root.val;

  if(root.left == null && root.right == null)
  {
    results.push(path);
    return;
  }

  if(root.left != null)
  {
    dfs(root.left, path + "->", results);
  }

  if(root.right != null)
  {
    dfs(root.right, path + "->", results);
  }
};*/

var dfs = function(root, path, results) {
  // 当前节点
  path += root.val;
  // 节点没有子节点，直接将路径加入result
  if(!root.left && !root.right){
    results.push(path);
    return;
  }
  // 存在左子节点
  if(root.left){
    dfs(root.left, path + '->', results);
  }
  // 存在右子节点
  if(root.right){
    dfs(root.right, path + '->', results);
  }
};
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let results = [];
  if(root == null)
  {
    return results;
  }

  dfs(root, "", results);

  return results;
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

const result = binaryTreePaths(list);
console.log(JSON.stringify(result)); //["1->2->5", "1->3"]