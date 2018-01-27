//page loads with name prompting, console logs name input as variable
var name = prompt('WADDAPPPPPPP, what\'s your name?')
console.log("Current name is: " + name)

//list of functions 
function getMaxFromUser() {
    //prompts user for an input and returns it as a number, used to determine maximum number
    let maxNum = Number(prompt('Excellent name you\'ve got! Now enter a number.'));
    console.log("Maximum number is :" + maxNum)
    return maxNum;
}

function generateRandomNumber(max) {
    //generate a random integer between 0 and max, to be used as a goal
    let randomNumber = 0;
    randomNumber = Math.floor((Math.random() * (max - 1)) + 1);
    console.log("Random number: " + randomNumber)
    return goal = randomNumber
}

function getGuessFromUser(max) {
    // takes care of prompting the user for a guess and converting it to a number
    let guessedNum = Number(prompt("Guess a number between 0 and " + max + "."));
    console.log("Guessed number is: " + guessedNum)
    return guessedNum
}

function isGuessCorrect(goal, guessedNum) {
    // check if a guess is correct and return a boolean
    if (guessedNum === goal) {
        return true;
    } else {
        return false;
    }
}

function startGame() {

    // // choose a maximum number
    let maxNum = getMaxFromUser()

    if (maxNum !== 0){

    alert("Hi " + name + "! You have great taste in numbers! " + maxNum + " is B-E-A-utiful.");

    // // choose a random goal between 0 and the max
    let goal = generateRandomNumber(maxNum)
    guessedNum = getGuessFromUser(maxNum)

    console.log(goal + " is the random number")
    console.log(guessedNum + " is the guessed number")

    while (isGuessCorrect(goal, guessedNum) == false) {
        if (goal < guessedNum) {
            alert("Too high")
            guessedNum = getGuessFromUser(maxNum)
        } else if (goal > guessedNum) {
            alert("Too low")
            guessedNum = getGuessFromUser(maxNum)
        }
    }
    if (isGuessCorrect(goal, guessedNum) == true) {
        console.log("CORRECT!!!!!")
        alert("Correct! The answer was " + goal + ".")
        alert("Thanks for playing :)")
    }
    } else{ alert("DON'T ENTER ZERO!!! The game is over now.")}
}

//list of functions ends

startGame()

