/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {



        let birthday = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value);
        let dateNow = new Date();
        let YearsOld = ((dateNow.getTime() - birthday.getTime()) / (1000*60*60*24)) / 365;

        document.getElementById("run").innerHTML = ("You are " + YearsOld + " years old.");


    })

})();
