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
  - What is the purpose of the padStart method?
  - What is the purpose of the clearInterval method?
  - What is the purpose of the setInterval method?
- Summary:
*/

// Obtener elementos del DOM
const startBtn = document.getElementById('start'); // Botón de inicio
const stopBtn = document.getElementById('stop'); // Botón de detener
const resetBtn = document.getElementById('reset'); // Botón de reinicio
const timerEl = document.getElementById('timer'); // Elemento de visualización del temporizador

// Variables
let interval; // Variable para almacenar el intervalo
let timeLeft = 1500; // Tiempo restante en segundos (1500 segundos = 25 minutos)

// Función para actualizar el temporizador
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60); // Calcular los minutos restantes
  let seconds = timeLeft % 60; // Calcular los segundos restantes
  let formattedTime = `${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`; // Formatear el tiempo en formato MM:SS

  timerEl.textContent = formattedTime; // Actualizar el texto del temporizador en el DOM
}

// Función para iniciar el temporizador
function startTimer() {
  interval = setInterval(() => {
    timeLeft--; // Decrementar el tiempo restante en 1 segundo
    updateTimer(); // Actualizar el temporizador en el DOM
    if (timeLeft === 0) {
      clearInterval(interval); // Detener el intervalo
      alert("El tiempo ha terminado"); // Mostrar una alerta cuando el tiempo se haya agotado
      timeLeft = 1500; // Reiniciar el tiempo restante a 1500 segundos (25 minutos)
      updateTimer(); // Actualizar el temporizador en el DOM
    }
  }, 1000); // Ejecutar la función cada segundo (1000 milisegundos)
}

// Función para detener el temporizador
function stopTimer() {
  interval = clearInterval(interval); // Detener el intervalo
}

// Función para reiniciar el temporizador
function resetTimer() {
  interval = clearInterval(interval); // Detener el intervalo
  timeLeft = 1500; // Reiniciar el tiempo restante a 1500 segundos (25 minutos)
  updateTimer(); // Actualizar el temporizador en el DOM
}

// Agregar event listeners a los botones
startBtn.addEventListener('click', startTimer); // Iniciar el temporizador al hacer clic en el botón de inicio
stopBtn.addEventListener('click', stopTimer); // Detener el temporizador al hacer clic en el botón de detener
resetBtn.addEventListener('click', resetTimer); // Reiniciar el temporizador al hacer clic en el botón de reinicio
