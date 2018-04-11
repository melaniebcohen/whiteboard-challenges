'use strict';

const { bst, findNearest } = require('../solution.js');

describe('BST Find Nearest', () => {
  it('should return the nearest value', () => {
    let result = findNearest(bst, 8);
    expect(result).toEqual(7);

    result = findNearest(bst, 20);
    expect(result).toEqual(22);
  });
});