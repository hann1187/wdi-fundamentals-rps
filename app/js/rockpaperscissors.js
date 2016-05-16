////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  var getPlayerMove= function(move) {
      if ((move === 'rock') || (move === 'paper') || (move ==='scissors' )){
          return move;
      }else {
          getInput();
      }
    }

  // Write an expression that operates on a variable called `move`
  // If a `move` has a value, your expression should evaluate to that value.
  // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
var getComputerMove = function (move) {
    if ((move ==='rock') || (move ==='paper') || (move==='scissors' )) {
        return move;
    }else {
        return randomPlay();
    }
 }

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
var getWinner = function(playerMove, computerMove) {
    var playerMove = getPlayerMove(move);
    var computerMove = getComputerMove(move);
    var winner
    if (playerMove===computerMove){
      winner === "tie";
    }
    else if (playerMove==="rock" &&computerMove==="scissors"){
      winner==="Player!";
    }
    else if (playerMove==="paper" &&computerMove==="rock"){
      winner==="Player!";
    }
    else if (playerMove==="scissors" &&computerMove=="paper"){
      winner==="Player!"
    }
    else {
      winner==="Computer!";
    }
    return winner;
    }

// Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
/* YOUR CODE HERE */
function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins <=5 && computerWins <=5) {
      var playerMove = getPlayerMove(move);
      var computerMove = getComputerMove(move);
      var winner = getWinner(playerMove, computerMove);
      if (winner=== "player") {
        console.log("Player Wins!" + "" + "Player chose" + playerMove + "while computer chose" + computerMove);
        playerWins += 1;
        console.log("The score is now" + playerWins + "to" + computerWins + ".");
    }
    else if (winner === "computer") {
        console.log("Computer Wins!" + "" + "Computer chose" + computerMove + "while player chose" + playerMove);
        computerWins += 1;
        console.log("The score is now" + playerWins + "to" + computerWins + ".");
    }
    else {
        console.log("It's a tie!")
        computerWins +=1;
        playerWins +=1;
    }
    return (playerWins, computerWins);
      }
    }



}
