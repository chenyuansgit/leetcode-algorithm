var twoSum = function (nums, target) {
  let result = [];
  // 把数组转换为对象
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    const keyname = nums[i];
    if(!obj[keyname]) {
      obj[keyname] = [i];
    } else {
      obj[keyname].push(i);
    }

  }

  //console.log("###obj:", obj);
  for (let key in obj) {
    let first = key;
    let second = target - first;
    if(obj[first] !== undefined && obj[second] !== undefined && obj[first].length >0 && obj[second].length > 0 ) {
      if(first == second && obj[first].length >= 2){
        result = [obj[first][0], obj[first][1]];

      } else {
        result = [obj[first][0], obj[second][0]];
      }
    }
  }

  return result.sort();
};

var twoSum2 = function (nums, target) {
  let result = [];
  let tmp = [];
  for(let i = 0; i < nums.length; i++) {
    const first = nums[i];
    const second = target - first;
    if(tmp[second] != undefined) {
      result = [tmp[second], i];
      break;
    }
    tmp[first] = i;
  }
  return result;
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum2([2,7,7,15], 14));