'use strict';

let linkedList = {
  val: 1,
  next: {
    val: 2,
    next: { 
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: {
            val: 6,
            next: {
              val: 7,
              next: null
            }
          }
        }
      }
    }
  }
}

function findLength(ll) {
  let current = ll;
  let counter = 0;

  while (current !== null) {
    current = current.next;
    counter++;
  }
  return counter;
}

function findN(ll, n) {
  let nthNode = findLength(ll) - n;
  let current = ll;
  let counter = 0;

  while (current !== null) {
    if (counter === nthNode) {
      return current.val;
    }
    current = current.next;
    counter++;
  }
  return undefined;
}

findN(linkedList, 3)
