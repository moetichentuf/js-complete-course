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


// dates
    let currentDate = new Date(),
        day = currentDate.getDate(),
        month = currentDate.getMonth() + 1,
        year = currentDate.getFullYear();


// time

    let currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

//  "Change me!" id  is = document.write (what makes it visible)
    document.getElementById("target").innerHTML = document.write(day + "/" + month + "/" + year + "</br>" + hours + ":" + minutes);



})();
