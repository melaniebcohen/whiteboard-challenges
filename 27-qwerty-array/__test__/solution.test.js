'use strict';

const { words, keyboardWords } = require('../solution.js')
require('jest');

describe('QWERTY Array Solution', () => {
  it('should return an array of words typed on one line', () => {
    let result = keyboardWords(words);
    expect(result).toEqual(['dad','tree','pet']);
    expect(result.length).toEqual(3);
    expect(typeof result).toEqual('object');
  })
})