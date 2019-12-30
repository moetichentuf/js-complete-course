/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    let gallery= new Array();
        gallery [0] = "../../_shared/img/bell.svg";
        gallery [1] =  "../../_shared/img/clock.svg";
        gallery [2] = "../../_shared/img/compass.svg";
        gallery [3] = "../../_shared/img/lemon.svg";
        gallery [4] = "../../_shared/img/map.svg";


    var currentpic = 0;
    var lastpic = gallery.length-1;
    function nextslide()
    {
        if (currentpic == lastpic)
        {
            currentpic = 0;
            document.getElementById('next').src = gallery[currentpic];
        }
        else
        {
            currentpic++;
            document.getElementById('next').src = gallery[currentpic];
        }
    }


})();
