/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(document.getElementById("run").addEventListener("click", function () {

    let pass1 = document.getElementById('pass-one');
    let pass2 = document.getElementById('pass-two');
    let color;
    let color2;
    function validatePassword() {
        let status = false;
        if (pass2.value === pass1.value) {
            status = true;
            pass2.setCustomValidity('');
            color2 = "#4bff12";
            pass1.style.borderColor = color;
            pass2.style.borderColor = color;

        } else {
            pass2.setCustomValidity('Both passwords do not match');
            color = "#ff1800";
            pass1.style.borderColor = color;
            pass2.style.borderColor = color;
        }

        return status = color = "#4bff12";
    }

    pass1.addEventListener('change', validatePassword);
    pass2.addEventListener('keyup', validatePassword);

})());
