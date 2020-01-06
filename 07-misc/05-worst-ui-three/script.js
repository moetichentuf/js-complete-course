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

    // getbytagname to get all buttons
    const buttons = document.getElementsByTagName("button");

    // when you press the buttons the numbers inside the buttons also change


    // go over all buttons with for loop
    for (let i =0; i<buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            let minVal = buttons[i].getAttribute("data-min");
            let maxVal = buttons[i].getAttribute("data-max");
            let currentVal = buttons[i].innerHTML;
            //ups value by one on every click
            currentVal++;
            // console.log(currentVal);
            buttons[i].innerHTML = currentVal;

            //makes sure it writes a 0 instead of deleting a number when in single digit
            if (buttons[i].innerHTML < 10) {
                buttons[i].innerHTML = "0" +buttons[i].innerHTML;
                buttons.value = Math.floor(Math.random()*(499-460) + 460);
            }

            document.getElementById("target").innerHTML =
                Math.floor(Math.random() + buttons.innerHTML
                + (buttons[1].innerHTML)
                + (buttons[2].innerHTML)
                + (buttons[3].innerHTML))
        });
    }

})();
