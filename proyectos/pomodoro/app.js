/*
Cornell Note:
- Notes: 
  - bring start button with the id of start
  - bring stop button with the id of stop
  - bring reset button with the id of reset
  - bring timer text with the id of timer

  - create a variable to store the interval
  - create a variable to store the timeLeft (1500 seconds)

  - create a function (updateTimer) to convert seconds to minutes and seconds
    - create a variable to store the minutes (math.floor(timeLeft/ 60)
    - create a variable to store the seconds (timeLeft % 60)
    - create a variable to store the formatedTime (minutes + ':' + seconds)
    - transform the formatedTime to a template string with the backticks
    - convert minutes and seconds to two digits with the padStart method

    - modify the timerEl text to display the formatedTime

  - create startTimer function
    - set interval with setInterval function 
    - decrement timeLeft by 1
    - call updateTimer every second
    - if timeLeft is equal to 0:
      - clear interval
      - make an alert
      - reset timeLeft to 1500

  - create stopTimer function
    - clear interval

  - create resetTimer function
    - clear interval
    - set timeLeft to 1500
    - call updateTimer

  - add event listener to start button and call startTimer function
  - add event listener to stop button and call stopTimer function
  - add event listener to reset button and call resetTimer function
  
- Questions:
- Summary:
*/

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const timerEl = document.getElementById('timer');


let interval;
let timeLeft = 1500;

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;

  timerEl.textContent = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alert("El tiempo ha terminado");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000)
}

function stopTimer() {
  interval = clearInterval(interval);
}

function resetTimer() {
  interval = clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);