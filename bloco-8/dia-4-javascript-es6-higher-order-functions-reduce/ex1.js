const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // escreva seu código aqui
  return arrays.reduce((acc, value) => acc.concat(value),[]);
}

assert.deepStrictEqual(flatten(arrays), ['1', '2', '3', true, 4, 5, 6]);