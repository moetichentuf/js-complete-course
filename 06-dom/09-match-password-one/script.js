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

    var pass1 = document.getElementById('pass-one');
    var pass2 = document.getElementById('pass-two');

    function validatePassword() {
        var status = false;
        if (pass2.value === pass1.value) {
            status = true;
            pass2.setCustomValidity('');
        } else {
            pass2.setCustomValidity('Both passwords do not match');
        }
       alert(status);
        return status;
    }

    pass1.addEventListener('change', validatePassword);
    pass2.addEventListener('keyup', validatePassword);

})());
