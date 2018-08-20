'use strict';

const info = document.querySelector(".login-exclamation");
const login = document.querySelector(".login");
const password = document.querySelector(".password");
const submit = document.querySelector(".submit");
const resetButton = document.querySelector(".reset");
const chosenLogin = document.querySelector(".chosen-login");
const clearLogin = document.querySelector(".clear-login");


function changeState (elem, expectedState){
    // let currentState = elem.getAttribute("data-state");
    // elem.setAttribute("data-state", elem.getAttribute("data-state") === stateOne ? stateTwo : stateOne);
    elem.setAttribute("data-state", expectedState);
}

function containsOnlyNumbers() {
    let differentFromNumbers = new RegExp(/[^0-9]/);
    if(differentFromNumbers.test(login.value)) {
        if(login.value.length === 0) {
            info.textConent = "Login nie może być pusty";
            changeState(info, "display");
            changeState(login, "warning");
            
            return 0;
        }
        info.textContent = "Login może zawierać tylko liczby";
        changeState(info, "display");
        changeState(login, "warning");
        
        return 0;
    } else {
        changeState(info, "hide");
        changeState(login, "display");

        return 1;
    }
}

function validateLogin() {
    if(containsOnlyNumbers) {
        if(login.value.length !== 9) {
            info.textContent = "Login musi zawierać 9 cyfr";
            changeState(info, "display");
            changeState(login, "warning");
        }
        else {
            changeState(info, "hide");
            changeState(login, "hide");

            chosenLogin.textContent = login.value;
            changeState(chosenLogin, "display");
            changeState(clearLogin, "display");
            changeState(password, "display");
        }
    }
}

function validatePassword() {
    if(password.value.length === 0) {
        info.textContent = "Hasło nie może byc puste";
        changeState(info, "display");
        changeState(password, "warning");
        submit.disabled = true;
    }
    else {
        changeState(info, "hide");
        changeState(password, "display");
        submit.disabled = false;
    }
}

function resetLogin() {
    password.value = "";
    changeState(password, "hide");
    changeState(info, "hide");
    chosenLogin.textContent = "";
    changeState(chosenLogin, "hide");
    changeState(clearLogin, "hide");
    submit.disabled = true;
    
    login.value = "";
    changeState(login, "display");
}

login.addEventListener("change", validateLogin);
login.addEventListener("keyup", containsOnlyNumbers);
password.addEventListener("keyup", validatePassword);
resetButton.addEventListener("click", resetLogin);
clearLogin.addEventListener("click", resetLogin);