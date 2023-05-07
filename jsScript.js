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
    } 
    return pChoice;
}


/* Make a decision tree for the outcome of every match */
    /* A simple decision tree made of nested If */

/* display the players awnsers */
/* display the result */
/* display the winner */
/* update the score and give the option to play again or stop playing*/ 


/* optional give the player the option to play endlessly or to set a number of matchs   
   and play until there is 'best of (max matchs selected)' winner */