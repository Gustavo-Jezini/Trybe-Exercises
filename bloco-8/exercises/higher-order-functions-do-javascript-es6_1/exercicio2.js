const verifica = (number) => {
  if (number !== Math.floor((Math.random() * 5) + 1)) {
    return 'Tente novamente'
  } else { return 'Parabens voce ganhou'}
};

const random = () => Math.floor((Math.random() * 5) + 1);

const HOF = (apost, callback) => callback(apost());

console.log(HOF(random, verifica));