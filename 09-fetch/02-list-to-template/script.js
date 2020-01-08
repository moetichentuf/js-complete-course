/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", function() {

      fetch("../../_shared/api.json")

          // on click, fetch api
          .then((function (link) {
              return link.json();
          }))

          .then(function (data) {

              let temp = document.getElementById("tpl-hero");
              //make a copy of the html content so you can paste it in the target

              for (let i = 0; i < data.heroes.length; i++) {

                  //puts the array items in the innerhtml of the copy
                  let copy = temp.content.cloneNode(true);


                  // get lists from json
                  copy.querySelector(".name").innerHTML = data.heroes[i].name;
                  copy.querySelector(".alter-ego").innerHTML = data.heroes[i].alterEgo;
                  copy.querySelector(".powers").innerHTML = data.heroes[i].abilities;

                  document.getElementById("target").appendChild(copy);
              }

          })
  });
})();
