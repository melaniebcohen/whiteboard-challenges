'use strict'

var arr1 = ["mike", "sue", "tom", "kathy", "henry"];
var arr2 = ["howey", "jim", "sue", "jennifer", "kathy", "hank", "alex"];

function findNewArr(arr1, arr2) {
  var newArr = [];

  for(var i = 0; i < arr1.length; i++) {
    for(var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArr.push(arr2[j])
      }
    }
  }
  return newArr;
}

findNewArr(arr1,arr2)