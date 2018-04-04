'use strict';

const { tree, printBst } = require('../solution.js');

describe('BST In-Order Traversal', () => {
  let newArr = [];

  it('should print nodes in-order', () => {
    printBst(tree, node => newArr.push(node.val))
    expect(newArr).toEqual([ 4, 7, 9, 10, 11, 14, 23 ])
  })
})