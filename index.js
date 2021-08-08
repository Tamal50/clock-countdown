setInterval( function() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var currentDate = currentTime.toDateString();
    var period = "AM";
    if (hours >= 12) {
        period = "PM";
    }
    if (hours > 12) {
        hours = hours - 12;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var clockTime = hours + ":" + minutes + ":" + seconds + ":" + period;
    var clock = document.getElementById('clock') ;
    clock.innerHTML = clockTime;

    var date = document.getElementById('date')
    date.innerHTML = currentDate;


}, 1000);


function countdown(endtime) {
    var time = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((time / 1000) % 60);
    var minutes = Math.floor((time / 1000 / 60) % 60);
    var hours = Math.floor((time / (1000 * 60 *60)) % 24);
    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    return {
        'time' : time,
        'days' : days,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds,
    };
};
function initializeTimer (id, endtime) {
        var clock = document.getElementById(id);
        var daysSpan = clock.querySelector('.days');
        var hoursSpan = clock.querySelector('.hours');
        var minutesSpan = clock.querySelector('.minutes');
        var secondsSpan = clock.querySelector('.seconds');

    function updateTimer() {
        var t = countdown(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        };
    };

    updateTimer();
    var timeinterval = setInterval(updateTimer, 1000);
};
var eventDate = new Date("May 8, 2022 12:00:00").getTime();
var deadline = new Date(eventDate);
initializeTimer('clockdiv' , deadline);