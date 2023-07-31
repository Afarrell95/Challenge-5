saveButton = $(".saveBtn");
deleteButton = $(".delBtn");
textArea = $("textarea");
timeBlock = $(".time-block");

$("#currentDay").text(moment().format("dddd, MMMM Do"));

let hourNine = $("#nine");
let hourTen = $("#ten");
let hourEleven = $("#eleven");
let hourTwelve = $("#twelve");
let hourOne = $("#one");
let hourTwo = $("#two");
let hourThree = $("#three");
let hourFour = $("#four");
let hourFive = $("#five");

let textInputNine = localStorage.getItem("inputOne");
let textInputTen = localStorage.getItem("inputTwo");
let textInputEleven = localStorage.getItem("inputThree");
let textInputTwelve = localStorage.getItem("inputFour");
let textInputOne = localStorage.getItem("inputFive");
let textInputTwo = localStorage.getItem("inputSix");
let textInputThree = localStorage.getItem("inputSeven");
let textInputFour = localStorage.getItem("inputEight");
let textInputFive = localStorage.getItem("inputNine");

function loadSaved(){
  hourNine.text(textInputNine)
  hourTen.text(textInputTen)
  hourEleven.text(textInputEleven)
  hourTwelve.text(textInputTwelve)
  hourOne.text(textInputOne)
  hourTwo.text(textInputTwo)
  hourThree.text(textInputThree)
  hourFour.text(textInputFour)
  hourFive.text(textInputFive)
}

function saveToLocal(event) {
  localStorage.setItem("inputOne", hourNine.val());
  localStorage.setItem("inputTwo", hourTen.val());
  localStorage.setItem("inputThree", hourEleven.val());
  localStorage.setItem("inputFour", hourTwelve.val());
  localStorage.setItem("inputFive", hourOne.val());
  localStorage.setItem("inputSix", hourTwo.val());
  localStorage.setItem("inputSeven", hourThree.val());
  localStorage.setItem("inputEight", hourFour.val());
  localStorage.setItem("inputNine", hourFive.val());
}

function deleted(event){
  textInputNine = '';
textInputTen = '';
textInputEleven = '';
textInputTwelve = '';
textInputOne = '';
textInputTwo = '';
textInputThree = '';
textInputFour = '';
textInputFive = '';
  localStorage.setItem("inputOne", '');
  localStorage.setItem("inputTwo", '');
  localStorage.setItem("inputThree", '');
  localStorage.setItem("inputFour", '');
  localStorage.setItem("inputFive", '');
  localStorage.setItem("inputSix", '');
  localStorage.setItem("inputSeven", '');
  localStorage.setItem("inputEight", '');
  localStorage.setItem("inputNine", '');
}


function textBG() {
  var currentHour = moment().format("H");
  var blockHour = timeBlock.attr("data-hour");

  if (currentHour < blockHour) {
    timeBlock.removeClass("present");
    timeBlock.removeClass("past");
    timeBlock.addClass("future");
  } else if(currentHour == blockHour){
    timeBlock.removeClass("future");
    timeBlock.removeClass("past");
    timeBlock.addClass("present");
  } else {
    timeBlock.removeClass("future");
    timeBlock.removeClass("present");
    timeBlock.addClass("past");
  }
}
saveButton.on("click", saveToLocal);
deleteButton.on("click", deleted)
loadSaved();
saveToLocal();
textBG();
