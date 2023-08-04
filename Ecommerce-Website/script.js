const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");

function validateForm(){

    clearMessages();

    if (nameInput.value.length<1) {
        nameInput.classList.add("error-border");     
    }
    if (!emailIsValid(email.value)){
        email.classList.add("error-border");
    }
    if (message.value.length<1) {
        message.classList.add("error-border");     
    }
    if (number.value.length<10) {
        number.classList.add("error-border");     
    }
    if (number.value.length>10) {
        number.classList.add("error-border");     
    }
}

function emailIsValid(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

function clearMessages(){
    nameInput.classList.remove("error-border");
    email.classList.remove("error-border");
    message.classList.remove("error-border");
    number.classList.remove("error-border");
}
