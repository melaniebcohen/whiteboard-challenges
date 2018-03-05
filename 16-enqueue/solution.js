'use strict';

const queue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3
}

function enqueue(queue, add) {
  queue[queue.length] = add;
  queue.length++;
  return queue;
}

module.exports = {
  'queue': queue,
  'enqueue': enqueue,
}