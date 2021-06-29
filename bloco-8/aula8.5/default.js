const getNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

const { nationality = 'Portugues'} = person;

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));