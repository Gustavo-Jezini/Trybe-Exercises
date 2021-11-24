const connection = require('./connection');

const getNewAuthor = ({id, firstName, middleName, lastName}) => {
  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  }
};

const serializa = (authorData) => {
  return {
    id: authorData.id,
    firstName: authorData.first_name,
    middleName: authorData.middle_name,
    lastName: authorData.last_name
  }
}

const getAll = async () => {
  const [result] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors')

  return result.map(serializa).map(getNewAuthor);
};


const findById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar de forma segura, a substituição do `?` pelo id informado, isso previne possíveis ataques de sql injection.
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors WHERE id = ?'
  const [ authorData ] = await connection.execute(query, [id]);

  if (authorData.length === 0) return null;

  // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
  return serializa(authorData[0]);
};

module.exports = { 
  getAll,
  findById
};
