const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

 const showHab = student => {
  const arrayOfSkills = Object.keys(student);
  for(i in arrayOfSkills){
    console.log( Object.entries(student)[i] );
    // console.log(`${arrayOfSkills[i]} Nivel: ${Object.values(student)[i]}`);
  };
  };

  showHab(student1)
console.log(
  ''
);
  showHab(student2)
