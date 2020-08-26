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

up.addEventListener('click', function(Event){
    rocket.style.position = 'relative';
    rocket.style.top += '-10px';
    shuttleHeight.innerHTML += Number(10000);
});

down.addEventListener('click', function(Event){
    rocket.style.position = 'relative';
    rocket.style.bottom += '-10px';
    shuttleHeight.innerHTML -= Number(10000);
});

right.addEventListener('click', function(Event){
    rocket.style.position = 'relative';
    rocket.style.right += '-10px';
});

left.addEventListener('click', function(Event){
    rocket.style.position = 'relative';
    rocket.style.left += '-10px';
});

});


// When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
// The rocket image should move 10 px in the direction of the button that was clicked.
// If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.

// rocketImage.style.position = 
// rocketImage.style.left = 
// rocketImage.style.bottom = 
