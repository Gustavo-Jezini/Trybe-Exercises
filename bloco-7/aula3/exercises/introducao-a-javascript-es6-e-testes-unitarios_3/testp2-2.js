const assert = require('assert');
// escreva a função wordLengths aqui

let countLength = []
const wordLengths = (arr) => {
  for(let i = 0; i < arr.length; i += 1){
    countLength.push(arr[i].length);
  };
  return countLength;
};

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);