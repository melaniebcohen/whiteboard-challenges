'use strict';

const { tree, printBst } = require('../solution.js');

describe('BST Find', () => {
  it('should return true or false', () => {
    let result = printBst(tree, 9);
    expect(result).toBeTruthy();

    result = printBst(tree, 100);
    expect(result).toBeFalsy();
  })
})