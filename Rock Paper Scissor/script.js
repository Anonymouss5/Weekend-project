let computer_choice = document.getElementById('computer_choice');
let user_choice = document.getElementById('user_choice');
let result = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

let userChoice;
let computerChoice;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice = e.target.id;
    user_choice.innerHTML = userChoice; 
    computer_turn();
    winner();
}));


function computer_turn(){
    const random =  Math.floor(Math.random() * 3);

    if (random === 1){
        computerChoice = 'Rock';
    }
    if (random === 2){
        computerChoice = 'Paper';
    }
    if (random === 3){
        computerChoice = 'Scissor';
    }
    computer_choice.innerHTML = computerChoice;
}

function winner(){
    if (computerChoice == userChoice)
        result.innerHTML = 'DRAW';

    if (computerChoice == 'Rock' && userChoice == 'paper')
        result.innerHTML = 'USER WIN';
    if (computerChoice == 'Rock' && userChoice == 'scissor')
        result.innerHTML = 'COMPUTER WIN';
    if (computerChoice == 'Scissor' && userChoice == 'paper')
        result.innerHTML = 'COMPUTER WIN';
    if (computerChoice == 'Scissor' && userChoice == 'rock')
        result.innerHTML = 'USER WIN';
    if (computerChoice == 'Paper' && userChoice == 'rock')
        result.innerHTML = 'COMPUTER WIN';
    if (computerChoice == 'Paper' && userChoice == 'scissor')
        result.innerHTML = 'USER WIN';

    if (computerChoice == 'paper' && userChoice == 'Rock')
        result.innerHTML = 'COMPUTER WIN';
    if (computerChoice == 'scissor' && userChoice == 'Rock')
        result.innerHTML = 'USER WIN';
    if (computerChoice == 'paper' && userChoice == 'Scissor')
        result.innerHTML = 'USER WIN';
    if (computerChoice == 'rock' && userChoice == 'Scissor')
        result.innerHTML = 'COMPUTER WIN';
    if (computerChoice == 'rock' && userChoice == 'Paper')
        result.innerHTML = 'USER WIN';
    if (computerChoice == 'scissor' && userChoice == 'Paper')
        result.innerHTML = 'COMPUTER WIN';
    
}
