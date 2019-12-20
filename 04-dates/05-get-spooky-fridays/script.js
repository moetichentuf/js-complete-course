/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


// this isn't working yet, i'm going to start on the next assignment and try this again later

(function() {

    document.getElementById("run").addEventListener("click", function  () {
    let year = document.getElementById("year");


    function Calc() {
            let d = new Date();
            let year = 0;
            let month;

            for (month = 0; month < 12; month++) {
                d.setFullYear(year, month, 13);

                if (d.getDay() == 5) {
                    let ourMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", "January"]


                }
            }

        document.write(Calc)

        }
    });

})();
