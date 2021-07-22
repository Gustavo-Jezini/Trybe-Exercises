const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const turnoMatinal = (lesson, chave, valor) => {
  lesson[chave] = valor;
};

turnoMatinal(lesson2, 'turno', 'manhã');


const keyList = object => {
  Object.keys(object);
};

const objLength = obj => Object.keys(obj).length;

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

const contaEstudante = lessons => (lessons.lesson1.numeroEstudantes + lessons.lesson2.numeroEstudantes + lessons.lesson3.numeroEstudantes);



