

function analogClock(){
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    let hourshandle = (360/12)*hours;
    let minuteshandle = (360/60)*minutes;
    let secondshandle = (360/60)*seconds;
    console.log(hourshandle);
    document.getElementById("hourshandle").style.transform = "rotate(" + hourshandle + "deg)";
    document.getElementById("minuteshandle").style.transform = "rotate(" + minuteshandle + "deg)";
    document.getElementById("secondshandle").style.transform = "rotate(" + secondshandle + "deg)";
}
setInterval(analogClock,500);



