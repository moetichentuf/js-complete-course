/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let number = Math.floor(Math.random() * 100 + 1);
    // Just for Test

    //guess variable to store the guessed number by user
    let guess;
    //output to store output to the user
    let output;
    //if the user guessed the number or not, initialize it to false
    let guessed = false;

    //do/while loop, while condition is based on if the user NOT guessing the number (e.g. guessed == false)
    do {
        guess = prompt("Think of a number between 1 and 100, what is your number?");

        if (guess > number) {
          alert(  "You guessed too high, think smaller");
            guessed = false;
        }
        else if (guess < number) {
           alert( "You guessed too low, think bigger");
            guessed = false;
        }
        else {
            alert("You guessed the right number!");
            guessed = true;
        }
    }
    while (guessed === false)

})();
