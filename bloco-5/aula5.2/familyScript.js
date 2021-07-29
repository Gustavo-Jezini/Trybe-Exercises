console.log(document.getElementById("elementoOndeVoceEsta"))

document.getElementById("elementoOndeVoceEsta").parentElement.style.color = "red"

console.log(document.getElementById("elementoOndeVoceEsta").parentElement);

console.log(document.getElementById("elementoOndeVoceEsta").parentElement.firstElementChild.firstElementChild);

document.getElementById("elementoOndeVoceEsta").parentElement.firstElementChild.innerHTML = "Adc um texto"



document.getElementById("elementoOndeVoceEsta").parentElement 

let irmaoDoElementoQueEstou = document.createElement("div") 

let pai = document.getElementById("pai");

document.getElementById("pai").appendChild(irmaoDoElementoQueEstou);

console.log(document.getElementById("pai"));

let filhoDoElementoQueEstou = document.createElement("p");

document.getElementById("elementoOndeVoceEsta").appendChild(filhoDoElementoQueEstou);

console.log(document.getElementById("elementoOndeVoceEsta"));

let filhoDoFilhoElementoQueEstou = document.createElement("p");

document.getElementById("primeiroFilhoDoFilho").appendChild(filhoDoFilhoElementoQueEstou);

filhoDoFilhoElementoQueEstou.id = "paraBuscar"

console.log( document.getElementById("paraBuscar").parentElement.parentElement.nextElementSibling)

console.log(document.getElementById("paiDoPai").children);

console.log( document.querySelectorAll(".filhosApagados"))

for(i = 0 ; i < document.querySelectorAll(".filhosApagados").length ; i +=1 ) {
  document.getElementById("pai").removeChild(document.querySelectorAll(".filhosApagados")[i])
}
document.getElementById("pai").removeChild(document.querySelectorAll(".filhosApagados")[0])

console.log( document.querySelectorAll(".filhosApagados"))