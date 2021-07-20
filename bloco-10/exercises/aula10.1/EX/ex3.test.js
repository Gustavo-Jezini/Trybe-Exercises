const myRemoveWithoutCopy = require('./ex3');

describe('requisito 1, ex3', () => {
  it('verifica se retorna o array esperado', () => {
    expect([1, 2, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })
})

describe('requisito 2, ex3', () => {
  it('verifica se NAO retorna o array esperado', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3))
  })
})

describe('requisito 3, ex3', () => {
  it('arra passado sofreu alteracoes?', () => {
    expect([1, 2, 3, 4]).toEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5))
  })
})