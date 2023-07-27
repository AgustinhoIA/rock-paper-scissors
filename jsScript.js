/* declare global varaibles*/
const options = ["rock", "paper", "scissors"]
let playerPoints = 0
let botPoints = 0
let playedRounds = 0
let maxRounds = null
let pChoice = null
let bChoice = null

/* create a script that choose at random between rock paper scissors and outputs the result*/

function getBotChoice() {
    let botRandomNumber = Math.floor(Math.random()* 3);
    console.log("random number bot" + botRandomNumber)
    console.log(options[1])
    bChoice = options[botRandomNumber]
    console.log(bChoice)
    return bChoice
}

/* Ask the player to choose an option between rock paper scissors */
    
function getPlayerChoice() {
    pChoice = prompt("Choose rock, paper or scissors: ")
    
    while (true) {    
        if (!options.includes(pChoice)) {
                pChoice = prompt("Choose ONLY rock, paper or scissors")
                continue;
            } if (pChoice == null) {
                break; 
            } else {
            break;
        }
    } return pChoice;
}


/* Make a decision tree for the outcome of every match */
function playRound(pChoice) {

    switch(pChoice) {

        case "rock":
            if (bChoice == "scissors") {
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you win!' */
                alert('PC choose '+ bChoice + ':   you win!')
                playedRounds = playedRounds + 1
                playerPoints += 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                alert("Draw!")
            } if (bChoice == "paper") {
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you loose!' */
                alert('PC choose '+ bChoice + ':   you loose!')
                playedRounds = playedRounds + 1
                botPoints += 1
            } break;

        case "paper": 
            if (bChoice == "rock") {
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you win!' */
                alert('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                alert("Draw!")
            } if (bChoice == "scissors") {
                /* document.getElementById('gameOutcome').innerHTML = 'Scissors beats paper: you loose!' */
                alert('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;

        case "scissors":
            if (bChoice == "paper") {
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats paper: you win!' */
                alert('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                alert("Draw!")
            } if (bChoice == "rock") {
                 /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you loose!' */
                 alert('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;
            
    } 
    alert("Your score: " + playerPoints +  "  -  PC score: " + botPoints)
    console.log("played rounds: " + playedRounds)
    return playedRounds
}

 /* function numberOfRounds(){
    while (true) {
        maxRounds = prompt("How many games do you want to play? please answer with positive numbers only:  ")
        if ((parseInt(maxRounds) < 1)) {
            alert('Answer with positive numbers only, 1 2 3 are valid answers')
            continue;
        } else {break;
        }
    } console.log(maxRounds)
   return maxRounds
} */

/* main function */

function rockPaperScissors() {
    playerPoints = 0
    botPoints = 0
    playedrounds = 0
    /* numberOfRounds(); */
    
    getPlayerChoice();
    console.log("getPlayerChoice ok " + pChoice )
    getBotChoice();
    console.log("getBotChoice ok " + bChoice )
    playRound();
    console.log("gameOutcome ok " + "rounds: " + playedRounds + "player and bot point" + playerPoints + " " + botPoints)
    document.getElementById("gameStatus").innerHTML = "Scores: you: " + playerPoints + "  -  PC: " + botPoints
 
    /* if (playerPoints > botPoints) {
        alert("Congratulations! you won!")
    } if (playerPoints < botPoints) {
        alert("Too bad, game over!")
    } /* else { alert("Its a draw!")
    } */
}
rockPaperScissors()
