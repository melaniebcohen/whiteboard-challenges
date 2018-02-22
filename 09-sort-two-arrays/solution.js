'use strict';

function mergeArr(arr1, arr2) {
  let sortedArr = [];
  let length = arr1.length + arr2.length;
  
  for(let i =0; i < length; i++) {
    if (arr1.length > 0 && arr2.length > 0) {
      if (arr1[0] < arr2[0]) {
        sortedArr.push(arr1.shift());
      } else {
        sortedArr.push(arr2.shift());
      }
    } else {
      if (arr1.length > 0) {
        arr1.forEach( i => 
          sortedArr.push(i)
        );
        return sortedArr;
      } else if (arr2.length > 0) {
        arr2.forEach( j => 
          sortedArr.push(j))
          return sortedArr;
      }
      return;
    }
  }
  return sortedArr;
}

mergeArr([1, 3, 5, 10, 12, 13], [2, 4, 6, 7])