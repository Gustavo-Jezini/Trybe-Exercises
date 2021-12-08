function smallest_multiple(roof) {
  // Write your code here
  let firstNumber = 0;
  const arr = [];
  for (let index = 1; index < roof; index++) {
    arr.push(index);
  }
  for (let i = 0; i <= roof; i++) {
      for (let number = 0; number < 1000000000; number++) {
        if( number % arr[i] !== 0) {
          console.log(arr[i]);
          console.log(number);
          break
        }
      }
  }
}

smallest_multiple(10)























function digits_sum(number_s) {
  // Write your code here
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    const arr = i.toString().split("");
    const sums = arr.reduce((prev, curr) => parseFloat(prev) + parseFloat(curr))
    if(sums == number_s) {
      sum+=1;
    }
  }
  return sum;
}
digits_sum(26)