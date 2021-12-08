const connection = require('./connection');

// Criamos um método para verificar se os dados do usuário são válidos
    function isValid({ firstName, lastName, email, password }) {
        // Regex que valida strings de 6 ou mais caracteres alfanuméricos
        const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
        // Criamos um array para poder verificar com facilidade cada campo
        const fields = [firstName, lastName, email, password];

        // Se algum dos itens do array for `unfined`, `null`, ou uma string vazia, retornamos `false`
        if (fields.includes(undefined) || fields.includes(null) || fields.includes('')) {
            return false;
        }

        // Por último, só precisamos garantir que `password` passa no regex.
        // Caso passe, retornaremos `true`. Caso constrário, retornaremos `false`
        return PASSWORD_REGEX.test(password);
    }

const addUser = ({ firstName, lastName, email, password }) => {
  return connection()
    .then((db) => db.collection('user')
    .insertOne({ firstName, lastName, email, password }))
};

const showUser = async () => {
  return connection()
    .then((db) => db.collection('user').find().toArray())
    .then((user) => user.map((u) => u));
}

module.exports = {
  addUser,
  isValid,
  showUser
}