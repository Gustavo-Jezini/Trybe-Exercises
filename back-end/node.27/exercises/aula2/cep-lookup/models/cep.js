const connection = require('./connection')

const formatCep = (cep) => {
  const REGEX = /\d{5}-\d{3}/;

  if (REGEX.test(cep)) return cep;

  return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

const getNewCep = ({ cep, logradouro, bairro, localidade, uf}) => {
  return {
    cep: formatCep(cep),
    logradouro,
    bairro,
    localidade,
    uf
  }
}

const findAddressByCep = async (cepToSearch) => {
  // Removemos todos os traços, pois armazenamos o CEP
  // puro no banco
  const treatedCep = cepToSearch.replace('-', '');

  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM ceps WHERE cep=?';

  const addressByCep = await connection.execute(query, [treatedCep])
  .then(([results]) => results.length ? results[0] : null );

  if (!addressByCep) return null;

  const address = getNewCep(addressByCep)

  return address;
}

const create = async ({cep, logradouro, bairro, localidade, uf}) => {
  const treatedCep = cep.replace('-', '');
  const info = [treatedCep, logradouro, bairro, localidade, uf];
  const query = 'INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)';
  
  await connection.execute(query, info);

  return { treatedCep, logradouro, bairro, localidade, uf };
}

module.exports = {
  findAddressByCep,
  create,
};