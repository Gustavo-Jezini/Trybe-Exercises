// apiScript.js     
// const API_URL = 'https://icanhazdadjoke.com/';

// const fetchJoke = () => {
//   const myObject = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' }
//   };

//   fetch(API_URL, myObject)
//     .then(response => response.json())
//     .then(data => console.log(data));
// };

// window.onload = () => fetchJoke();

const fetchPromise = () => {
  let arr = [];
  let sum;
  let divisor = [2, 3, 5, 10];
  const myPromise = new Promise ((resolve, reject) => {
    for (let i = 0; i < 10; i += 1) {
      let number = Math.floor((Math.random() * 50) + 1);
      arr.push(number);
    }
    sum = arr.map((number) => number * number)
    .reduce((sum, acc) => sum + acc,0);
    sum < 8000 ? resolve(sum) : reject();
  })
  .then((sum) => divisor.map((value) => sum / value))
  .then((newSum) => console.log(newSum.reduce((acc, curr) => acc + curr, 0)))
  .catch(() => console.log(`Impossivel!! A soma é mais de 8 mil!!`))
}

  
fetchPromise();