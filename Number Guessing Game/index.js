let msg1 = document.getElementById("message1");
let msg2 = document.getElementById("message2");
let msg3 = document.getElementById("message3");
let answer = Math.floor(Math.random() * 100 + 1);
let numberOfGuesses = 0;
let guessedNumbers = [];
let userGuess = document.getElementById("guess");
let display = document.getElementById("guess").onclick = function () {
    document.getElementById("clrbtn").style.display = "inline-block";
}
function play() {
    if (userGuess.value < 1 || userGuess.value > 100) {
        alert("Enter a number between 1 and 100");
    }
    else {
        guessedNumbers.push(userGuess.value);
        numberOfGuesses += 1;
        if (userGuess.value < answer) {
            msg1.textContent = "Your guess is too low.";
            msg2.textContent = "No of guesses: " + numberOfGuesses;
            msg3.textContent = "Guessed numbers are: " + guessedNumbers;
        }
        else if (userGuess.value > answer) {
            msg1.textContent = "Your guess is too high.";
            msg2.textContent = "No of guesses: " + numberOfGuesses;
            msg3.textContent = "Guessed numbers are: " + guessedNumbers;
        }
        else if (userGuess.value == answer) {
            msg1.textContent = "Yippie you Win!";
            msg2.textContent = "The number was: " + answer;
            msg3.textContent = "You guessed it in " + numberOfGuesses + " guesses";
            document.getElementById("mybtn").disabled = true;
            document.getElementById("pabtn").style.display = "inline-block";
        }
    }
}

// clearing input field
document.getElementById("clrbtn").onclick = function () {
    userGuess.value = "";
}
// play again btn
document.getElementById("pabtn").onclick = function () {
    window.location.reload();
}
