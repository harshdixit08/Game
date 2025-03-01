let rock = document.querySelector(".one");
let paper = document.querySelector(".two");
let scissor = document.querySelector(".three");
let playerChoice;
let result = document.querySelector(".result");
let result1 = document.querySelector(".resultheading");
let scoreUser = document.querySelector(".scoreUser");
let scoreComp = document.querySelector(".scoreComp");

rock.addEventListener('click', () => {
    playerChoice = 'rock';
    determineWinner();
});

paper.addEventListener('click', () => {
    playerChoice = 'paper';
    determineWinner();
});

scissor.addEventListener('click', () => {
    playerChoice = 'scissor';
    determineWinner();
});

function computerChoose() {
    let arr = ['rock', 'paper', 'scissor'];
    let choice = Math.floor(Math.random() * arr.length);
    return arr[choice];
}

function determineWinner() {
    let computerChoice = computerChoose();
    
    if (playerChoice === computerChoice) {
        result1.innerText = "Game was Draw, Please play again";
        result.style.backgroundColor = "black";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissor') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissor' && computerChoice === 'paper')
    ) {
        console.log(computerChoice);
        console.log(playerChoice);
        result1.innerText = `You won ! ${playerChoice} beats  ${computerChoice}`;
        result.style.backgroundColor = "green";
        scoreUser.innerText = parseInt(scoreUser.innerText)+1;
    } else {
        console.log(computerChoice);
        console.log(playerChoice);
        result1.innerText = `You loose ! ${computerChoice} beats  ${playerChoice}`;
        result.style.backgroundColor = "red";
        scoreComp.innerText = parseInt(scoreComp.innerText)+1;
    }
}