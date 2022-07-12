document.querySelector('button').onclick = myFuntion;

let text = document.querySelector('.Text');

function myFuntion() {

    let set_1 = document.getElementsByName("font_type");
    let set_2 = document.getElementsByName("font_position");

    for (var i = 0; i < set_1.length; i++) {

        if (set_1[0].checked) {
            text.style.fontWeight = "bold";
        } else
            text.style.fontWeight = "normal";

        if (set_1[1].checked) {
            text.style.textDecoration = "underline";
        } else
            text.style.textDecoration = "none";

        if (set_1[2].checked) {
            text.style.fontStyle = "italic";
        } else
            text.style.fontStyle = "normal";
    }

    for (var i = 0; i < set_2.length; i++) {

        if (set_2[i].checked) {
            if (i === 0) {
                text.style.textAlign = "left";
            }
            if (i === 1) {
                text.style.textAlign = "right";
            }
            if (i === 2) {
                text.style.textAlign = "justify";
            }
        }
    }
}