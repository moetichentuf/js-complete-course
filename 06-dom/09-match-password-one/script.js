/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(document.getElementById("run").addEventListener("click", function myFunction() {

    function checkPassword(form) {
        password1 = form.getElementById("pass-one").value;
        password2 = form.getElementById("pass-two").value;

        // If password not entered
        if (password1 == '')
            alert ("Please enter Password");

        // If confirm password not entered
        else if (password2 == '')
            alert ("Please enter confirm password");

        // If Not same return False.
        else if (password1 != password2) {
            alert ("\nPassword did not match: Please try again...");
            return false;
        }

        // If same return True.
        else{
            alert("Password Match: Welcome to GeeksforGeeks!");
            return true;
        }
    }

})());
