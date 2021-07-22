function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

let dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let getDaysList = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');

    if (day === 24 | day === 31) {
      dayItem.className = 'day holiday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 4 | day === 11 | day === 18) {
      dayItem.className = 'day friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      dayItem.className = 'day holiday friday';
      dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    } else {
      dayItem.innerHTML = day;
      dayItem.className = 'day';
      getDaysList.appendChild(dayItem);
    }
  };
};
createDaysOfTheMonth();

function createButton(newButton) {
  let buttonContainer = document.querySelector(".buttons-container");
  let buttonElement = document.createElement("button");
  buttonElement.id = "btn-holiday";

  buttonElement.innerHTML = newButton;
  buttonContainer.appendChild(buttonElement);

}

createButton("feriados");

document.getElementById("btn-holiday").addEventListener("click" ,changeColor)

function changeColor(){
  for(let index = 0; index < 3; index += 1){

  if (document.getElementsByClassName("holiday")[index].style.backgroundColor = "rgb(238,238,238)" )
    document.getElementsByClassName("holiday")[index].style.backgroundColor = "red"
  
  else {document.getElementsByClassName("holiday")[index].style.backgroundColor = "red"}
  }
};

function sextou(sexta) {
  let buttonContainer = document.querySelector(".buttons-container");
  let newButton = document.createElement("button");
  newButton.id = "btn-friday"

  newButton.innerHTML = sexta ;
  buttonContainer.appendChild(newButton);
};

sextou("SEXTOOOU")

document.getElementById("btn-friday").addEventListener("click" ,changeText)

function changeText() {
    for (let i = 0; i < document.getElementsByClassName("friday").length; i += 1) {
      let sextas = document.getElementsByClassName("friday")[i]
      if (sextas !== "SEXTOOOU"){
      sextas.innerHTML = "SEXTOOOU"
      }
      else {sextas.innerHTML = document.getElementsByClassName("friday")[i]}
  }
}

function dayMouseOver() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function dayMouseOut() {
  let days = document.querySelector('#days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};
dayMouseOut();
dayMouseOver();