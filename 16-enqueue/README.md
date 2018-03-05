[Whiteboard Challenge](https://github.com/codefellows-seattle-javascript-401d22/16-basic-auth/blob/master/CHALLENGE.md)  
Melanie Cohen, David Kosmos, & Alex Bowers

## Problem Domain
Create a function that accepts a queue and an "add" as it's input.  Your function should enqueue the provided value. The length property on your queue should also be updated to reflect the addition.

```javascript
// given the following:

const queue = {
  0: 'apple',
  1: 'pear',
  2: 'banana',
  next: 0,
  length: 3
}

addItem(queue, 'kiwi');

// return the following:

{
  0: 'apple',
  1: 'pear',
  2: 'banana',
  3: 'kiwi'
  next: 0,
  length: 4
}
```