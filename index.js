let computerGuess;
let userGuess = [];
let userNumberUpdate = document.getElementById("textOutput");

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

// main logic of our app

const compareGuess = () => {
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess; 

    // check the value low or high 
    if(userNumber > computerGuess) {
        userNumberUpdate.innerHTML = "Your guess is High 😮";
    } else if (userNumber < computerGuess) {
        userNumberUpdate.innerHTML = "Your guess is Low 😌";
    } else {
       userNumberUpdate.innerHTML = "It's Correct 😀";
    }

}

const easyMode = () => {
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    maxGuess = 5;
    startGame();
}

