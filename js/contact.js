const form = document.querySelector("#form-container");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullName-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const message = document.querySelector(".message");
const button = document.querySelector(".submitForm");
const loader = document.querySelector(".loader");
const goBack = document.querySelector(".back");

goBack.onclick = () => {
    history.back();
  };

loader.style.display = "block";
form.style.display = "none";
  setTimeout(() => {
    form.style.display = "block";
    loader.style.display = "none";
  }, 1500);

function formValidation(event) {
    event.preventDefault();

    if (checkingLength(fullName.value.trim(), 0) === true) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkingLength(subject.value.trim(), 10) === true) {
        subjectError.style.display = "none";
    }
    else {
        subjectError.style.display = "block";
    }

    if (checkingLength(address.value.trim(), 25) === true) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateEmail(email.value) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
}

form.addEventListener("submit", formValidation);

function checkingLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const emailChecked = regEx.test(email);
    return emailChecked;
}