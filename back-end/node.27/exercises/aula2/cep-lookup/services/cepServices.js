const CEP = require('../models/cep');
const { lookupCep } = require('../models/viaCep.js');

const REGEX = /\d{5}-?\d{3}/;

const findAddressByCep = async (searchedCep) => {

  if (!searchedCep || !REGEX.test(searchedCep)) {
    return {
      error: {
        code: 'invalidData',
        message: 'CEP inválido',
      }
    }
  }

  const cep = await CEP.findAddressByCep(searchedCep);

  if (cep) return cep;

  const cepFromApi = await lookupCep(searchedCep);

  if (!cepFromApi) {
    return {
      error: {
        code: 'notFound',
        message: 'CEP não encontrado',
      },
    };
  }

  return CEP.create(cepFromApi);
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const alreadyExist = await CEP.findAddressByCep(cep);

  if (alreadyExist) {
    return {
      "error": { 
        "code": "alreadyExists",
        "message": "CEP já existente"
      }
    }
  }

  return CEP.create({ cep, logradouro, bairro, localidade, uf });
}

module.exports = {
  findAddressByCep,
  create,
}