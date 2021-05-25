let numbers = [2, 3, 2, 5, 8, 2]

let contRepetido = 0;
let contNumero = 0;
let indexNumeroRepetido = 0;

// function contagem (numeros) {
//   for (let index in numeros) {
//     let verificaNumero = numeros[index]
//     for (let index2 in numeros) {
//       if (numeros[index2] === verificaNumero) {
//         contNumero += 1;
//       }
//       if (contRepetido < contNumero) {
//         contNumero = contRepetido;
//         indexNumeroRepetido = index ; 
//       }
//     }contNumero = 0;
//   } return numbers[indexNumeroRepetido] ; 
// }

// console.log(contagem(numbers));


function contador(numeros) {
  for (let index in numeros) {
    let verifica = numeros[index] 
    for (let index2 in numeros[index]) {
      if (verifica == numeros[index2]) {
        contNumero += 1
      }
      if(contRepeticao < contNumero) {
        contNumero = contRepetido;
        indexNumeroRepetido = index; 
      }
    } contNumero = 0
  } return numeros[indexNumeroRepetido]
}
console.log(contador(numbers))