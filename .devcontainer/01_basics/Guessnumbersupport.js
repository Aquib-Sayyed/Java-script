const randomnumber = console.log(Math.random()*100 +1);

const subt = document.querySelector('#subt');
const UserInput = document.querySelector('#guessfield');
const GuessesSlot = document.querySelector('#Guesses');
const remaining = document.querySelector('.LastResult');
const loworhi = document.querySelector('.lowOrHi');
const resultParas = document.querySelector('.resultparas');

let prevGuess = [];
let numGuess = 1; 

let playGame=   true;

if(playGame== true)
{
    const guess = parseInt(UserInput.value);
    validateGuess(guess);
}

function validateGuess(guess)
{
// this function will validate only all the guesses is under 100, We will call al the function inside this
}

function CheckGuess(guess)
{
// this function will check this is equal to random or not and other things if it is equal
//  function should display you won the game
}

function DisplayGuesses(Message)
{
// it will clean the value update the variables and label
}

function DisplayMessage(Message)
{
// it will clean the value
} 

