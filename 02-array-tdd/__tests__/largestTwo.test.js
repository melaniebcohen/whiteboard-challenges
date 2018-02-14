'use strict';

const largestTwo = require('../lib/largestTwo.js');
require('jest');

describe('Largest Two Module', function() {
  describe('#largestTwo', function() {
    it('should throw argument data type error', function() {
      expect(function() {
        largestTwo({ key1: 5 })
      }).toThrow();
      expect(function() {
        largestTwo({ key: 5 })
      }).toThrow('argument data type error');
    })
    it('should return object', function() {
      var result = largestTwo([3, 5, 2, 10.5]);
      expect(result).toEqual({ largest: 10.5, secondLargest: 5})
    })
    it('should throw 1 argument error', function() {
      expect(function() {
        largestTwo([1],[1])
      }).toThrow();
      expect(function() {
        largestTwo([1],[1])
      }).toThrow('can only have 1 argument');
    })
    it('should throw array.length error', function() {
      expect(function() {
        largestTwo([1])
      }).toThrowError('array length less than 2');
    })
  })
})