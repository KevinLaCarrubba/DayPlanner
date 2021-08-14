//Create array for time objects
var timeSlots = [
    {time: '9AM' ,timeBlock:9},
    {time: '10AM' ,timeBlock:10},
    {time: '11AM',timeBlock:11},
    {time: '12AM',timeBlock:12},
    {time: '1PM',timeBlock:13},
    {time: '2PM',timeBlock:14},
    {time: '3PM',timeBlock:15},
    {time: '4PM',timeBlock:16},
    {time: '5PM',timeBlock:17},
]
//set variable for moment
var moment=moment();
//set variable for current day
var currentDay = document.getElementById('currentDay')
//set variable for display container
var plannedDisplay = document.querySelector(".container")
//add current day text content to HTML page
currentDay.textContent = moment.format("dddd MMM Do, YYYY")

function saveMessage(){
    var msg = document.getElementById('notification')
    msg.style.display = "block";
    setTimeout(function(){
        msg.style.display = "none";
    },1200);
}
//funciton to display the planner
function renderPlanner () {
    //loop through array of objects
    timeSlots.forEach((item) => {
        console.log(item)
        console.log(item.timeBlock)
        //set current time variable
        var currentTime = moment.format('H');
        //parseInt current time
        currentTime = parseInt(currentTime);
    //create a bootstrap row with class row and id with timeblock
    var rowDiv = document.createElement('div')
    rowDiv.setAttribute('id',"time-"+item.timeBlock)
    rowDiv.classList.add("row")

    //create a div for time
    var timeDiv = document.createElement('div')
    //add bootstrap col classes and hour
    timeDiv.classList.add('col-12', 'col-md-1', 'col-lg-1', 'hour')
    //display time 
    timeDiv.textContent = item.time;
    //append timeDiv to rowDiv
    rowDiv.appendChild(timeDiv);
    
    //create a textarea
    var textArea = document.createElement('textarea');
    //set id to text area
    textArea.setAttribute('id','plan-'+item.timeBlock)
    //add bootstrao col classes and description 
    textArea.classList.add('col-12', 'col-md-10', 'col-lg-10', 'description')
    //check if current time is equal to textarea timeblock and assaign present class
    if (currentTime === item.timeBlock) {
        textArea.classList.add('present');
    } 
    //check if time has passed and add past class
    else if (currentTime > item.timeBlock) {
        textArea.classList.add('past')
    } else {
    //add future class to all other text areas
        textArea.classList.add('future')
    }
    //appened text area to rowDiv
    rowDiv.appendChild(textArea);

    //create a var to make a button
    var submitBtn = document.createElement('button');
    //add id to button from timeblock
    submitBtn.setAttribute('id','subBtn-'+item.timeBlock)
    //add bootstrap col classes and saveBtn class
    submitBtn.classList.add('col-12', 'col-md-1', 'col-lg-1', 'saveBtn')
    //add textContent to button
    submitBtn.textContent = 'Submit'
    //append button to rowDIv
    rowDiv.appendChild(submitBtn)
    //append rowDiv to display containers
    plannedDisplay.appendChild(rowDiv)
}
);;buttonID();
getPlan();
};

renderPlanner();

function buttonID(){
    timeSlots.forEach((item) =>{
        var buttonId = document.getElementById
        ('subBtn-'+item.timeBlock)
        buttonId.addEventListener('click', savePlan);
    })
}
function savePlan() {
    timeSlots.forEach((item) =>{ 
        var getId = document.getElementById("plan-"+item.timeBlock)
        var planName = getId.getAttribute('id')
        var getPlan = getId.value;
        if(getPlan !== ''){
        localStorage.setItem(planName, getPlan)
        saveMessage();
        }
        if(getPlan === ''){
            localStorage.removeItem(planName)
        }
    })
}

function getPlan() {
    timeSlots.forEach((item) =>{ 
        var getId = document.getElementById("plan-"+item.timeBlock)
        var planName = getId.getAttribute('id')
        var savedPlan = localStorage.getItem(planName)
        console.log(savedPlan)
        getId.textContent = savedPlan
})
}

