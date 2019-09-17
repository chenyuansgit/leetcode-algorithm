/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
function removeElements(H, target) {
  if (!H) return null;
  if (H.val === target) return removeElements(H.next, target);

  H.next = removeElements(H.next, target);
  return H;
}

var removeElements2 = function (head, val) {
  if (!head) {
    return null;
  }
  // 删除当前节点
  if (head.val === val) {
    return removeElements2(head.next, val);
  } else {
    // 遍历下面的节点
    head.next = removeElements2(head.next, val);
    return head;
  }
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

/*const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: null
    }
  }
};*/
const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 6,
      next: {
        val: 3,
        next: {
          val: 4,
          next: {
            val: 5,
            next: {
              val: 6
            }
          }
        }
      }
    }
  }
};

//console.log(removeElements(list, 2));
console.log(removeElements2(list, 6));