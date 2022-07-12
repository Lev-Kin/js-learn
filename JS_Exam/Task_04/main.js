const names = document.querySelectorAll(".text");
const buttonBuy = document.querySelector("#buy");
const documents = document.querySelector('#documents');
let text = document.querySelector('#form_text');

let srtPromt = "";

buttonBuy.onclick = function () { 
    names.forEach
    (
        element => {
        if (element.value === "") {
            element.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            element.focus();
        } else {
            element.style.backgroundColor = "";
        }
    }
    );

    if (!validateDate(names[3].value)) {
        srtPromt += "\nНекорректная дата!";
        names[3].value = "";
        names[3].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
    }

    if (documents.value === "Passport") {

        if (!checkPassport(names[4].value)) {
            srtPromt += "\nНекорректные паспортные данные!";
            names[4].value = "";
            names[4].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            text.innerHTML = `Серия, № документа`;
            names[4].placeholder = "MC2100983";
        }

    } else {
        text.innerHTML = `данные об ${documents.value}`;
        names[4].placeholder = "";
    }

    if (validateEmail(names[5].value) == false) {
        srtPromt += "\nEmail введен неверно!";
        names[5].value = "";
        names[5].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
    }
    
    if (!validatePhone(names[7].value)) {
        srtPromt += "\nНеверно введен телефон!";
        names[7].value = "";
        names[7].style.backgroundColor = "rgba(255, 0, 0, 0.25)";
    }

    if (srtPromt.length != 0) {
        alert(srtPromt.substring(0, srtPromt.length));
        srtPromt = "";
    }
}

names.forEach(element => {
    element.oninput = function () { 
        if (element.value === "") {
            element.style.backgroundColor = "rgba(255, 0, 0, 0.25)";
            element.focus();
        } else {
            element.style.backgroundColor = "";
        }
    }
});

function validateDate(date) { 
    var d_arr = date.split('/');
    var d = new Date(d_arr[2] + '/' + d_arr[1] + '/' + d_arr[0] + '');
    if (d_arr[2] != d.getFullYear() || d_arr[1] != (d.getMonth() + 1) || d_arr[0] != d.getDate()) {
        return false;
    };
    return true;
}

function checkPassport(numder) { 
    if (numder < 9 || numder > 9) { 
        return false;
    }

    if (numder.charCodeAt(0) && numder.charCodeAt(0) < 65 || numder.charCodeAt(0) && numder.charCodeAt(0) > 90) { 
        return false
    }

    for (let i = 2; i < numder.length; i++) { 
        if (Number.isInteger(+numder[i]) === false) {
            return false;
        }
    }

    return true;
}

function validateEmail(email) { 
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
    if (phone.length != 9) {
        return false;
    }
    for (let i = 0; i < phone.length; i++) {
        if (Number.isInteger(+phone[i]) === false) {
            return false;
        }
    }
    return true;
}