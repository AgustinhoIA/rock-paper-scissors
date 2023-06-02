/* declare global varaibles*/

const options = ["rock", "paper", "scissors"]
let playerPoints = 0
let botPoints = 0
let playedRounds = 0
let maxRounds = null
const sbRnPl = document.querySelector('#playedRounds')
const sbPS = document.querySelector('#playerScore')
const sbBS = document.querySelector('#botScore')
const pHand = document.querySelector('#pHand')
const bHand = document.querySelector('#bHand')
    


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
            pHand.src = "img/lRock.jpg"
            if (bChoice == "scissors") {
                bHand.src = "img/rScissors.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playedRounds = playedRounds + 1
                playerPoints += 1
            } if (bChoice == pChoice) {
                bHand.src = "img/rRock.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "paper") {
                bHand.src = "img/rPaper.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you loose!' */
                console.log('PC choose '+ bChoice + ':   you loose!')
                playedRounds = playedRounds + 1
                botPoints += 1
            } break;

        case "paper": 
            pHand.src = "img/lPaper.jpg"
            if (bChoice == "rock") {
                bHand.src = "img/rRock.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                bHand.src = "img/rPaper.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "scissors") {
                bHand.src = "img/rScissors.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Scissors beats paper: you loose!' */
                console.log('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;

        case "scissors":
            pHand.src = "img/lScissors.jpg"
            if (bChoice == "paper") {
                bHand.src = "img/rPaper.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats paper: you win!' */
                console.log('PC choose '+ bChoice + ':   you win!')
                playerPoints += 1
                playedRounds = playedRounds + 1
            } if (bChoice == pChoice) {
                bHand.src = "img/rScissors.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Draw!' */
                console.log("Draw!")
            } if (bChoice == "rock") {
                bHand.src = "img/rRock.jpg"
                /* document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you loose!' */
                console.log('PC choose '+ bChoice + ':   you loose!')
                botPoints += 1
                playedRounds = playedRounds + 1
            } break;
            
    } 
    console.log("Your score: " + playerPoints +  "  -  PC score: " + botPoints);
    console.log("played rounds: " + playedRounds);
    sbRnPl.textContent = playedRounds
    sbPS.textContent = playerPoints
    sbBS.textContent = botPoints
    return playedRounds
}

   /* actual game */
   
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
        sbRnPl.textContent = playedRounds
        sbPS.textContent = playerPoints
        sbBS.textContent = botPoints
        bHand.src = ""
        pHand.src = ""
    });

    console.log("gameOutcome ok " + "rounds: " + playedRounds + "player and bot point" + playerPoints + " " + botPoints)
    /* document.getElementById("gameStatus").innerHTML = "Scores: you: " + playerPoints + "  -  PC: " + botPoints */
