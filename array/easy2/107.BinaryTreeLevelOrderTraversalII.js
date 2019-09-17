/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
/*var levelOrderBottom = function (root) {
  let result = [];
  if (!root) {
    return result;
  }

  let arr = getItems(root.left, root.right, result);
  if(arr.length > 0){
    result.push(arr);
  }
  result.push([root.val]);
  return result;
};

function getItems(left, right, result) {
  let arr = [];
  let leftArr = [];
  let rightArr = [];
  if (left) {
    arr.push(left.val);
    leftArr = getItems(left.left, left.right, result);
  }
  if (right) {
    arr.push(right.val);
    rightArr = getItems(right.left, right.right, result);
  }
  if (leftArr.length > 0 || rightArr.length > 0) {
    result.push(leftArr.concat(rightArr));
  }
  return arr;
}*/


var levelOrderBottom = function (root) {
  let result = [];
  if (!root) {
    return result;
  }
  let list = [];
  list.push(root);

  while (list.length > 0) {
    let arr = [];

    let len = list.length;
    for (let i = 0; i < len; i++) {
      let item = list.shift();
      // 保存当前节点的值
      arr.push(item.val);
      // 将子节点加入队列
      if (item.left) {
        list.push(item.left);
      }
      if (item.right) {
        list.push(item.right);
      }
    }
    if (arr.length > 0) {
      result.unshift(arr);
    }
  }
  return result;

};


/*let root = {
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
};*/
let root = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 2
  }
};
console.log(levelOrderBottom(root));