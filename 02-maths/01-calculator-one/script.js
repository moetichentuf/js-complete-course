/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("addition").addEventListener("click", function() {
        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;

             alert(Number(numb1) + Number(numb2));
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {

        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;

            alert(Number(numb1) - Number(numb2));
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {

        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;

             alert(Number(numb1) * Number(numb2));
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;

            alert(Number(numb1) / Number(numb2));
        // perform an division
    });


})();
