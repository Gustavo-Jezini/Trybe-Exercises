let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const [animalCerto, comidaCerto, bebidaCerto] = [comida, bebida, animal];

console.log(animalCerto, comidaCerto, bebidaCerto);