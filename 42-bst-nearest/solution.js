'use strict';

module.exports = exports = {};

/*
           10
         /   \
        7     14
      /  \   /  \ 
    4    9  11  22
*/

// Binary Search Tree
exports.bst = { 
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
      val: 22,
      left: null,
      right: null,
    }
  }
}

exports.findNearest = (tree, nearest) => {
  let result = tree.val;
  let diff = Math.abs(result - nearest);

  const _traverse = tree => {
    if (!tree) return;
    if (Math.abs(tree.val - nearest) < diff) {
      diff = Math.abs(tree.val - nearest);
      result = tree.val;
    }
    _traverse(tree.left);
    _traverse(tree.right);
  }

  _traverse(tree);
  return result;
}