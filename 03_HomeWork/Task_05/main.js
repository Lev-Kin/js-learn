alert("Изначальо журнал пуст,\nно вы можете его заполнить,\nпотом вернуться и посмотреть заполненный журнал");

var students = document.querySelectorAll(".checkbox");

var NameKeson = document.querySelector(".text");
var position1;

document.querySelector('.select').onclick = function () {

    let information = document.querySelector('main');

    information.style.display = "block";

    valueGroup = getValue();

    valueGroup1 = getGrup();

    loding();
    if (jornal[position1][0] != "") {
        alert
            (
                "Тема: " +
                jornal[position1][0] + "\nПристутствие студента 1 " +
                jornal[position1][1] + "\nПристутствие студента 2 " +
                jornal[position1][2] + "\nПристутствие студента 3 " +
                jornal[position1][3]
            );
    }
}

var valueGroup;

var valueGroup1;

var regex = /[0-9]+/g;

var jornal = [
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false],
    ["", false, false, false]
];

function getValue() {

    var select = document.getElementById("lesons");

    return select.value;

}

function getGrup() {

    var select = document.getElementById("group"); ///

    return select.value;
}

document.querySelector('.keep').onclick = function () {

    console.log(students.length);

    let count, count1 = 0;
    count = valueGroup1 * 3;

    count1 = +valueGroup;
    position1 = count1 + count - 1;

    jornal[position1][0] = NameKeson.value;

    for (var i = 1; i <= students.length; i++) {

        if (students[i - 1].checked) {
            jornal[position1][i] = true;
        }
        students[i - 1].checked = false;
        NameKeson.value = "";
    }

    let information = document.querySelector('main');
    information.style.display = "none";
}

function loding() {
    let count, count1 = 0;

    valueGroup = valueGroup.match(regex);

    valueGroup1 = valueGroup1.match(regex) - 1;

    count = valueGroup1 * 3;

    count1 = +valueGroup;

    position1 = count1 + count - 1;

    NameKeson.value = jornal[position1][0];

    for (let i = 1; i <= students.length; i++) {
        if (jornal[position1][i] === true) {
            students[i - 1].checked = true;
        } else {
            students[i - 1].checked = false;
        }
    }
}