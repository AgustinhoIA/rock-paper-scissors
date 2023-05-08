/* declare global varaibles*/
const options = ["rock", "paper", "scissors"]

/* create a script that choose at random between rock paper scissors and outputs the result*/
function botChoice() {
    let botRandomNumber = Math.random()*(1 - 3) + 1;
    let bChoice = options[botRandomNumber]
    return bChoice
}

/* Ask the player to choose an option between rock paper scissors */
    /* this can be by writing down the awnser o seleccting a buttom */
function playerChoice() {
    let pChoice = prompt("Choose rock, paper or scissors: ")
    
    while (true) {    
        if (!options.includes(pChoice)) {
                pChoice = prompt("Choose ONLY rock paper or scissors")
                continue;
            } else {
            break;
        }
    } return pChoice;
}


/* Make a decision tree for the outcome of every match */
    /* A simple decision tree made of nested If */
function gameOutcome() {
    document.getElementById("pChoice").innerHTML = 'You choice is ' + pChoice;
    document.getElementById('botChoice').innerHTML = 'PC choice is ' + bChoice;
    switch(pChoice) {

        case "rock":
            if (bChoice == "scissors") {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you win!'
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you loose!'
            } break;

        case "paper": 
            if (bChoice == "rock") {
                document.getElementById('gameOutcome').innerHTML = 'Paper beats rock: you win!'
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Scissors beats paper: you loose!'
            } break;
        case "scissors":
            if (bChoice == "paper") {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats paper: you win!'
            } if (bChoice == pChoice) {
                document.getElementById('gameOutcome').innerHTML = 'Draw!'
            } else {
                document.getElementById('gameOutcome').innerHTML = 'Rock beats scissors: you loose!'
            } break;
            /* this fuction is still incomplete but Ive run out of time for today. 
            I need to add the outcome as a quantifiable return*/
    } return winner
}
/* display the players awnsers */
/* display the result */
/* display the winner */
/* update the score and give the option to play again or stop playing*/ 


/* optional give the player the option to play endlessly or to set a number of matchs   
   and play until there is 'best of (max matchs selected)' winner */