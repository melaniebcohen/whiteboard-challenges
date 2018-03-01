'use strict';

let solution = require('../solution.js');
require('jest');

describe('Remove Node On Linked List', function() {
  describe('#removeNode', function() {
    it('should return a modified linked list', function() {
      let result = solution.removeNode(solution.ll, 2)
      expect(result).toEqual({ val: 1, next: { val: 3, next: { val: 4, next: null } } })      
    })
  })
})