'use strict';

let linkedList = {
  val: 'n',
  next: {
    val: 'u',
    next: { 
      val: 'r',
      next: {
        val: 's',
        next: {
          val: 'e',
          next: {
            val: 's',
            next: {
              val: 'r',
              next: {
                val: 'u',
                next: {
                  val: 'n',
                  next: null
                }
              }
            }
          }
        }
      }
    }
  }
}

function isPalindrome(ll) {
  let current = ll;
  let newArr = [];

  while (current !== null) {
    newArr.push(current.val);
    current = current.next;
  }

  if (newArr === newArr.reverse()) {
    return true;
  }

  return false;
}