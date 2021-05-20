let numbers = [ 70, 8, 100, 2 ,0,0];
let oddNumbers = 0
for (let index = 0 ; index < numbers.length ; index += 1 ) {
  if (numbers[index]%2 == 1) {
    oddNumbers = oddNumbers +1
  }
  
}

if (oddNumbers == 0) {
  console.log("nenhum valor encontrado")
}
else {
  console.log(oddNumbers)
}
