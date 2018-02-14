'use strict';

module.exports = function(arr) {
  if (arguments.length !== 1) throw new Error('can only have 1 argument');
  if (arr.length < 2) throw new Error('array length less than 2');
  if (typeof arr === 'object' && arr.constructor !== Array || typeof arr !== 'object') throw new Error('argument data type error');

  arr.sort(function(a, b) {
    return a - b;
  })

  var obj = { 
    largest: arr[arr.length - 1], 
    secondLargest: arr[arr.length - 2]
  };

  return obj;
}