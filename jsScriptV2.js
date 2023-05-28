/* declare global varaibles*/
const options = ["rock", "paper", "scissors"]
let playerPoints = 0
let botPoints = 0
let playedRounds = 0
let maxRounds = null


/* create a script that choose at random between rock paper scissors and outputs the result*/

function getBotChoice() {
    let botRandomNumber = Math.floor(Math.random()* 3);
    bChoice = options[botRandomNumber]
    console.log("bot choice is " + bChoice)
    return bChoice
}

/* Make a decision tree for the outcome of every match */
function playRound(pChoice) {
    getBotChoice();

    switch(pChoice) {

        case "rock":
            if (bChoice == "scissors") {
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playedRounds = playedRounds + 1
                playerPoints += 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "paper") {
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you loose!' */
                console.log('PC choose '+ bChoice + ':   you loose!')
                playedRounds = playedRounds + 1
                botPoints += 1
            } break;

        case "paper": 
            if (bChoice == "rock") {
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "scissors") {
                /* document.getElementById('gameOutcome').innerHTML = 'Scissors beats paper: you loose!' */
                console.log('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;

        case "scissors":
            if (bChoice == "paper") {
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats paper: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "rock") {
                 /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you loose!' */
                 console.log('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;
            
    } 
    console.log("Your score: " + playerPoints +  "  -  PC score: " + botPoints)
    console.log("played rounds: " + playedRounds)
    return playedRounds
}

   
    /* numberOfRounds(); */
    document.getElementById("rock").addEventListener("click", function () {
        playRound("rock");
    });
    document.getElementById("paper").addEventListener("click", function () {
        playRound("paper");
    });
    
    document.getElementById("scissors").addEventListener("click", function () {
        playRound("scissors");
    });

    document.getElementById("resetbtn").addEventListener("click", function() {
        playerPoints = 0
        botPoints = 0
        playedRounds = 0
    });

    console.log("gameOutcome ok " + "rounds: " + playedRounds + "player and bot point" + playerPoints + " " + botPoints)
    /* document.getElementById("gameStatus").innerHTML = "Scores: you: " + playerPoints + "  -  PC: " + botPoints */
