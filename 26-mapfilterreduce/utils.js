'use strict';

class Array {
  constructor(arr) {
    this.arr = arr;
  }

  map(cb) {
    let mappedArr = [];
    for (let i = 0; i < this.length; i++) {
      mappedArr.push(cb(this[i]))
    }
    return mappedArr;
  }

  filter(cb) {
    let filteredArr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i])) {
        filteredArr.push(this[i]);
      }
    }
  }

  reduce(cb, start) {
    let cur = start;
    for (let i = 0; i < this.length; i++) {
      result += cb(cur, this[i])
    }
  }
}

let arr = [1,2,3,4,5]
// console.log('map', arr.map(x => x + 1))
// console.log('filter', arr.filter(x => x > 2))
console.log('reduce', arr.reduce((a,b) => a + b))


module.exports = {
  'map': Array.map,
  'filter': Array.filter,
  'reduce': Array.reduce
}