/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var result = 'x ';
    for (var i = 0; i < 11; i++) {

        for (var j = 0; j < 11; j++) {

            if(i == 0 && j > 0){
                result += '[' + j + ']';
            }
            else if(j == 0 && i>0){
                result += '[' + i + '] ';
            }
            else if(i>0 && j>0){
                result += (i*j) + ' ';
            }
        }
        result += '\n'
    }
     document.getElementById("target").innerHTML = result;
})();
