/* declare global varaibles*/
const options = ["rock", "paper", "scissors"]
let playerPoints = 0
let botPoints = 0
let playedRounds = 0
let maxRounds = null
let pChoice = null
let bChoice = null

/* create a script that choose at random between rock paper scissors and outputs the result*/
function botChoice() {
    let botRandomNumber = Math.floor(Math.random()* 3);
    console.log("random number bot" + botRandomNumber)
    console.log(options[1])
    bChoice = options[botRandomNumber]
    console.log(bChoice)
    return bChoice
}

/* Ask the player to choose an option between rock paper scissors */
    /* this can be by writing down the awnser o seleccting a buttom */
function playerChoice() {
    pChoice = prompt("Choose rock, paper or scissors: ")
    
    while (true) {    
        if (!options.includes(pChoice)) {
                pChoice = prompt("Choose ONLY rock, paper or scissors")
                continue;
            } else {
            break;
        }
    } return pChoice;
}


/* Make a decision tree for the outcome of every match */
function gameOutcome() {
    console.log(pChoice)
    /* the problems seems to be on this lines, it should be after the element on the inedx.html */
    document.getElementById("playerChoice").innerHTML = 'Your choice is ' + pChoice;
    document.getElementById('botChoice').innerHTML = 'PC choice is ' + bChoice;
    switch(pChoice) {

        case "rock":
            if (bChoice == "scissors") {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you win!'
                playerPoints += 1
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you loose!'
                botPoints += 1
            } break;

        case "paper": 
            if (bChoice == "rock") {
                document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you win!'
                playerPoints += 1
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Scissors beats paper: you loose!'
                botPoints += 1
            } break;
        case "scissors":
            if (bChoice == "paper") {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats paper: you win!'
                playerPoints += 1
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you loose!'
                botPoints += 1
            } break;
            
    } 
    playedRounds = playedRounds + 1
    return playedRounds
}

/* Function to set the max number of rounds to be played */
function numberOfRounds(){
    while (true) {
        maxRounds = prompt("How many games do you want to play? please answer with positive numbers only:  ")
        if ((parseInt(maxRounds) < 1)) {
            alert('Answer with positive numbers only, 1 2 3 are valid answers')
            continue;
        } else {break;
        }
    } console.log(maxRounds)
   return maxRounds
}

function rockPaperScissors() {
    playerPoints = 0
    botPoints = 0
    rounds = 0
    numberOfRounds();
    while(rounds < maxRounds) {
        playerChoice();
        console.log("playerChoice ok " + pChoice )
        botChoice();
        console.log("botChoice ok " + bChoice )
        gameOutcome();
        console.log("gameOutcome ok " + "rounds: " + playedRounds + "player and bot point" + playerPoints + " " + botPoints)
        document.getElementById("gameStatus").innerHTML = "Scores: you: " + playerPoints + " PC: " + botPoints
    } 
    if (playerPoints > botPoints) {
        alert("Congratulations! you won!")
    } if (playerPoints < botPoints) {
        alert("Too bad, game over!")
    } else { alert("Its a draw!")
    }
}
rockPaperScissors()
/* display the result */
/* display the winner */
/* update the score and give the option to play again or stop playing*/ 


/* optional give the player the option to play endlessly or to set a number of matchs   
   and play until there is 'best of (max matchs selected)' winner */