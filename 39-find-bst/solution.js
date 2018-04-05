'use strict';

module.exports = exports = {};

exports.tree = { 
  val: 10, 
  left: {
    val: 7,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 9,
      left: null,
      right: null,
    }
  },
  right: {
    val: 14,
    left: {
      val: 11,
      left: null,
      right: null,
    },
    right: {
      val: 23,
      left: null,
      right: null,
    }
  }
}

exports.printBst = (tree, findValue) => {
  let returnVal = false;
  _traverse(tree);

  function _traverse(tree) {
    if (tree.val === findValue) {
      return returnVal = true;
    }
    if (returnVal === false) {
      if (tree.left) _traverse(tree.left);
      if (tree.right) _traverse(tree.right);
    }
  }
  return returnVal;
}