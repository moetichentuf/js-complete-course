/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


(function() {
    // to get the value of an input: document.getElementById("element-id").value
    let numb1 = document.getElementById("op-one").value;
    let numb2 = document.getElementById("op-two").value;
    let result;
    switch (numb1,numb2){

        case "multiplication":
            result = numb1 * numb2;
            break;

        case "division":
            result = numb1 / numb2;
            break;

        case "addition":
            result = numb1 + numb2;
            break;

        case "subtraction":
            result = numb1 * numb2;
            break;


    }















    document.getElementById("addition").addEventListener("click", function() {
        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;
        let a = parseInt(numb1);
        let b = parseInt(numb2);

        alert(parseInt(a+b));
        // perform an addition
    });

    document.getElementById("substraction").addEventListener("click", function() {

        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;
        let a = parseInt(numb1);
        let b = parseInt(numb2);
        alert(parseInt(a-b));
        // perform an substraction
    });

    document.getElementById("multiplication").addEventListener("click", function() {

        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;
        let a = parseInt(numb1);
        let b = parseInt(numb2);
        alert(parseInt(a*b));
        // perform an multiplication
    });

    document.getElementById("division").addEventListener("click", function() {
        let numb1 = document.getElementById("op-one").value;
        let numb2 = document.getElementById("op-two").value;
        let a = parseInt(numb1);
        let b = parseInt(numb2);
        alert(parseInt(a/b));
        // perform an division
    });


})();