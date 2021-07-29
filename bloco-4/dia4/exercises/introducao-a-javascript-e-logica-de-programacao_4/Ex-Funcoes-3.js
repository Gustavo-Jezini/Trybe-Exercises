let arr = [2, 4, 6, 7, 10, 0, -3]
let indiceMenor = 0

function indiceDoMenor (arr) {
  for (let indice in arr) {
    if (arr[indiceMenor] > arr[indice] ) 
    indiceMenor = indice
  }
  return indiceMenor
}

console.log(indiceDoMenor(arr))