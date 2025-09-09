let secretNumber = randomNumberGenerator();
function printTextOnScreen(tag,text){
    //JS- document.querySelector get all from html tag specific in parenthesis
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

printTextOnScreen("h1", "Secret Number Game");
printTextOnScreen("p","Choose a number between 1 and 100");


//programming logic - Function must have only one responsability.
function verifyGuess(){
    let guess = document.querySelector("input").value;
    console.log(guess == secretNumber);
}

function randomNumberGenerator() {
    return parseInt(Math.random() * 10 + 1);
}