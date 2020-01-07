/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let request = new XMLHttpRequest();
document.getElementById("run").addEventListener("click", function  (lala) {


// Open a new connection, using the GET request on the URL endpoint
    request.open('GET', '../../_shared/api.json', true);

    request.onload = function() {
        // Begin accessing JSON data here
    };

// Send request
    request.send();
console.log(lala);
});
})();
