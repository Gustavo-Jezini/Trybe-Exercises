const assert = require('assert');
// escreva a função sumAllNumbers aqui
const sumAllNumbers = (arr) => {
  let sum = 0;
  for(let i = 0; i < arr.length; i += 1){
    sum += arr[i];
  };
  return sum;
};

const numbers = [9, 23, 10, 4, 7];
const expected = 53;
const output = sumAllNumbers(numbers);

assert.strictEqual(typeof sumAllNumbers, 'function');
assert.strictEqual(output, expected);