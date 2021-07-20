const sum = require('./ex1.js');

describe('Requesito 1', () => {
  it('A funcao recebe 4 e 5, e retorna 9', () => {
    expect(9).toEqual(sum(4, 5))
  })
})

describe('Requisito 2', () => {
  it('testa se somar 0 + 0 retorna 0', () => {
    expect(0).toEqual(sum(0, 0))
  })
})

describe('Requisito 3', () => {
  it('testa se lanca um erro quando um dos parametros é uma string', () => {
    expect(() => { sum(4,'5') }).toThrow()
  })
})

describe('Requisito 4', () => {
  it('testa a mensagem de erro', () => {
    expect(() => { sum(4, '5')}).toThrowError('parameters must be numbers')
  })
})