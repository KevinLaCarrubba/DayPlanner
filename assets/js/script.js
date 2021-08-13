//Create our document ready function to make sure nothing runs before we load the page.
$(document).ready(function () {
  //all code goes in here to make sure that the page is fullly loaded before it runs anything at all.
  var currentDay = moment().format("dddd MMM Do, YYYY");
  $("#currentDay").text(currentDay);
  var saveBtn = $(".saveBtn");
  var textInput = $(".text-input");
  var textBox9 = $("#plan-9");
  var textBox10 = $("#plan-10");
  var textBox11 = $("#plan-11");
  var textBox12 = $("#plan-12");
  var textBox1 = $("#plan-1");
  var textBox2 = $("#plan-2");
  var textBox3 = $("#plan-3");
  var textBox4 = $("#plan-4");
  var textBox5 = $("#plan-5");

  //I want to be able to click the button
  //and save the input text within the row of said button
  //to local storage for that row

  saveBtn.click(saveText);

  function saveText() {
    event.preventDefault();
    saveText = textInput.value;
    localStorage.setItem("Text", saveText);
  }

  var textTimeBlock = [
    { textField: textBox9, timeBlock: 9 },
    { textField: textBox10, timeBlock: 10 },
    { textField: textBox11, timeBlock: 11 },
    { textField: textBox12, timeBlock: 12 },
    { textField: textBox1, timeBlock: 13 },
    { textField: textBox2, timeBlock: 14 },
    { textField: textBox3, timeBlock: 15 },
    { textField: textBox4, timeBlock: 16 },
    { textField: textBox5, timeBlock: 17 },
  ];

  function currentTime() {
    // get the current time
    var currentTime = moment().format("H");
    //set the current time to an int for math comparison
    currentTime = parseInt(currentTime);
    //for loop to loop through textTimeBlock
    for (var i = 0; i < textTimeBlock.length; i++) {
      //if currentTime is === timblock number add class present
      if (currentTime === textTimeBlock[i].timeBlock) {
        textTimeBlock[i].textField.addClass("present");
      } else if (currentTime > textTimeBlock[i].timeBlock) {
        textTimeBlock[i].textField.removeClass("present");
        textTimeBlock[i].textField.removeClass("future");
        textTimeBlock[i].textField.addClass("past");
      } else {
        textTimeBlock[i].textField.removeClass("present");
        textTimeBlock[i].textField.removeClass("past");
        textTimeBlock[i].textField.addClass("future");
      }
    }
  }
  currentTime();

  // retrieve localStorage and render items to the correct row

  /* DONT WASTE TIME GOING DOWN THE HOLE
_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶
_¶¶___________________________________¶¶
_¶¶___________________________________¶¶
__¶¶_________________________________¶¶_
__¶¶_________________________________¶¶_
___¶¶_______________________________¶¶__
___¶¶______________________________¶¶___
____¶¶¶__________________________¶¶¶____
_____¶¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶_____
_______¶¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶_______
_________¶¶¶¶_¶¶¶¶¶¶¶¶¶¶¶¶_¶¶¶¶_________
___________¶¶¶¶¶_¶¶¶¶¶¶¶_¶¶¶¶___________
______________¶¶¶¶_¶¶¶_¶¶¶______________
________________¶¶¶_¶_¶¶________________
_________________¶¶¶_¶¶_________________
__________________¶¶_¶¶_________________
__________________¶¶_¶__________________
__________________¶¶_¶¶_________________
________________¶¶¶_¶_¶¶¶_______________
_____________¶¶¶¶¶__¶__¶¶¶¶¶____________
__________¶¶¶¶¶_____¶_____¶¶¶¶__________
________¶¶¶¶________¶_______¶¶¶¶¶_______
_______¶¶¶__________¶__________¶¶¶¶_____
_____¶¶¶____________¶____________¶¶¶____
____¶¶¶_____________¶______________¶¶___
___¶¶¶______________¶_______________¶¶__
___¶¶_______________¶________________¶¶_
__¶¶________________¶________________¶¶_
__¶¶_______________¶¶¶________________¶_
__¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶
__¶¶_¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶_¶¶
__¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶¶ */
});
