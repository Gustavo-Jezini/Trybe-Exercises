const numbers = [50, 85, -30, 3, 15];

const majorNumber = numbers.reduce(((acc, number) => acc > number ? `${acc}` : `${number}`), 110);

console.log(majorNumber);