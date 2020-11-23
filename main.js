//VARIABLES

// generate random number
let randomNumber = Math.floor(Math.random()*20) + 1;

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

//FUNCTIONS

//guess function
function checkGuess(){
    let userGuess = Number(guessField.value);
    if (guessCount === 1){
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';
    if (userGuess === randomNumber){
        lastResult.textContent = 'Congrats! You win!';
        lastResult.style.backgroundColor = 'green';
        lowHi.textContent ='';
        setGameOver();
    } else if (guessCount === 5){
        lastResult.textContent = 'Too Bad. Game Over!!'
        lastResult.style.backgroundColor = 'red';
        setGameOver();
    } else {
        lastResult.textContent ='Wrong!! Try  Again..';
        lastResult.style.backgroundColor = 'pink';
        if (userGuess<randomNumber){
            lowHi.textContent = 'Too Low!';
            lowHi.style.backgroundColor = 'gold';           
        } else if (userGuess>randomNumber){
            lowHi.textContent = 'Too High!';
            lowHi.style.backgroundColor = 'orange';
        }
    }
    guessCount++;
    guessField.value ='';
    guessField.focus();
}
guessSubmit.addEventListener('click', checkGuess);

//game over function
function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start';
    document.body.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

//reset game function
function resetGame(){
    guessCount = 1;

    const reset = document.querySelectorAll('.result p');
    for (let i=0; i<reset.length ; i++){
        reset[i].textContent='';
    }
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor ='white';

    randomNumber = Math.floor(Math.random()*20) +1;
}

