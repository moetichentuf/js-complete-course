/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


function Calc(add) {
    // to get the value of an input: document.getElementById("element-id").value
    let numb1 = document.getElementById("op-one").value;
    let numb2 = document.getElementById("op-two").value;
    let result;


    switch (add) {

        case 'addition':
            result = parseInt(numb1) + parseInt(numb2);
            alert(result);
            break;

        case 'substraction':
            result = parseInt(numb1) - parseInt(numb2);
            alert(result);
            break;

        case 'multiplication':
            result = parseInt(numb1) * parseInt(numb2);
            alert(result);
            break;

        case 'division':
            result = parseInt(numb1) / parseInt(numb2);
            alert(result);
            break;


    }

}

