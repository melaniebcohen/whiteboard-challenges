'use strict'

const Queue = require('../solution.js');
require('jest');

describe('Enqueue Dequeue Whiteboarding', function() {
  describe('#enqueue', function() {
    it('should add a value', function() {
      Queue.enqueue(1);
      Queue.enqueue(2);
      Queue.enqueue(3);  
      expect(Queue.forward).toEqual([1, 2, 3])
    })
  })
  describe('#dequeue', function() {
    it('should remove a value', function() {
      Queue.dequeue();
      expect(Queue.backward).toEqual([3, 2])
    })
  })
})