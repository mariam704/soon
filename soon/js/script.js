var CountDownDate = new Date("Dec 1, 2022 12:00:00").getTime();


var countdownfunction = setInterval(function() {

    var TimeNow = new Date().getTime();
    // console.log( getTime())
    var currentTime = CountDownDate - TimeNow;
    var days = Math.floor(currentTime / (1000 * 60 * 60 * 24));
    console.log
    var hours = Math.floor((currentTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((currentTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((currentTime % (1000 * 60)) / 1000);

    document.getElementById("c_days").innerHTML = days + "<br> Days";
    document.getElementById("c_hours").innerHTML = hours + "<br> Hours";
    document.getElementById("c_minutes").innerHTML = minutes + "<br> Minutes";
    document.getElementById("c_seconds").innerHTML = seconds + "<br> Seconds";

    if (currentTime < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_days").innerHTML = "0 <br> Days";
    }

    if (currentTime < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_hours").innerHTML = "0 <br> Hours";
    }

    if (currentTime < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_minutes").innerHTML = "0 <br> Minutes";
    }

    if (currentTime < 0) {
        clearInterval(countdownfunction);
        document.getElementById("c_seconds").innerHTML = "0 <br> Seconds";
    }

}, 1000);
