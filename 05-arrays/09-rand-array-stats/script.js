/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click",function() {

        let arr = [];
        let sum = 0;
        for (i=0; i<10; i++) {
            arr[i] = Math.floor(Math.random() * 100) + 1;
            document.getElementById("n-" +( i + 1)).innerHTML = arr[i];
            sum=sum+arr[i];

        }

        document.getElementById("sum").innerHTML=sum;
        document.getElementById("average").innerHTML=sum/arr.length;

});
