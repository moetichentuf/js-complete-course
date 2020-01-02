/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function() {



        let pass1 = document.getElementById('pass-one');
        let pass2 = document.getElementById('pass-two');
        let color;
        let color2 = "#4bff12";

        let status = false;
        function validatePassword() {

            if (pass2.value === pass1.value) {
                status = true;
                pass2.setCustomValidity('');

                pass1.style.borderColor = color2;
                pass2.style.borderColor = color2;

            } else  {
                pass2.setCustomValidity('lala');
                color = "#ff1800";
                pass1.style.borderColor = color;
                pass2.style.borderColor = color;


            }


        }

        pass1.addEventListener('change', validatePassword);
        pass2.addEventListener('keyup', validatePassword);



});
