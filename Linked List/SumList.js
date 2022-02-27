/**
 *Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    add(element){
        var node = new ListNode(element);

        var current;

        if(this.head === null){
            this.head = node;
        } else {
            current = this.head;
            while(current.next){
                current = current.next;
            }

            current.next = node;
        }
        this.size++;
    }
}

class PartialSum {
    constructor(sum, carry) {
        this.sum = (sum === undefined ? 0 : sum)
        this.carry = (carry === undefined ? 0 : carry)
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    //     let len1 = Length(l1)
    //     let len2 = Length(l2)

    //     if(len1 < len2){
    //         l1 = padlist(l1, len2-len1)
    //     } else {
    //         l2 = padlist(l2, len1-len2)
    //     }
    //     let sum = addListHelper(l1,l2)

    //     if(sum.carry == 0) {
    //         return sum.sum
    //     } else {
    //         let result = insertBefore(sum.sum, sum.carry)
    //         return result
    //     }

    let 
    let sum = new PartialSum(l1, 0)
    console.log(l1.next)
    return sum
};

var Length = function (list) {
    let count = 0;
    while (list) {
        count++
        list = list.next
    }
    return count;
}

var padlist = function (list, sub) {
    let head = list
    for (let i = 0; i < sub; i++) {
        head = insertBefore(head, 0)
    }
    return head
}

var insertBefore = function (list, data) {
    var node = new ListNode(data);
    if (list) {
        node.next = list
    }
    return node
}

var addListHelper = function (l1, l2) {
    if (!l1 && !l2) {
        let sum = new PartialSum()
        return sum
    }

    let sum = addListHelper(l1.next, l2.next)

    let val = l1.val + l2.val + sum.carry
    let full_result = insertBefore(sum.sum, val % 10)

    sum.sum = full_result
    sum.carry = Math.floor(val / 10)
    return sum

}

// l1 = [2,4,3]
let l1 = new LinkedList()
l1.add(2)
l1.add(4)
l1.add(3)

let l2 = new LinkedList()
l2.add(6)
l2.add(9)


console.log(addTwoNumbers(l1, l2))