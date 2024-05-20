const minutesElement = document.querySelector("input[name='minutes']");
const secondsElement = document.querySelector("input[name='seconds']");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let timeoutID;
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
  timeoutID = setTimeout(() => {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;
    const newMinutes = Math.floor(elapsedTime / (1000 * 60));
    const newSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    secondsElement.value = newSeconds.toString().padStart(2, "0");
    minutesElement.value = newMinutes.toString().padStart(2, "0");
    tick();
  }, 1000);
}
