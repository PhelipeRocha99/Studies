//JS - To execute a JS programm you'll need a browser such as chrome,firefox,opera,etc


/* 
Programming logic - First Step on every language it's to show a message to user on screen. knonw as Hello World.
Using javaScript the programm should be: 
alert("Hello World");
*/

//JS - alert command show a alert on screen, between parentheses you can text what you want to show, using simple or double quotation Mark 
alert("Welcome to secret number game");


/* Programming logic - Variables (spaces on memorie to storage information).
Variable naming best practices
    Variable are case sensitive
    Use descriptive names (clarity and descriptiveness)
    Use pronounceable names
    Meaningful words
    Include units in your variable names
    Camel case convention
    Plurals for arrays
    Prefix boolean variables
    Scope-aware naming
    Be consistent
    Constants in uppercase
    Declare separately
    Script naming conventions
    A variable name cannot contain spaces
    Avoid using single letters
    Avoid abbreviations
    Avoid magic numbers
    Avoid overloading a name
    Avoid reserved words
    Avoid using special characters or spaces
*/

// JS - let it's to declare variable on javascript, to numbers we do not use quotation Mark so JS can interpert the value as a number and not as a text.
let secretNumber = parseInt(Math.random() * 100 + 1);

//JS - prompt it's use to receive information from user.
let guess;
let score = 1;

//at this point i start to use live server extension - to update automatic index.html

while (guess != secretNumber) {
    guess = prompt("Choose a number from 1 to 100");
    // JS - IF ELSE structue on JS is If(condition){action} Else if(condition){action} else(condition){action}
    if (guess == secretNumber) {
        //JS- This break stop the while loop
        break;
         
    } else{
        if (guess > secretNumber) {
            alert(`The secret number its LOWER than ${guess}`);      
        }else{
            alert(`The secret number its HIGHER than ${guess}`);
        }
        score++;
    }
}
//JS - ternary operator use to evaluate a condition in only one line.
let attemptWord = score > 1 ? 'attempts' : 'attempt';
alert(`Thats it! You find the secret number ${secretNumber}, in ${score} ${attemptWord}`);

/*
    if (score > 1) {
        alert(`Thats it! You find the secret number ${secretNumber}, in ${score} attempts`);
    }else{
        alert(`Thats it! You find the secret number ${secretNumber}, in ${score} attempt`);
    }
*/
