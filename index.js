let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput");
let userNumberUpdate = document.getElementById("inputBox");
let start = new Audio("./audio/start.wav");
let loser = new Audio("./audio/loser.wav");
let winner = new Audio("./audio/winner.wav");


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

// reload the page 

const newGameBegin = () => {
    start.play();
    window.location.reload();
}

// start new game

const startNewGame = () => {
    start.play();
    document.getElementById("newGameButton").display = "inline";
    userNumberUpdate.setAttribute("disabled", true);
}

// main logic of our app

const compareGuess = () => {
    start.play();
    const userNumber = Number(document.getElementById("inputBox").value);
    userGuess = [...userGuess, userNumber];
    document.getElementById("guesses").innerHTML = userGuess; 

    // check the value low or high 

    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess) {
            loser.play();
        userGuessUpdate.innerHTML = "Your guess is High 😮";
        userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
        loser.play();
        userGuessUpdate.innerHTML = "Your guess is Low 😌";
        userNumberUpdate.value = "";
    } else {
        winner.play();
       userGuessUpdate.innerHTML = "It's Correct 😀";
        userNumberUpdate.value = "";
    }
    } else {
        if(userNumber > computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();
    } else if (userNumber < computerGuess) {
        userGuessUpdate.innerHTML = `You Loose!! correct number was ${computerGuess}`;
        userNumberUpdate.value = "";
        startNewGame();

    } else {
        winner.play();
       userGuessUpdate.innerHTML = "It's Correct 😀";
        userNumberUpdate.value = "";
        startNewGame();
    }
    }

    document.getElementById("attempts").innerHTML = userGuess.length;
};

const easyMode = () => {
    start.play();
    maxGuess = 10;
    startGame();
}

const hardMode = () => {
    start.play();
    maxGuess = 5;
    startGame();
}

