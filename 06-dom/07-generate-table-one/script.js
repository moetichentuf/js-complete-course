/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let myArray    = new Array();
    myArray[0] = 1;
    myArray[1] = 2;
    myArray[2] = 3;
    myArray[3] = 4;
    myArray[4] = 5;
    myArray[5] = 6;
    myArray[6] = 7;
    myArray[7] = 8;
    myArray[8] = 9;
    myArray[9] = 10;
    let myTable= "<table><tr><td style='width: 100px; color: red;'>Col Head 1</td>";





    for (let i=0; i<10; i++) {
        myTable+="<tr><td style='width: 100px;'>Number " + i ;
        myArray[i] = myArray[i].toFixed(3);

    }
    myTable+="</table>";

    document.getElementById('target').innerHTML = myTable;

})();
