/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // Just testing, code isn't finished

    var dt = new Date();

    var options = { timeZone: "America/New_York",
        hour12: false,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    };

// something like "Thursday, February 14, 2019, 02:55"
    document.getElementById("target").console.log(dt.toLocaleString('en-US', options));

})();
