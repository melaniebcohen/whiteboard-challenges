'use strict';

// with help from https://stackoverflow.com/questions/41598418/jest-testing-module-multiple-times-in-one-test-suite
const { removeNode, printTree } = require('../solution.js');

describe('BST Remove Node', () => {
  beforeEach(() => { jest.resetModules() });

  it('should print out the tree using breadth-first', () => {
    const { tree } = require('../solution.js');
    let nodes = [];
    printTree(tree, node => { nodes.push(node.val) });
    expect(nodes).toEqual([ 10, 7, 14, 4, 9, 12, 23, 2, 11, 13 ])
  });
  
  it('should remove a single leaf', () => {
    const { tree } = require('../solution.js');
    let nodes = [];
    let result = removeNode(tree, 9);
    printTree(result, node => { nodes.push(node.val) });
    expect(nodes).toEqual([ 10, 7, 14, 4, 12, 23, 2, 11, 13 ])
  });

  it('should remove a node with a single child', () => {
    const { tree } = require('../solution.js');
    let nodes = [];
    let result = removeNode(tree, 4);
    printTree(result, node => { nodes.push(node.val) });
    expect(nodes).toEqual([10, 7, 14, 2, 9, 12, 23, 11, 13])
  });
});