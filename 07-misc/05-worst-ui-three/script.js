/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



    function genRanNumb() {
        let min = document.getElementsByTagName("input")[0].getAttribute("data-min");
        let max = document.getElementsByTagName("input")[0].getAttribute("data-max");

        let random = Math.floor(Math.random() * (+max - +min)) + +min;
        let textbox3 = document.getElementById('part-one');
        textbox3.value = random;

    }


function genRanNumb2() {
    let min = document.getElementsByTagName("input")[1].getAttribute("data-min");
    let max = document.getElementsByTagName("input")[1].getAttribute("data-max");

    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    let textbox3 = document.getElementById('part-two');
    textbox3.value = random;

}

function genRanNumb3() {
    let min = document.getElementsByTagName("input")[2].getAttribute("data-min");
    let max = document.getElementsByTagName("input")[2].getAttribute("data-max");

    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    let textbox3 = document.getElementById('part-three');
    textbox3.value = random;

}

function genRanNumb4() {
    let min = document.getElementsByTagName("input")[3].getAttribute("data-min");
    let max = document.getElementsByTagName("input")[3].getAttribute("data-max");

    let random = Math.floor(Math.random() * (+max - +min)) + +min;
    let textbox3 = document.getElementById('part-four');
    textbox3.value = random;

}