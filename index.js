let computerGuess;
let userGuess = [];

const init = () => {
    computerGuess = Math.floor(Math.random() * 100);
    // console.log(computerGuess);
    document.getElementById("newGameButton").display = "none";
    document.getElementById("gameArea").style.display = "none";

};

