'use strict';

module.exports = exports = {};

/*
           10
         /   \
        7     14
      /  \   /  \ 
    4    9  12  23
   /       / \
  2       11  13
*/

// Binary Search Tree
exports.tree = {
  val: 10, 
  left: {
    val: 7,
    left: {
      val: 4,
      left: {
        val: 2,
        left: null,
        right: null,
      },
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
      val: 12,
      left: {
        val: 11,
        left: null,
        right: null,
      },
      right: { 
        val: 13, 
        left: null, 
        right: null },
    },
    right: {
      val: 23,
      left: null,
      right: null,
    }
  }
}

// Breadth First Traversal
exports.printTree = (tree, callback) => {
  let q = [tree];
  let current;

  while (q.length > 0) {
    current = q.pop();
    callback(current)
    if (current.left) q.unshift(current.left)
    if (current.right) q.unshift(current.right);
  }
}

// Helper Function
const countChildren = tree => {
  return tree.left && tree.right
    ? 2
    : tree.left || tree.right
      ? 1
      : 0
}

// Remove Node Function
exports.removeNode = (tree, removeVal) => {
  let found = false;
  if (tree.val === removeVal) console.log('Nope');

  _traverse(tree);
  function _traverse(tree) {
    if (!tree || found ) return;

    const child = tree.left && tree.left.val === removeVal
      ? 'left'
      : tree.right && tree.right.val === removeVal
        ? 'right'
        : null;

    if (child) {
      const numChildren = countChildren(tree[child]);

      if (numChildren === 0) {
        return tree[child] = null;        
        } else if (numChildren === 1) {
          return tree[child] = tree[child].left || tree[child].right;
        } else if (numChildren === 2) {
          return;
          // let minimumNode = tree[child].right;

          // while (minimumNode) {
          //   if (minimumNode.left) {
          //     minimumNode = minimumNode.left;
          //   } else {
          //     break;
          //   }
          // }
          // tree[child].val = minimumNode.val;
          // minimumNode.val = null;
        }
      } else {
        _traverse(tree.left);
        _traverse(tree.right);
      }
  }
  return tree;
};