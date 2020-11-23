// generate random number
let randomNumber = Math.floor(Math.random()*100) + 1;

// guesses
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowHi = document.querySelector('.lowHi');

//input submit
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

//guess count
let guessCount = 1;
let resetButton

