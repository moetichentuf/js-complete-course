/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    function genRanNumb(guess) {
        let min = document.getElementsByTagName("input")[0].getAttribute("data-min");
        let max = document.getElementsByTagName("input")[0].getAttribute("data-max");

        var random = Math.random() * (+max - +min) + +min;


console.log(random);
    }


