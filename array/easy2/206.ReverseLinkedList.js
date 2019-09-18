/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  let prev = null;
  let temp = head;
  // 遍历链表
  while(temp){
    // 找到下一个节点
    const next = temp.next;

    // 改变当前节点的next，并把newhead指向当前节点
    temp.next = prev;
    prev = temp;

    // 保存下一个节点
    temp = next;
  }
  return prev;
};