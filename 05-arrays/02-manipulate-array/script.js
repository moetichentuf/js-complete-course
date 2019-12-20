/* becode/javascript
 *
 * /05-arrays/02-manipulate-array/script.js - 5.2: manipulation de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

// alert works, still have to implement Array transformations

(document.getElementById("run").addEventListener("click",  function() {

    //fruits.unshift("")  adds array item

    let fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",


    ];

    //fruits.unshift("")  adds element to beginning of array






    // The splice() method modifies the content of an array by removing existing elements and/or adding new elements.
    fruits.splice(  1, 0, "banana");

    //removes the first element of an array.
    fruits.shift();

    //removes last element.
    fruits.pop();

    // adds an element to the end of an array
    fruits.push("kiwi");

    alert(fruits);

})());
