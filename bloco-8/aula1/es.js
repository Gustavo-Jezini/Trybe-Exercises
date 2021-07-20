const doingThings = (func) => {
  func();
};


// Ao chamar a função doingThings:

const acordar = () => console.log('Acordando!!');
const cafe = () => console.log('Bora tomar café!!');
const dormir = () => console.log('partiu dormir');
// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!
doingThings(cafe);
