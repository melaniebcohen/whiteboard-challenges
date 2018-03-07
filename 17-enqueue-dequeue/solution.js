'use strict';

class Queue {
  constructor() {
    this.forward = [];
    this.backward = [];
  }

  enqueue(val) {
    this.forward.push(val);
  }

  dequeue() {
    if (this.backward.length === 0) {
      while(this.forward.length > 0) {
        this.backward.push(this.forward.pop())
      }
    }
    return this.backward.pop();
  } 
}

module.exports = new Queue;