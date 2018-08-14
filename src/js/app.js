'use strict';

const info = document.querySelector("#login-exclamation");
const login = document.querySelector("#login");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const resetButton = document.querySelector("#reset");
const chosenLogin = document.querySelector("#chosen-login");
const clearLogin = document.querySelector("#clear-login");


function isNumber() {
    const loginValue = parseInt(login.value, 10);
    if(!Number.isInteger(loginValue) || (Number(login.value) % 1 !== 0) || login.value[8] == "."){
        // In some cases user can try put a coma(,) or dot(.) sign in our login input,
        // what can produce a bug, so we need to check if there is any fraction in our number.
        // Futhermore user can put dot sign as the last one, so we need to check it olso.
        
        info.style.visibility = "visible";
        info.textContent = "Login może zawierać tylko cyfry";
        login.style.border = "1px solid #F90000";
        if(login.value.length === 0){
            info.textContent = "Login nie może być pusty";
            info.style.visibility = "visible";
            login.style.border = "1px solid #F90000";

            return 0;
        }

        return 0;
    } 
    else {
        info.style.visibility = "hidden";
        login.style.border = "none";

        return 1;
    }
}

function loginValidation() {
    const loginValue = login.value;

    if(isNumber(login)){
        if(loginValue.length !== 9){
            info.style.visibility = "visible";
            info.textContent = "Login musi zawierać 9 cyfr";
            login.style.border = "1px solid #F90000";
        }
        else {
            chosenLogin.textContent = login.value;
            chosenLogin.style.display = "inline-block";
            clearLogin.style.display = "inline-block";
            password.style.visibility = "visible";
            info.style.visibility = "hidden";
            login.style.display = "none";
        }
    }
}

function passwordValidation() {
    if(password.value.length === 0) {
        password.style.border = "1px solid #F90000";
        info.style.visibility = "visible";
        info.textContent = "Hasło nie może być puste";
        submit.disabled = true;
    }
    else {
        info.style.visibility = "hidden";
        password.style.border = "none";
        submit.disabled = false;
    }
}

function resetLogin() {
    password.style.border = "none";
    password.style.visibility = "hidden";
    password.value = "";
    submit.disabled = true;
    login.value = "";
    login.style.display = "inline-block";
    info.style.visibility = "hidden";
    chosenLogin.textContent = "";
    chosenLogin.style.display = "none";
    clearLogin.style.display = "none";
}


login.addEventListener("change", loginValidation);
login.addEventListener("keyup", isNumber);
password.addEventListener("keyup", passwordValidation);
resetButton.addEventListener("click", resetLogin);
clearLogin.addEventListener("click", resetLogin);