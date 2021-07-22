const hydrate = (string) => {
  const allNumbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
  const arrSplited = string.split(' ');
  const numbers = [];
  const numerical = [];
  arrSplited.forEach((item) => {
    allNumbers.forEach((number) => number === item ? numbers.push(item) : false)
  })
  numbers.forEach((number) => {
    numerical.push(parseInt(number))
  })
  const countCups = numerical.reduce((sum, acc) => sum + acc, 0) 
  
  const pluralGlass = countCups === 1 ? 'copo' : 'copos';
  return `${countCups} ${pluralGlass} de água`
}

module.exports = hydrate;