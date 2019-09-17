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
// todo：check error
var isBalanced = function (root) {
  let result = [];
  getDeepth(root, 0, result);
  console.log(result);

  let min = Number.MAX_VALUE;
  let max = 0;
  for (let i = 0; i < result.length; i++) {
    min = Math.min(result[i], min);
    max = Math.max(result[i], max);
  }
  let balance = max - min <= 1;
  return balance;
};

function getDeepth(root, deep1, deep2) {
  if(!root){
    return [deep1, deep2];
  }
  if(root.left){
    getDeepth(root.left, deep1+1, deep2)
  }
  if(root.right){
    getDeepth(root.right, deep1, deep2+1)
  }

  return [deep1, deep2];
}



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
/*let root = {
  val: 1,
  left: {
    val: 2
  },
  right: {
    val: 2
  }
};*/
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
//console.log(isBalanced(root));

console.log(getDeepth(root, 0, 0));