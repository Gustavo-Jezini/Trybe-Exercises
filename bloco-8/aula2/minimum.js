const people = [
  { name: 'Mateus', age: 19 },
  { name: 'José', age: 19 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((idade) => idade.age > minimumAge)
}

console.log(verifyAges(people, 18));