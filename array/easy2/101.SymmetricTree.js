/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*function getListValue(root, result) {
  if (!root) {
    return result;
  }
  getListValue(root.left, result);
  result.push(root.val);
  getListValue(root.right, result);
  return result;
}

var isSymmetric = function (root) {
  let arrLeft = [];
  let arrRight = [];
  if(!root) {
    return false;
  }
  getListValue(root.left, arrLeft);
  getListValue(root.right, arrRight);
  console.log(arrLeft, arrRight);

  if (arrLeft.length !== arrRight.length)
  {
    return false;
  }

  for (let i = 0; i < arrLeft.length; i++) {
    if (arrLeft[i] !== arrRight[arrRight.length - i - 1]) {
      return false;
    }
  }
  return true;
};*/

/*function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(2);*/

function compare(left, right) {
  if (!left && !right) {
    return true;
  } else if (!left || !right) {
    return false;
  } else if (left.val !== right.val) {
    return false;
  }
  let same1 = compare(left.left, right.right);
  let same2 = compare(left.right, right.left);
  return same1 && same2;
}

var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  return compare(root.left, root.right);
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
      val: 4
    },
    right: {
      val: 3
    }
  }
};

console.log(isSymmetric(root));