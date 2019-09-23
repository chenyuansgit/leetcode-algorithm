/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if(!head) {
    return false;
  }
    // 遍历到末尾,构造双向链表
   let start = end = head;
   while (end.next){
     if(end.next){
       end.next.pre = end;
     }
     end = end.next;
   }
   // 依次对比start和end的值
  while (start && end){
    //console.log('###:', start.val, end.val);
     if(start.val !== end.val){
       return false;
     }
     start = start.next;
     end = end.pre;
  }

  return true;
};
// 1->2->2->1  true

const list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 1
    }
  }
};
console.log(isPalindrome(list));