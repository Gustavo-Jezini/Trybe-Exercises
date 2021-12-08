const fetch = require('node-fetch');

const lookupCep = async (cepLookup) => {
  const response = await fetch(`https://viacep.com.br/ws/${cepLookup}/json/`)

  if(!response.ok) return null;

  const address = await response.json();

  if (address.erro) return null;

  return address;
}

module.exports = {
  lookupCep,
};