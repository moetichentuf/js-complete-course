/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let letterContainer = document.getElementById("target");

    let letters = letterContainer.innerText;

    letters = letters.split("");

    letterContainer.innerText = "";

    let offset = 0;

    letters.forEach(function(letter, i){
        let wrap = document.createElement("span");
        wrap.innerText = letter;
        wrap.style.position = "relative";
        wrap.style.bottom = i+"px";
        wrap.style.transform = "rotate("+-i+"deg)";
        letterContainer.appendChild(wrap);
    })

})();
