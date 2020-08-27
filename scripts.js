// Write your JavaScript code here.
// Remember to pay attention to page loading!


window.addEventListener('load', function(){
    console.log('window loaded');

let takeOff = document.getElementById('takeoff');
let flightStatus = document.getElementById('flightStatus');
let shuttleBackground = document.getElementById('shuttleBackground');
let shuttleHeight = document.getElementById('spaceShuttleHeight');
let land = document.getElementById('landing');
let abort = document.getElementById('missionAbort');
let up = document.getElementById('up');
let down = document.getElementById('down');
let right = document.getElementById('right');
let rocket = document.getElementById('rocket');
let buttons = document.getElementById('buttons');
let rocketPosition = null;

rocket.style.position = 'absolute';

takeOff.addEventListener('click', function(){
    let response = window.confirm('Confirm that the shuttle is ready for takeoff.');
    if(response){
        flightStatus.innerHTML ='Shuttle in Flight';
        shuttleBackground.style.backgroundColor ='blue';
        shuttleHeight.innerHTML = Number(10000);
    }
});

land.addEventListener('click', function(){
    window.alert('The shuttle is landing. Landing gear engaged.');
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = Number(0);

});

abort.addEventListener('click', function(){
    let response = window.confirm("Confirm that you want to abort the mission.");

    if(response){
        flightStatus.innerHTML = 'Mission Aborted';
        shuttleBackground.style.backgroundColor = 'green';
    shuttleHeight.innerHTML = Number(0);
    }
});

function shuttleHeightCalculation(num){

}

up.addEventListener('click', function(){
    rocketPosition -= 10;
        rocket.style.top = rocketPosition + "px";
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
});

down.addEventListener('click', function(){
    rocketPosition += 10;
        rocket.style.top = rocketPosition + "px";
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
});

right.addEventListener('click', function(){
    rocketPosition += 10;
        return rocket.style.right = rocketPosition + "px";
});

    left.addEventListener("click", function() {
        rocketPosition -= 10;
        return rocket.style.left = rocketPosition + "px";
    });

});


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

// rocketImage.style.position = 
// rocketImage.style.left = 
// rocketImage.style.bottom = 
