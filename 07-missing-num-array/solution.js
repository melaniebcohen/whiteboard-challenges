'use strict';

let findNum = function(arr) {
  let x;
  for (let i = 1; i < 10; i++) {
    if (i !== arr[i-1]) {
    return x = i;
    }
  }
  return x;
};