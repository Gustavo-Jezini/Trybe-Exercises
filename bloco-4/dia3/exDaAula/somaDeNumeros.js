let fruits = [3, 4];
let sum = 0 

for (let i = 0 ; i < fruits.length ; i += 1) {
  sum += fruits[i]
}

if (sum < 16) {
  console.log("Soma menor que 16")
} 
else {
  console.log(sum)
}