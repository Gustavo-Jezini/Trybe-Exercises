const pontos = (num1, num2) => (num1) - (num2 * 0.5);

const HOF = (respostas, gabarito, callback) => {
  let contCerta = 0;
  let contErrada = 0;

  for (let i = 0; i < respostas.length; i +=1) {
    if (respostas[i] == gabarito[i]) {
      contCerta += 1
    } else if ((respostas[i] !== gabarito[i]) && (respostas[i] !== 'N.A')) {
      contErrada += 1
    }
  }
  return callback(contCerta, contErrada);
};
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(HOF(studentAnswers, rightAnswers, pontos));