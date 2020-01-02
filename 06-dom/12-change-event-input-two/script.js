/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function checkPass() {
    let pass1 = document.getElementById('pass-one');
    let message = document.getElementById('validity');



    if(pass1.value.length > 8){


        message.innerText = "character number ok!";
    }


}