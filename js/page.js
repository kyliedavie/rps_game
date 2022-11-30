sessionStorage.wins = 0 ;
sessionStorage.losses = 0;

function game (x) {
//Plays game

//Your choice for game
    sessionStorage.mychoice = x;

    var y = Math.ceil(Math.random() * 3);
    
//Opponent Choice for game
    if (y == 1) {
        sessionStorage.opponentChoice = "rock";
    }
    else if (y == 2) {
        sessionStorage.opponentChoice = "paper";
    }
    else if (y == 3) {
        sessionStorage.opponentChoice = "scissors";
    }
    if ((sessionStorage.mychoice == "rock") && (sessionStorage.opponentChoice == "paper")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "rock") && (sessionStorage.opponentChoice == "scissors")) {
        sessionStorage.result = "win"
    }
    else if ((sessionStorage.mychoice == "paper") && (sessionStorage.opponentChoice == "rock")) {
        sessionStorage.result = "win"
    }
    else if ((sessionStorage.mychoice == "paper") && (sessionStorage.opponentChoice == "scissors")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "scissors") && (sessionStorage.opponentChoice == "rock")) {
        sessionStorage.result = "lose"
    }
    else if ((sessionStorage.mychoice == "scissors") && (sessionStorage.opponentChoice == "paper")) {
        sessionStorage.result = "win"
    }
    else if (sessionStorage.mychoice == sessionStorage.opponentChoice)
        sessionStorage.result = "tie"
    
//Creates Notification of game outcome and keeps score 
    if (sessionStorage.result == "win") {
        document.getElementById ("result").innerHTML = "You won :) ";
        sessionStorage.wins++;
        document.getElementById ("pscore").innerHTML = sessionStorage.wins;
    }
    else if (sessionStorage.result == "lose") {
        document.getElementById ("result").innerHTML = "You lose :( ";
        sessionStorage.losses++;
        document.getElementById ("oscore").innerHTML = sessionStorage.losses;
    }
    else if (sessionStorage.result == "tie") {
        document.getElementById ("result").innerHTML = "It's a tie!";
    }

//Shows Opponents Img
    document.getElementById("o-img").src = "svg/"+sessionStorage.opponentChoice+".svg";
}
