/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var numbers = [];
        // Handle too few arguments.
        if (arguments.length < 2) {
            return numbers;
        }
        // Make sure x < y.
        Array.prototype.sort.call(arguments);
        // Assign each argument to a local variable.
        var x = arguments[0];
        var y = arguments[arguments.length - 1];
        // Make sure x and y are numbers.
        if (typeof x != 'number' || typeof y != 'number') {
            return numbers;
        }
        for (var i = x; i < y; i++) {
            numbers.push(i);
        }
        return numbers;

    });

})();
