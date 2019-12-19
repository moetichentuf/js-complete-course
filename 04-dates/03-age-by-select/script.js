/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// still working on this
// i am a little stuck..
(function() {

    document.getElementById("run").addEventListener("click", function() {

        let minutes = 1000 * 60;
        let hours = minutes * 60;
        let days = hours * 24;
        let years = days * 365;

        let birthday = new Date(document.getElementById("dob-year").value, document.getElementById("dob-month").value, document.getElementById("dob-day").value);
        let dateNow = new Date();
        let YearsOld = Math.round((dateNow - birthday) / years);

        alert("You are " + YearsOld + " years old.");


    })

})();
