/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

function myFunction() {
    var increment = document.getElementById("increment");
    var button = document.getElementById("target"),
        count = 0;
    increment.onclick = function () {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
        button.innerHTML = localStorage.clickcount;
    };


}