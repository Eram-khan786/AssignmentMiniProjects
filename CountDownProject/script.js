const timerDisplay = document.getElementById("countdown");
var hr = 0;
var min = 0;
var sec = 0;
var countdownActive = false;
var countdownTimeout;

function startTimer() {
  if (!countdownActive) {
    hr = parseInt(document.getElementById("hours").value) || 0;
    min = parseInt(document.getElementById("minutes").value) || 0;
    sec = parseInt(document.getElementById("seconds").value) || 0;

    if (hr === 0 && min === 0 && sec === 0) {
      alert("Please set a duration for the countdown.");
      return;
    }

    countdownActive = true;
    timerCycle();
  }
}

function stopTimer() {
  countdownActive = false;
  clearTimeout(countdownTimeout);
}

function timerCycle() {
  if (countdownActive) {
    if (sec === 0 && min === 0 && hr === 0) {
      stopTimer();
      alert("Time's up!");
      return;
    }

    if (sec === 0) {
      if (min === 0) {
        if (hr > 0) {
          hr--;
          min = 59;
          sec = 59;
        }
      } else {
        min--;
        sec = 59;
      }
    } else {
      sec--;
    }

    updateDisplay();

    countdownTimeout = setTimeout(timerCycle, 1000);
  }
}

function updateDisplay() {
  let formattedHr = hr < 10 ? "0" + hr : hr;
  let formattedMin = min < 10 ? "0" + min : min;
  let formattedSec = sec < 10 ? "0" + sec : sec;

  timerDisplay.innerHTML = `${formattedHr}:${formattedMin}:${formattedSec}`;
}

function resetTimer() {
  countdownActive = false;
  clearTimeout(countdownTimeout);
  hr = 0;
  min = 0;
  sec = 0;
  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
  updateDisplay();
}

// Initialize display
updateDisplay();
