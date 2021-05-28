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

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < dezDaysList.length; i += 1) {
  let numeralDays = dezDaysList[i];
  let mounthDay = document.createElement('li');

  mounthDay.className = "day"
  mounthDay.innerHTML = numeralDays;

  document.getElementById("days").appendChild(mounthDay);
};

document.getElementsByClassName("day")[25].className += " holiday"
document.getElementsByClassName("day")[26].className += " holiday"
document.getElementsByClassName("day")[32].className += " holiday"

document.getElementsByClassName("day")[5].className += " friday"
document.getElementsByClassName("day")[12].className += " friday"
document.getElementsByClassName("day")[19].className += " friday"
document.getElementsByClassName("day")[26].className += " friday"

