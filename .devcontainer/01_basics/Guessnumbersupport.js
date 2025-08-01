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
subt.addEventListener('click', function(e){
    e.preventDefault()
    const guess = parseInt(UserInput)
     validateGuess(guess)
})
}

function validateGuess(guess)
{
// this function will validate only all the guesses is under 100, We will call al the function inside this
if(isNaN(guess)){
    alert('Kindly enter a valid number')
}else if(guess<1)
{
    alert('Kindly enter a number more then 1')
}else if(guess>100)
{
    alert('Kindly enter a number less then 100')
}else{
    prevGuess.push(guess)
    if(numGuess === 11)
    {
DisplayGuesses(guess)
DisplayMessage(`Game over. Random number was ${randomnumber}`)
endgame()
    }else{
        DisplayGuesses(guess)
        CheckGuess(guess)
    }
}


}

function CheckGuess(guess)
{
// this function will check this is equal to random or not and other things if it is equal
//  function should display you won the game
if(guess === randomnumber){
    DisplayMessage('You guessed it right')
    endgame()
}
else if(guess < randomnumber){
    DisplayMessage('You guess is too low')
    endgame()
}
else if(guess > randomnumber){
    DisplayMessage('You guessed is too high')
    endgame()
}

}

function DisplayGuesses(Message)
{
// it will clean the value update the variables and label

UserInput.value='';
GuessesSlot.innerHTML += `${guess}`
numGuess++
remaining.innerHTML = `${11- numGuess}`

}

function DisplayMessage(Message)
{
// it will clean the value
} 

