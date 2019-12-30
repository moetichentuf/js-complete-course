/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(document.getElementById("next").addEventListener("click", function myPicture() {

    let currentImageIndex = 0;
    let myPicture = [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];




        currentImageIndex = (currentImageIndex + 1) % myPicture.length;
        document.images[0].src = myPicture[currentImageIndex];


})());
