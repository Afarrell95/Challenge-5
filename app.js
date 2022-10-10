saveButton = $(".saveBtn");
textArea = $("textarea");
timeBlock = $(".time-block");

$("#currentDay").text(moment().format("dddd, MMMM Do"));

var hourNine = $("#nine");
var hourTen = $("#ten");
var hourEleven = $("#eleven");
var hourTwelve = $("#twelve");
var hourOne = $("#one");
var hourTwo = $("#two");
var hourThree = $("#three");
var hourFour = $("#four");
var hourFive = $("#five");

var textInputNine = localStorage.getItem("inputOne");
var textInputTen = localStorage.getItem("inputTwo");
var textInputEleven = localStorage.getItem("inputThree");
var textInputTwelve = localStorage.getItem("inputFour");
var textInputOne = localStorage.getItem("inputFive");
var textInputTwo = localStorage.getItem("inputSix");
var textInputThree = localStorage.getItem("inputSeven");
var textInputFour = localStorage.getItem("inputEight");
var textInputFive = localStorage.getItem("inputNine");

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
loadSaved();
saveToLocal();
textBG();
