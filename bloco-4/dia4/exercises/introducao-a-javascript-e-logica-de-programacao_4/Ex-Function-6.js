let n = 5
let sum = 0

function somatorio (numero ) {
  for (i = 0 ; i <= numero ; i += 1) {
    sum += i
  }
  return sum
}

console.log(somatorio(n))