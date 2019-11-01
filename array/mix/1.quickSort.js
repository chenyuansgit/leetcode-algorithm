// 用数组缓存left和right
function quickSort(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  // 获取中间数
  const middleIndex = Math.floor(nums.length / 2);

  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === middleIndex) {
      continue;
    }
    if (nums[i] >= nums[middleIndex]) {
      rightArr.push(nums[i]);
    }
    if (nums[i] < nums[middleIndex]) {
      leftArr.push(nums[i]);
    }
  }

  const sortLeft = quickSort(leftArr);
  const sortRight = quickSort(rightArr);
  return [...sortLeft, nums[middleIndex], ...sortRight];
}

//console.log(quickSort([9,4,1,5,8,5]));

function swap(nums, left, right) {
  console.log('nums1:', nums, left, right);
  if(nums && nums.length > 0){
    // 交换左右数的值
    const temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
  }
  console.log('nums2:', nums);
  return nums;
}

function splitByPoint(nums, left, right) {
  let midNum = nums[left];

  while (left < right) {
    while (left < right && nums[right] >= midNum) {
      right--;
    }
    //nums = swap(nums, left, right);

    while (left < right && nums[left] <= midNum) {
      left++;
    }
    nums = swap(nums, left, right);

  }
  console.log('###nums:', nums);
  return left;
}

function quickSortLeftAndRight(nums, left, right) {
  if(left < right){
    // 分割数组，找到分割点
    const mid = splitByPoint(nums, left, right);
    console.log('###mid:', mid);
   // quickSortLeftAndRight(nums, left, mid - 1);
   // quickSortLeftAndRight(nums, mid + 1, right);
  }
  return nums;
}

function quickSort2(arr) {
  const result = quickSortLeftAndRight(arr, 0, arr.length - 1);
  return result;
}

console.log(quickSort2([9, 4, 1, 5, 8, 5]));