/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var msg = ""
    for(var i=1;i<=100;i++, msg=""){
        if (!(i%3)) msg+="Fizz";
        if (!(i%5)) msg+="Buzz";
        console.log(msg || i);
    }

})();
