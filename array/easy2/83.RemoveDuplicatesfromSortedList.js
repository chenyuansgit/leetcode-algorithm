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

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var deleteDuplicates = function (head) {
  if (!head) return head;

  let curr = head;
  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};

let node1 = new ListNode(1);
node1.next = new ListNode(1);
node1.next.next = new ListNode(1);

console.log(deleteDuplicates(node1));