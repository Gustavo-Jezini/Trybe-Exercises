let arr =  ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']


function medidorPalavras (parametro) {
  let maiorPalavra = parametro[0];
  for (let indice in parametro) {
    if (maiorPalavra.length < parametro[indice].length) {
      maiorPalavra = parametro[indice];
    }
  } 
  return maiorPalavra;
};

console.log(medidorPalavras(arr));

