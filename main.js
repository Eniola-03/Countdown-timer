
let [seconds, minutes, hours] = [60,55,9]
let displayTime = document.getElementById("displayTime");
let timer = null

function stopwatch(){
    seconds--;
    if(seconds == 0){
        seconds = 60;
        minutes--;
        if(minutes == 0){
            minutes = 60;
            hours--
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = h + ":"+ m +":"+ s;
}

function watchStart(){
    
    timer = setInterval(stopwatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

