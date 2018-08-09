'use strict';

const info = document.querySelector("#login-exclamation");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");

function isNumber() {
    const loginValue = parseInt(login.value, 10);
    if(!Number.isInteger(loginValue) || (Number(login.value) % 1 !== 0)){
        // In some cases user can try put a coma(,) or dot(.) sign in our login input
        // (input type="number" allows this), what can produce a bug, so we need to check
        // if there is any fraction in our number
        info.style.display = "block";
        info.textContent = "Login może zawierać tylko cyfry";
        login.style.border = "1px solid #F90000";

        return 0;
    } else {
        info.style.display = "none";
        login.style.border = "none";

        return 1;
    }
}

function loginValidation() {
    const loginValue = login.value;

    if(isNumber(login)){
        if(loginValue.length !== 9){
            info.textContent = "Login musi zawierać 9 cyfr";
            login.style.border = "1px solid #F90000";
            info.style.display = "block";
        } else {
            const chosenLogin = document.querySelector("#chosen-login");
            chosenLogin.textContent = login.value;
            chosenLogin.style.display = "block";
            login.style.display = "none";
            info.style.display = "none";
            password.style.display = "block";
        }
    };
}

function passwordValidation() {
    if(password.value.length === 0) {
        password.style.border = "1px solid #F90000";
        info.style.display = "block";
        info.textContent = "Hasło nie może być puste";
        submit.disabled = true;
    } else {
        info.style.display = "none";
        password.style.border = "none";
        submit.disabled = false;
    }
}

login.addEventListener("change", loginValidation);
login.addEventListener("keyup", isNumber);
password.addEventListener("keyup", passwordValidation);

(function(){
    console.log('Witamy na Campie 2018! ');
})();