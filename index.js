let computerGuess;
let userGuess = [];

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").display = "none";
    document.getElementById("gameArea").style.display = "none";
};

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}

