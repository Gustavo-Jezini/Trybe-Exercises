// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maça', 'tangerina'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['leite condensado', 'morango', 'suco de laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const salada = [...fruit, ...additional];
  return salada;
};

console.log(fruitSalad(specialFruit, additionalItens));