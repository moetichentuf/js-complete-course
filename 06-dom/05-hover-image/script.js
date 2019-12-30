/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let x=document.getElementsByTagName("img")[0];

    x.addEventListener("mouseover", function(){

      let y =  document.getElementsByTagName("img")[0].getAttributeNode("data-hover").value;

        document.getElementsByTagName("img")[0].setAttribute("src", y);

    });
       // document.getElementById("photo").src = "../../_shared/img/kiss.svg";


       // document.getElementById("photo").src = "../../_shared/img/kiss-wink-heart.svg";

})();
