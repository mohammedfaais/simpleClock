const clockWidget = document.getElementById("clock");

clockWidget.onload(loadClock())

function loadClock(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let session = "AM";

    if(hours > 12){
        session = "PM";
    }

    if(hours === 0) {
        hours = 12;
    }

    seconds = (seconds < 10) ? "0" + seconds : seconds;

    const clock = `${hours}: ${minutes} :${seconds} ${session}`;

    clockWidget.innerText =  clock;

     setTimeout(function(){
        loadClock()
    },1000)
}