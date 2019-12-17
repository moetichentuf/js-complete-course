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

    let class actions = prompt("Which operation?");

    switch(actions) {

        case "addition":
            let numb1 = document.getElementById("op-one").value;
            let numb2 = document.getElementById("op-two").value;
            let result = numb1 + numb2;
            alert(numb1 + " + " + numb2 + " = " + result);
            // perform an addition
            break;

        case "substraction":

                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;
                let result = numb1 - numb2;
                alert(numb1 + "-" + numb2 + " = " + result);

                // perform an substraction
            break;

        case "multiplication":

                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;
                let result = numb1 - numb2;
                alert(numb1 + "*" + numb2 + " = " + result);
                // perform an multiplication
            break;

        case "division":
                let numb1 = document.getElementById("op-one").value;
                let numb2 = document.getElementById("op-two").value;
                let result = numb1 - numb2;
                alert(numb1 + "/" + numb2 + " = " + result);
                // perform an division
            break;

    }
    })();
