/**
 * Definition for singly-linked list.
 */
const ListNode = (val, next) => ({ val, next });

/**
 * Core algorithm
 *
 * @param {ListNode} head
 * @return {ListNode} new head in reversed linked list
 */
const reverseList = (head) => {
  if (!head || !head.next) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = undefined;
  return newHead;
};

/**
 * @param {Array} list
 * @return {Array} reversed list
 */
const reverse = (list) => {
  console.log(`Input: ${list}`);
  let next;
  let i = list.length;
  // Convert input array to linked list
  while (i >= 0) {
    next = ListNode(list[i], next);
    --i;
  }
  console.log(next);

  // Reverse
  let output = [];
  next = reverseList(next).next;
  console.log(next);

  // Convert linked list to output array
  while (next && next.val) {
    output = [...output, next.val];
    next = next.next;
  }
  console.log(output);

  return output;
};

// reverse([1, 2, 3, 4, 5]);

exports.reverse = reverse;
