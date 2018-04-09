'use strict';

module.exports = exports = {};

let oldTree = { 
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

let bst = {
  value: 15,
  left: {
    value: 8,
    left: {
      value: 4,
      left: {
        value: 0,
        left: null,
        right: null,
      },
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: null,
      },
    },
    right: {
      value: 12,
      left: {
        value: 11,
        left: {
          value: 9,
          left: null,
          right: {
            value: 10,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        value: 14,
        left: null,
        right: null,
      },
    },
  },
  right: {
    value: 20,
    left: null,
    right: {
      value: 30,
      left: {
        value: 25,
        left: null,
        right: null,
      },
      right: null,
    },
  },
};

function countChildren(tree) {
  return tree.left && tree.right
    ? 2
    : tree.left || tree.right
      ? 1
      : 0
}

function fixDoubleChildren(tree) {
  console.log(tree)
  // find lowest val...?


}

function removeNode(tree, removeVal) {
  // console.log(tree)
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
      // console.log('tree',tree)
      // console.log('tree[child]',tree[child])
      if (numChildren === 0) {  // IF V IS A LEAF WITH NO CHILDREN
        tree[child] = null;
      } else if (numChildren === 1) {  // ELSE IF V HAS 1 CHILD, BYPASS V
        tree[child] = tree[child].left || tree[child].right;
      } else if (numChildren === 2) { // ELSE REPLACE V WITH SUCCESSOR
        fixDoubleChildren(tree)
      }
    } else {
      _traverse(tree.left);
      _traverse(tree.right);
    }
  }
  console.log(tree)
  return tree;
}

removeNode(bst, 9)