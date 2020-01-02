/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let txtBoxRef = document.getElementById("pass-one");
    let counterRef = document.getElementById("counter");
    let remLength = 0;
    txtBoxRef.addEventListener("keydown",function(){

        remLength = 10 - parseInt(txtBoxRef.value.length);
        if(remLength < 0)
        {
            txtBoxRef.value = txtBoxRef.value.substring(0, 10);
            return false;
        }
        counterRef.value = remLength + " characters remaining...";
    },true);

})();
