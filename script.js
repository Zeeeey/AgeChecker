/*
var fName = prompt("What is your first name?");
var lName = prompt("What is your last name?");
var age = prompt("How old are you?");

console.log("My name is " + fName + " " + lName)
console.log("yo are " + age + " years old");


var age = prompt("how old are you?");
var day = age * 365;

alert(age + " years is roughly " + day + " days. Bye!");
*/


//Age Calculator

var age = prompt("how old you dey?");

if (age < 18) {
    console.log("not old enough");
} else if (age < 21) {
    console.log("You can enter but cannot drink");
} else if (age === "21") {
    console.log("Happy 21st Birthday!!!")
} else if (age % 2 !== 0) {
    console.log("your age is odd");
} else {
    console.log("Come on in.");
}



/*
//GUESSING GAME
var secretNum = 4;

//can convert prompted value to a number after declaration/initialization, like below
var stringGuess = prompt("Guess a number: ");
var guess = Number(stringGuess);

//if var guess is being used, use:
//if (Number(guess) === secretNum) {

//else use
if (guess === secretNum) {
    alert("you got it");
}
else if (guess > secretNum) {
    alert("too high");
}
else if (guess < secretNum) {
    alert("too low");
}
else {
    alert("NaN");
}
*/


