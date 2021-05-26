document.querySelector("#container").style.backgroundColor = "gray" ;
 
document.getElementById("header-container").style.backgroundColor = "green" ;

document.querySelectorAll(".emergency-tasks")[0].style.backgroundColor = "pink"

for (let i = 0; i < document.querySelectorAll("h3").length; i += 1 ) {
  document.querySelectorAll("h3")[i].style.backgroundColor = "purple"
}

for (let i = 0; i < document.querySelectorAll(".no-emergency-tasks h3").length; i += 1 ) {
  document.querySelectorAll(".no-emergency-tasks h3")[i].style.backgroundColor = "black"
}

document.querySelectorAll(".no-emergency-tasks")[0].style.backgroundColor = "yellow"

document.getElementById("footer-container").style.backgroundColor = "green"
