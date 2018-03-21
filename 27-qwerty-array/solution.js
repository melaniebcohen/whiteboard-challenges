'use strict';

let words = [ 'sup', 'dad', 'tree', 'snake', 'pet'];

function keyboardWords(arr) {
  let newArr = [];

  let topRow = /^[qwertyuiop]*$/g
  let middleRow = /^[asdfghjkl]*$/g
  let bottomRow = /^[zxcvbnm]*$/g

  for (let i = 0; i < arr.length; i++) {
    if (topRow.test(arr[i])) newArr.push(arr[i]);
    if (middleRow.test(arr[i])) newArr.push(arr[i]);
    if (bottomRow.test(arr[i])) newArr.push(arr[i]);
  }
  return newArr;
}

keyboardWords(words)

module.exports = {
  'words': words,
  'keyboardWords': keyboardWords,
};