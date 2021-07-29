let numbers = [5, 9, 105, 19, 70, 8, 2, 101, 35, 27 , 100 ];
let menorValor = numbers[0]; 

for (let index = 0 ; index < numbers.length; index += 1) {
  if (numbers[index] < menorValor) {
    menorValor = numbers[index]
  }
  }

console.log(menorValor)