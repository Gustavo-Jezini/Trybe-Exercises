const obj = { name: 'Fulano', lastname: 'Da Silva'};
const arr = [1, 2, 3, 4, 5, 6];

localStorage.setItem('testeArray', arr);
localStorage.setItem('testeObjeto', obj);
console.log(localStorage.getItem('testeArray')); // 1,2,3,4,5,6
console.log(localStorage.getItem('testeObjeto')); // [Object Object]

// Para facil utilização na aplicação podemos guardar as informações utilizando métodos de parsing do objeto reservado JSON do Javascript.

// JSON Stringify = Converte objetos/valores de JS para JSON
localStorage.setItem('testeArrayJson', JSON.stringify(arr));
localStorage.setItem('testeObjetoJson', JSON.stringify(obj));

// JSON Parse = Converte valores de JSON para objetos/valores JS
const arrayLocalStorage = JSON.parse(localStorage.getItem('testeArrayJson'));
const objLocalStorage = JSON.parse(localStorage.getItem('testeObjetoJson'));

console.log(arrayLocalStorage);
console.log(objLocalStorage);