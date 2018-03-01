'use strict';

const ll = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

function removeNode(ll, n) {
  let current = ll;

  while (current.next !== null) {
    if (current.next.val === n) {
      current.next = current.next.next;
    }
    current = current.next;
  }
  return ll;
}

removeNode(ll, 2);

module.exports = {
  'removeNode': removeNode,
  'll': ll
}