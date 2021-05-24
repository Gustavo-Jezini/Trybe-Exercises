let n = 5
let asteriscos = ""
let espacos = ""


for (let soma = 1 ; soma <= n ; soma += 1 ) {
  espacos += " "
}

for (let linhas = 1 ; linhas <= n ; linhas +=1) {
  espacos = espacos.slice(1)
  asteriscos += "*"
  console.log(espacos + asteriscos)
}

