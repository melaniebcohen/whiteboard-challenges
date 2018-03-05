'use strict';

require('jest');
let solution = require('../solution.js');
let result = solution.reverseList(solution.linkedList)

describe('Reverse Linked List', function() {
  describe('#reverseList', function() {
    it('should return a reversed linked list', function() {
      expect(result).toEqual({ val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null} } } })
    })
  })
})