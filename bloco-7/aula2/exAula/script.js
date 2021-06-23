const obj = {

};

const chave = 'nome'
const nome = 'jez'

const adcObjeto = (object, nameKey, key) => {
  object[`${nameKey}`] = key; 
};

adcObjeto(obj, chave, nome);

console.log(obj);