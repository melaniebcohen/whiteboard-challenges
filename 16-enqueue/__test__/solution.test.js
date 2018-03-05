'use strict';

const solution = require('../solution.js')
require('jest');

describe('Enqueue Function', function() {
  it('should add a value to the queue', function() {
    let result = solution.enqueue(solution.queue, 'pineapple');
    expect(result).toEqual({ '0': 'apple', '1': 'pear', '2': 'banana', '3': 'pineapple', next: 0, length: 4 })
    expect(result.length).toEqual(solution.queue.length)
    expect(typeof result).toEqual('object');
  })
})