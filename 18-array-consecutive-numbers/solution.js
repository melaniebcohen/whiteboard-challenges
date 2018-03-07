'use strict';

module.exports = function(nums) {
  let counter = 0;
  let highest = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      counter++;
      if (counter > highest) {
        highest = counter;
      }
    }
    if (nums[i] === 0) counter = 0
  }
  return highest;
}