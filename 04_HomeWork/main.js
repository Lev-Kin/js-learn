// on js
let inputs = document.querySelectorAll('input');
let buttonSave = document.querySelector('button');
let alertEm = document.querySelectorAll('em');
let div = document.createElement('div');

let colorArr = [];
let NewColor = "";

// check cookie
NewColor = document.cookie;
if (NewColor != "") {
    console.log("<div addColor=" + NewColor);
    div.innerHTML = NewColor;
    document.body.append(div);
}

// id option selected
function getType() {
    var select = document.getElementById("typeColor");
    return select.value;
}

function unique(i, str) {
    alertEm[i].textContent = str;
    alertEm[i].style.color = "red";
}

// check and save
buttonSave.onclick = function () {

    if (inputs[0].value === "") {
        inputs[0].style.backgroundColor = "red";
        inputs[0].focus();
    }

    if (colorArr.includes(inputs[0].value)) {
        unique(0, " this color has already been added");
        inputs[0].value = "";
    } else {
        colorArr.push(inputs[0].value);
    }

    let str = codeColor(inputs[1].value);
    let my_div = document.createElement('div');

    // box new color
    NewColor = `<div addColor="container-fluid">
    <div class="row">
    <div class="col-sm-4">
    <div id="box1" style="background-color:${str}>
    <div class="cell">${inputs[0].value} 
    <br>
    ${getType()}
    <br>
    ${str.match(/[A-F0-9]+/g)}
    </div></div></div></div></div>`;

    my_div.innerHTML = NewColor;
    document.body.append(my_div);

    // for cookies
    var d = new Date();
    d.setTime(d.getTime() + (3 * 60 * 60 * 1000));
    var expires = d.toUTCString();
    document.cookie += NewColor + `;expires=${expires}` + ";path=/";

    inputs[0].value = "";
};

// check inner frame pattern
function codeColor(str) {

    if (getType() === "RGB") {

        let arr = str.split(',');

        if (
            arr.length != 3 ||
            Math.max.apply(null, arr) > 255 ||
            Math.min.apply(null, arr) < 0
        ) {
            unique(1, " RGB code must match the pattern [0-255],[0-255],[0-255]");
        } else {
            return `rgb(${arr[0]}, ${arr[1]},${arr[2]})"`;
        }
    }

    if (getType() === "RGBA") {

        let arr = str.split(',');

        if (
            arr.length != 4 ||
            Math.max.apply(null, arr.slice(0, 3)) > 255 ||
            Math.min.apply(null, arr.slice(0, 3)) < 0 ||
            arr[3] < 0 ||
            arr[3] > 1
        ) {
            unique(1, " RGBА code must match the pattern [0-255],[0-255],[0-255],[0.0-1]");
        } else {
            return `rgb(${arr[0]}, ${arr[1]},${arr[2]},${arr[3]})"`;
        }
    }

    if (getType() === "HEX") {

        if (str.match(/#[a-f0-9]{6}\b/gi) === null) {
            unique(1, " HEX code must match the pattern first[#] and next 3 or 6 symbol[alphanumeric]");
        } else {
            return `${str}"`;
        }
    }
}

// cleaning inner field
inputs[0].addEventListener('mouseover', function (event) {
    if (event.type == 'mouseover') {
        inputs[0].style.backgroundColor = '';
    }
    alertEm[0].textContent = "";
});
inputs[1].addEventListener('mouseover', function (event) {

    alertEm[1].textContent = "";
});

// checked field on the right input alphabet
inputs[0].addEventListener('mousemove', function (event) {

    if (/([^a-zA-Z])$/.test(inputs[0].value) === true) {
        inputs[0].style.backgroundColor = "red";
        unique(0, " Color can only contain letters latin");
    } else {
        inputs[0].style.backgroundColor = '';
    }
})