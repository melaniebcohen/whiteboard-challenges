'use strict';

var count = 0;

const traverse = (engine) => {
  count += engine.value;

  if (engine.next) {
    traverse(engine.next);
  } else {
  return count;
  }
}