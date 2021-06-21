function changeColor (op ,cor) {
  if (op === 1){
    document.body.style.backgroundColor = cor;
    bColor = cor.value;
  }
  else if (op === 2){
    document.body.style.color = cor;
    tColor = cor.value;
  }
  
};

function changeText (op ,size) {
  if (op === 1){
    document.body.style.fontSize = size + "px";
    tSize = size.value
  }

};

function keepChanges() {
  localStorage.
}