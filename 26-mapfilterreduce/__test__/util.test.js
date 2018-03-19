'use strict';

const { map, filter, reduce } = require('../utils.js')
let testArr = [1, 2, 3, 4, 5];

describe('Map', () => {
  it('should perform a map function on the array', () => {
    let result = testArr.map(x => x + 1)
    expect(result).toEqual([2, 3, 4, 5, 6])
    expect(result.length).toEqual(5);
    expect(typeof result).toEqual('object')
  })
})

describe('Filter', () => {
  it('should perform a filter function on the array', () => {
    let result = testArr.filter(x => x > 2)
    expect(result).toEqual([3, 4, 5])
    expect(result.length).toEqual(3);
    expect(typeof result).toEqual('object')
  })
})

describe('Reduce', () => {
  it('should perform a reduce function on the array', () => {
    let result = testArr.reduce((a,b) => a + b)
    expect(result).toEqual(15);
    expect(typeof result).toEqual('number')

    result = ['dog', 'cat', 'mouse'].reduce((a, b) => a + b);
    expect(result).toEqual('dogcatmouse');
    expect(typeof result).toBe('string');
  })
})