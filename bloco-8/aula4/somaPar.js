const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const evenNumber = (number) => number % 2 === 0;
const sum = (number1, number2) => number1 + number2; 

const sumEvenNumber = numbers.filter(evenNumber).reduce(sum, 0);

console.log(sumEvenNumber);