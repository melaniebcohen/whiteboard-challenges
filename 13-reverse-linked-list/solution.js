'use strict';

class LinkedList {
  constructor(val, next) {
    this.val = val;
    this.next = next;
  }
}

const linkedList = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null,
      }
    }
  }
}

function reverseList(ll) {
  let newArr = [];
  let current = ll;

  while (current !== null) {
    newArr.push(current);
    current = current.next;
  }
  let newLinkedList = new LinkedList();
  newLinkedList = newArr.pop()
  current = newLinkedList;

  while (newArr.length > 0) {
    let newNode = newArr.pop();
    current.next = newNode;
    current = current.next;
  }
  current.next = null;
  return newLinkedList;
}

module.exports = {
  'LinkedList': LinkedList,
  'linkedList': linkedList,
  'reverseList': reverseList
}