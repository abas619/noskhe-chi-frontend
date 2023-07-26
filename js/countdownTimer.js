var initialTimes = {};  // ذخیره زمان اولیه هر تایمر
var timerIntervals = {};// ذخیره شناسه تایمر هر تایمر

function startTimer(timerId, countdownNumber) {
    var spanElement = document.getElementById(`timer_${timerId}`);
    var btnResendCode = document.querySelector(`.btn-resend-code_${timerId}`);

    var timerElementString = `timerـ${timerId}`;
    var timeLeft = countdownNumber;

    btnResendCode.style.display = 'none'
    spanElement.style.display = 'block'

    if (initialTimes[timerElementString] === undefined) {
        initialTimes[timerElementString] = timeLeft;  // ذخیره زمان اولیه
    }

    if (timerIntervals[timerId] !== undefined) {
        clearInterval(timerIntervals[timerId]);  // از بین بردن تایمر قبلی
    }

    timerIntervals[timerId] = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timerIntervals[timerId]);
            btnResendCode.style.display = 'block'
            spanElement.style.display = 'none'
            spanElement.innerHTML = "00:00";
        } else {
            spanElement.textContent = formatTime(timeLeft);
            timeLeft--;
        }
    }, 1000);

}

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
    return minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}