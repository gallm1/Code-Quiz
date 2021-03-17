function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeInterval.textContent = timeLeft + ' seconds remaining';
        }
        timeLeft--;
        }

}