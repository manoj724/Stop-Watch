const displayArea = document.getElementById("display");

let timer = null;           // Creating the timer which will be displayed on displayArea.
let startTime = 0;          // startTime stores the value of that time from which the timer has been been started.
let elapsedTime  = 0;       // elapsedTime stores the total time passed after starting and stopping the timer.
let isRunning = false       // It checks whether the timer is running or not.


// To start the timer
function start(){
    
    if (!isRunning){
        startTime = Date.now() - elapsedTime;         //Update the value of startTime
        // We will call the render() here at regular intervals to update our display.
        timer = setInterval(render, 10);
        isRunning = true;
    }
}


// To stop our timer
function stop(){

    if (isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        return;
    }
}


// To reset the timer and make it to zero
function reset(){

    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    displayArea.textContent = "00:00:00:00";
}



// To render the time on realtime on the display container
function render(){

    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    // Differntiating our elapsedTime into hrs, min, sec, ms so that it makes sense on our display instead just seeing the timer in milisec only. 
    let hours = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000 % 60);
    let milisecs = Math.floor((elapsedTime % 1000)/10);

    // To make our display in two digit only we used padStart method. It's a string method basically.
    hours = hours.toString().padStart(2,"0");
    minutes = minutes.toString().padStart(2,"0");
    seconds = seconds.toString().padStart(2,"0");
    milisecs = milisecs.toString().padStart(2,"0");

    displayArea.textContent = ` ${hours}:${minutes}:${seconds}:${milisecs} `;
}


