let arr = [2, 3, 6, 7, 10, 1]
let indiceMaior = 0

function indiceDoMaior(arr) {

  for (let indice in arr) {
    if (arr[indiceMaior] < arr[indice] ) {
      indiceMaior = indice
    }
  }
  return {
    indiceMaior
  }
}

console.log(indiceDoMaior(arr));