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

    var color_td;
    document.write("<table style='width:30px; margin: auto; margin-top: 2%; border='1px'>");

    for(var i = 1; i < 11; i++) {

        document.write("<tr style='height:30px;'>");

        for(let j = 1; j < 11; j++) {

            if(j == 1 || i == 1) {
                color_td = "#ccc";
            }
            else {
                color_td = "#fff";
            }

            document.write("<td style='width:30px;background-color:" + color_td + "'>" + i*j + "</td>");
        }
        document.write("</tr>");
    }

     document.getElementById("target").innerHTML=("</table>");

})();
