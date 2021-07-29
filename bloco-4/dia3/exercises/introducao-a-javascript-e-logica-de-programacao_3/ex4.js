let n = 3
let espacos = ""
let asteriscos = "*"

console.log(asteriscos)
console.log("")


if ( n % 2 == 1) {
  for (let linhas = 1 ; linhas < n ; linhas += 1 ) {
    asteriscos += "**"-
    console.log(asteriscos)
    console.log("")
  }
}

else {
  for (let linhas = 1 ; linhas < n ; linhas += 1 ) {
    asteriscos += "*"
    console.log(asteriscos)
    console.log("")
  }


}