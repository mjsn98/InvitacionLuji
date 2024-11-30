var date = document.getElementById("countdown").getAttribute('data-init-value');
var end = new Date(date);

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    var days = Math.floor(distance / _day);
    var hours = Math.floor((distance % _day) / _hour);
    var minutes = Math.floor((distance % _hour) / _minute);
    var seconds = Math.floor((distance % _minute) / _second);
    if (distance < 0) {
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hs").innerHTML = "00";
        document.getElementById("min").innerHTML = "00";
        document.getElementById("seg").innerHTML = "00";
    } else {
        document.getElementById("days").innerHTML = String(days).padStart(2, '0');
        document.getElementById("hs").innerHTML = String(hours).padStart(2, '0');
        document.getElementById("min").innerHTML = String(minutes).padStart(2, '0');
        document.getElementById("seg").innerHTML = String(seconds).padStart(2, '0');
    }

}

timer = setInterval(showRemaining, 1000);
