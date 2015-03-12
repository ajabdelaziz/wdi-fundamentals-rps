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

function getPlayerMove(move) {
	var move = Math.random();
	if (move = 1) {
	return "Rock";
	}
	else if (move = 2) {
	return "Paper"; }
	else if (move = 3) {
	return "Scissors"}
	else if (move > 3 || move = 0) {
	return 'getInput()';}
	}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
	var move = Math.random();
	if (move = 1) {
	return "Rock";
	}
	else if (move = 2) {
	return "Paper"; }
	else if (move = 3) {
	return "Scissors"}
	else if (move > 3 || move = 0) {
	return 'randomPlay()';}
	}
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    
}

function getWinner(playerMove,computerMove) {
    if (PlayerMove.equals(ComputerMove)) {
	System.out.println("It's a tie!");
    }
	else if (playerMove.equals("Rock")){
	if (computerMove.equals("Scissor"))
	return playerWins;
}
	else if (playerMove.equals("Paper")){
	if (computerMove.equals("Scissor"))
	return computerWins;
}
else if (playerMove.equals("Scissor")){
	if (computerMove.equals("Paper"))
	return playerWins;
}
else if (playerMove.equals("Rock")){
	if (computerMove.equals("Paper"))
	return computerWins;
}
else if (playerMove.equals("Paper")){
	if (computerMove.equals("Rock"))
	return playerWins;
}
else if (playerMove.equals("Scissors")){
	if (computerMove.equals("Rock"))
	return computerWins;
}
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

