let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const lapList = document.getElementById("lap-list");

function updateDisplay() {
  let sec = seconds < 10 ? `0${seconds}` : seconds;
  let min = minutes < 10 ? `0${minutes}` : minutes;
  let hr = hours < 10 ? `0${hours}` : hours;
  timeDisplay.textContent = `${hr}:${min}:${sec}`;
}

function startTimer() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  lapList.innerHTML = ""; // Clear laps
}

function recordLap() {
  if (isRunning) {
    const lapItem = document.createElement("li");
    lapItem.textContent = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    lapList.appendChild(lapItem);
  }
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", recordLap);

// Initialize display
updateDisplay();
