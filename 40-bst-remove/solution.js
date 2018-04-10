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

const countChildren = tree => {
  return tree.left && tree.right
    ? 2
    : tree.left || tree.right
      ? 1
      : 0
}

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
      if (numChildren === 0) {  // IF V IS A LEAF WITH NO CHILDREN
        tree[child] = null;        
      } else if (numChildren === 1) {  // ELSE IF V HAS 1 CHILD, BYPASS V
        tree[child] = tree[child].left || tree[child].right;
      } else if (numChildren === 2) { // ELSE REPLACE V WITH SUCCESSOR
        console.log(tree)
        console.log(tree[child])
        // First find the successor (or predecessor) of the this node.
  
        // Delete the successor (or predecessor) from the tree.
        
        // Replace the node to be deleted with the successor (or predecessor)

      }
    } else {
      _traverse(tree.left);
      _traverse(tree.right);
    }
  }
  return tree;
}