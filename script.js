// initializing the variable
var hours = 0;
var minutes = 0;
var seconds = 0;
var count = 0;


// First set the timer is false so we can know stopwatch is in stop condition
var timer = false;



// start function
function start(){
    timer = true;
    stopwatch();

}

// stop function
function stop(){
    timer = false;

}

// reset function
function reset(){
    timer = false;
    // var hours = 00;
    // var minutes = 00;
    // var seconds = 00;
    // var count = 00;
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minute").innerHTML = "00";
    document.getElementById("second").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";

}


// main function
function stopwatch(){
    if(timer == true){
        count = count + 1;
        if(count == 100){
            seconds = seconds + 1;
            count = 0;
        }
        if(seconds == 60){
            minutes = minutes + 1;
            seconds = 0;
        }
        if(minutes == 60){
            hours = hours + 1;
            seconds = 0;
            minutes = 0;
        }
        document.getElementById("hours").innerHTML = hours;
        document.getElementById("minute").innerHTML = minutes;
        document.getElementById("second").innerHTML = seconds;
        document.getElementById("count").innerHTML = count;
        setTimeout("stopwatch()",10);
    }

}