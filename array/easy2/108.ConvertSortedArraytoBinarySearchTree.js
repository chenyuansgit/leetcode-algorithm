/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/*function insertData(root, val) {
  if (!root) {
    root = new TreeNode(val);
    return;
  }
  if (val >= root.val) {
    insertData(root.right, val);
  } else {
    insertData(root.left, val);
  }
  return;
}

var sortedArrayToBST = function (nums) {
  // 获取中位数
  let len = nums.length;
  let middleIndex = Math.floor(len / 2);
  let middleNum = nums[middleIndex];

  let root = new TreeNode(middleNum);
  for (let i = 0; i < len; i++) {
    console.log(i, nums[i]);
    if (i !== middleIndex && nums[i] >= middleNum) {
      insertData(root.right, nums[i]);

    }
    if (i !== middleIndex && nums[i] < middleNum) {
      insertData(root.left, nums[i]);

    }
  }
  return root;
};*/

var sortedArrayToBST = function (nums) {
  let start = 0;
  let end = nums.length - 1 ;
  return getBST(nums,start,end);
};

function getBST(nums, start, end) {
  if (nums.length == 1) {
    let treeNode = new TreeNode(nums[start]);
    return treeNode;
  } else {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      let treeNode = new TreeNode(nums[mid]);
      treeNode.left = getBST(nums, start, mid - 1);
      treeNode.right = getBST(nums, mid + 1, end);
      return treeNode;
    }
  }
  return null;
}

//console.log(sortedArrayToBST([1, 2, 3]));
console.log(sortedArrayToBST([-10,-3,0,5,9]));