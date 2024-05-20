const minutesElement = document.querySelector("input[name='minutes']");
const secondsElement = document.querySelector("input[name='seconds']");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

startButton.addEventListener("click", () => {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - (parseInt(minutesElement.value, 10) * 60 + parseInt(secondsElement.value, 10)) * 1000;
    startButton.classList.add("font-bold");
    stopButton?.classList.remove("font-bold");
    tick();
  }
});

stopButton.addEventListener("click", () => {
  if (isRunning) {
    isRunning = false;
    clearTimeout(intervalID);
    startButton.classList.remove("font-bold");
    stopButton?.classList.add("font-bold");
  }
});

function tick() {
  if (!isRunning) return;

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  minutesElement.value = minutes.toString().padStart(2, '0');
  secondsElement.value = seconds.toString().padStart(2, '0');

  intervalID = setTimeout(tick, 1000);
}
