/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {



    let pic = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",];
    let imageNumber = 0;
    document.getElementById("myButton").addEventListener('click', changeImage);
    function changeImage() {
        imageNumber = (imageNumber + 1) % pic.length;
        document.getElementById("myImage").src = pic[imageNumber];
    }

})();
