/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(document.getElementById("run").addEventListener("click",  function(lala) {
    var counter = 0;
    let fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];


    var my_div = document.getElementById('text');
    function next_word()
    {
        my_div.innerHTML = fruits[counter % fruits.length];
        counter += 1;
    }
    setInterval(next_word, 500);



})());
