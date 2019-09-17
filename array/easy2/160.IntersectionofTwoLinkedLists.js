/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  // 遍历循环a队列
  while (headA) {
    headA.scan = true;
    headA = headA.next;
  }
  // 遍历循环b队列
  while (headB) {
   if(headB.scan === true){
     return headB;
   }
   headB = headB.next;
  }
  return null;
};


var getIntersectionNode2 = function(headA, headB) {
  if(!headA || !headB) return null;
  let tmpA = headA;
  let tmpB = headB;
  while (tmpA !== tmpB){
    tmpA = tmpA === null ? headB : tmpA.next ;
    tmpB = tmpB === null ? headA : tmpB.next ;
  }
  return tmpA;
};