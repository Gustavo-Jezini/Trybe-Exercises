const numbers = [11, 24, 39, 47, 50, 62, 75, 81, 96, 100];


numbers.forEach((elemento) => {
  if (elemento % 2 === 0) {
    console.log(`${elemento} é divísivel por 2!`);
  }
});