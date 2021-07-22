let numbers = [5, 9, 105, 19, 70, 8, 2, 101, 35, 27 , 100 ];
let maiorValor = 0; 

for (let index = 0 ; index < numbers.length; index += 1) {
  if (numbers[index] > maiorValor) {
    maiorValor = numbers[index]
  }
  }

console.log(maiorValor)