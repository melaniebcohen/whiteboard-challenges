'use strict';

const findConsecutive = require('../solution.js');
require('jest');

describe('Whiteboard Solution', function() {
  let arr = [1, 1, 0, 1, 1, 1]
  describe('#findConsecutive', function() {
    it('should return an integer', function() {
      let result = findConsecutive(arr);
      expect(typeof arr).toEqual('object')
      expect(typeof result).toEqual('number')
      expect(result).toEqual(3);
    })
  })
})