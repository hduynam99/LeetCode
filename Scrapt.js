function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  let p1 = head, p2 = head
  let count = 0
  while(p1.next){
    count++
    console.log(count)
    console.log(p1.val)
    p1 = p1.next
  }

};





let head = new ListNode(), n = 2


console.log(removeNthFromEnd(head, n))
