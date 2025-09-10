let secretNumber = randomNumberGenerator();
//let secretNumber = 5;
let attempt = 1;

function printTextOnScreen(tag,text){
    //JS- document.querySelector get all from html tag specific in parenthesis
    let field = document.querySelector(tag);
    field.innerHTML = text;
}
function welcomeMessage(params) {
    printTextOnScreen("h1", "Secret Number Game");
    printTextOnScreen("p","Choose a number between 1 and 10");
}

welcomeMessage();

//programming logic - Function must have only one responsability.
function verifyGuess(){
    let guess = document.querySelector("input").value;
    console.log(guess == secretNumber);

    if (guess == secretNumber) {
        printTextOnScreen("h1","That's right!");
        let attemptWord = guess > 1 ? "attempt" : "attempts";
        let message = `You discover the secret number in ${attempt} ${attemptWord}!` ;
        //JS- By using function printTextOnScreen, second param expect its a text and so we need to use variables like line above
        printTextOnScreen("p", message);
        document.getElementById("restart").removeAttribute("disabled");
    }else{
        if (guess > secretNumber) {
            printTextOnScreen("p","Secret number its LOWER");
        }else{
            printTextOnScreen("p","Secret number its HIGHER");
        }
        attempt++;
        cleanGuess();
    }

}

function randomNumberGenerator() {
    return parseInt(Math.random() * 10 + 1);
}

function cleanGuess() {
    guess = document.querySelector("input");
    guess.value = '';
}

function restartGame() {
    secretNumber = randomNumberGenerator();
    cleanGuess();
    attempt=1;
    welcomeMessage();
    document.getElementById("restart").setAttribute("disabled",true);
}