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

exports.printBst = (tree, callback) => {
  _traverse(tree);

  function _traverse(tree) {
    if (tree.left) _traverse(tree.left);
    callback(tree)
    if (tree.right) _traverse(tree.right)
  }
}