'use strict'

function returnObj(arr) {
  let high = Math.max.apply(null, arr);
  let low = Math.min.apply(null, arr);
  let sum = arr.reduce(function(acc, cur) {
    return acc + cur;
  })
  let avg = sum/arr.length;

  let obj = {
    highVal: high,
    lowVal: low,
    avgVal: avg,
  }

  return obj;
}

returnObj([1,2,3]);