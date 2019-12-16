/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function test() {

        // to get the value of an input: document.getElementById("element-id").value

    let op1 = prompt("Which operation?");

    switch(op1) {

        case "addition":
            let numb1 = document.getElementById("op-one").value;
            let numb2 = document.getElementById("op-two").value;

            alert(Number(numb1) + Number(numb2));
            // perform an addition
            break;

        case "addition":

                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;

                alert(Number(numb1) - Number(numb2));
                // perform an substraction
            break;

            document.getElementById("multiplication").addEventListener("click", function () {

                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;

                alert(Number(numb1) * Number(numb2));
                // perform an multiplication
            });

            document.getElementById("division").addEventListener("click", function () {
                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;

                alert(Number(numb1) / Number(numb2));
                // perform an division
            });

    }
    })();
