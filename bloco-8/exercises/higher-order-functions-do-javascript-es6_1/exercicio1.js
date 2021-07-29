const newEmail = (nome) =>{
  const email = `${nome.split(' ').join('')}@trybe.com`;
  return email;
};

const newEmployees = () => {
  const employees = {
    id1: newEmail('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: newEmail('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: newEmail('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  console.log(employees);
};

newEmployees();