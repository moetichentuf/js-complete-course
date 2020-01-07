/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function genRanNumb() {
        var max = parseFloat(document.getAttribute("data-min").value,10),
            min = parseFloat(document.getElementById("min").value,10);

        document.getElementById('fix-part-one').innerHTML=Math.floor(Math.random()*(max-min+1)+min);
    }

})();
