// @ts-check

document.addEventListener("DOMContentLoaded", () => {
    const minutesElement = document.querySelector("input[name='minutes']");
    const secondsElement = document.querySelector("input[name='seconds']");
    const startButton = document.getElementById("start-button");
    const stopButton = document.getElementById("stop-button");
  
    let intervalId;
    let startTime = 0;
    let isRunning = false;
  
    const updateDisplay = () => {
      const currentTime = Date.now() - startTime;
      const totalSeconds = Math.floor(currentTime / 1000);
  
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
  
      minutesElement.value = String(minutes).padStart(2, "0");
      secondsElement.value = String(seconds).padStart(2, "0");
    };
  
    const startStopwatch = () => {
      if (!isRunning) {
        isRunning = true;
        startTime = Date.now() - (parseInt(minutesElement.value, 10) * 60 + parseInt(secondsElement.value, 10)) * 1000;
  
        startButton.disabled = true;
        stopButton.disabled = false;
        startButton.classList.add("font-bold");
        stopButton?.classList.remove("font-bold");
  
        intervalId = setInterval(updateDisplay, 1000);
      }
    };
  
    const stopStopwatch = () => {
      if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);

  
        startButton.disabled = false;
        stopButton.disabled = true;
        startButton.classList.remove("font-bold");
        stopButton?.classList.add("font-bold");
      }
    };
  
    startButton.addEventListener("click", startStopwatch);
  
    stopButton.addEventListener("click", stopStopwatch);
  });
  