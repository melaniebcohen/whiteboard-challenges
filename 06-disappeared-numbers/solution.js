'use strict';

function solution(arr) {
  console.log(arr)
  let results = [];
  let highest = Math.max.apply(null, arr)
  for (let i = 1; i < highest; i++) {
    if (!arr.includes(i)) {
      results.push(i);
    }
  }
  return results;
}