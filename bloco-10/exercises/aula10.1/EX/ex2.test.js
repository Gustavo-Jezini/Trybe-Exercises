const myRemove = require('./ex2'); 

describe('Requisito 1, ex2', () => {
  it('verifica se retira o numero 3', () => {
    expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  })
})

describe('Requisito 2, ex2', () => {
  it('verifica que retorna um array DIFERENTE de [1, 2, 3, 4]', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
  })
})

// Como fazer isso ???
//describe('Requisito 4, ex4', () => {
//  it('verifica que retirar um elemento que nao tem no Array nao modifica ele', () => {
//    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
//  })
//})