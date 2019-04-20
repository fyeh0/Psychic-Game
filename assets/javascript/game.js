// array of computer guess choices
const possibleGuess = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// tracked variables
let wins = 0;
let losses = 0;
let guessesLeft = 3;
let numbersGuessed = [];


const winsText = document.querySelector("wins");
const lossesText = document.querySelector("losses");
const guessesLeftText = document.querySelector("guesses-left");
const guesses = document.querySelector("numbers-guessed");

// game start
document.onkeyup = function (event) {
    const userGuess = event.key;
    const computerGuess = possibleGuess[Math.floor(Math.random() * possibleGuess.length)];
    console.log("Userguess", userGuess)
    console.log("ComputerGuess", computerGuess)

    if (userGuess === "1" || userGuess === "2" || userGuess === "3" || userGuess === "4" || userGuess === "5" || userGuess === "6" || userGuess === "7" || userGuess === "8" || userGuess === "9") {
        if (userGuess === computerGuess) {
            wins++;
            guessesLeft--;
            console.log("Guessed Right")
        } else {
            guessesLeft--;
            console.log("Guessed Wrong")

        }
        console.log(wins, losses, guessesLeft)

    }

};