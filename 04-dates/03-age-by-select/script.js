/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// using this stack overflow code as example to try and make it work
// looking up how to make it work
(function() {

    function ageCount() {
        function submitBirthday() {
            var minutes = 1000 * 60;
            var hours = minutes * 60;
            var days = hours * 24;
            var years = days * 365;

            var birthday = Date.parse(document.getElementById("dob-day").value, document.getElementById("dob-month").value, document.getElementById("dob-year").value);
            var dateNow = new Date();
            var YearsOld = Math.round((dateNow - birthday) / years);

            document.getElementById("displayBirthday").innerHTML = ("You are " + YearsOld + " years old.");
        }


    }
})();
