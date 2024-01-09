const create = require("prompt-sync");

// Traemos todos los elementos que necesitamos del html
const board = document.getElementById('board');
const scoreBoard = document.getElementById('scoreBoard');
const startButton = document.getElementById('start');
const gameOver = document.getElementById('gameOver');


// Configuraciones del juego
const boardSize = 10;
const gameSpeed = 100;
// Objeto que mapea los tipos de cuadrados
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2
};

// Objeto que mapea las direcciones
const directions = {
  ArrowUp: -10,
  ArrowDown: 10,
  ArrowRight: 1,
  ArrowLeft: -1
};

  // Variables del juego (se modifican durante el juego)
let snake; // array para guardar las posiciones de la serpiente
let score; // puntaje del jugador
let direction; // setea la direccion que presiona el jugador
let boardSquares; // array con información del tablero
let emptySquares; // array con las posiciones vacías del tablero para generar la comida
let moveInterval; // intervalo de tiempo para mover la serpiente


// Función para crear el tablero
const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    row.forEach((column, columnIndex) => {
      const squareValue = `${rowIndex}${columnIndex}`;
      const squareElement = document.createElement('div');
      squareElement.setAttribute('class', 'square emptySquare');
      squareElement.setAttribute('id', squareValue);

    })
  })
};


const setGame = () => {
  // serpiente tiene un largo inicial de 4
  snake = ['00', '01', '02', '03'];
  score = snake.length;
  // direccion incial de la serpiente
  direction = 'ArrowRight';
  // Estrucutra de datos para guardar la información del tablero
  // Arras de dos dimensiones
  boardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare));
  // reseteamos el juego borrando el tablero
  board.innerHTML = '';
  // este array se va a llenar a medida que se crea el tablero
  emptySquares = [];
  // se genera el tablero con la función createBoard
  createBoard();
  //console.log(boardSquares);
};

// Funcion para setear el juego (darle valores a las variables del juego)
const startGame = () => {
  // Cuando el juego termina, hay que setear de nuevo el juego
  setGame();
};



// cuando se haga click se llama a la función startGame
startButton.addEventListener('click', startGame);


