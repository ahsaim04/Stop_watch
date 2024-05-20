const minutesElement = document.querySelector("input[name='minutes']");
const secondsElement = document.querySelector("input[name='seconds']");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");

let intervalID;
let startTime = 0;
let elapsedTime = 0;
let timeoutID;
let flag = true;

startButton.addEventListener("click", () => {
  secondsElement.value = "00"; 
  minutesElement.value = "00"; 
  flag = true;
  startTime = Date.now();
  startButton.classList.add("font-bold");
  stopButton?.classList.remove("font-bold");
  tick();
});

stopButton.addEventListener("click", () => {
  flag = false;
  startButton.classList.remove("font-bold");
  stopButton?.classList.add("font-bold");
});

async function tick() {
  if (!flag) return;

  await sleep(1000);

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  const newMinutes = Math.floor(elapsedTime / (1000 * 60));
  const newSeconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  secondsElement.value = newSeconds.toString().padStart(2, "0");
  minutesElement.value = newMinutes.toString().padStart(2, "0");
  tick();
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
