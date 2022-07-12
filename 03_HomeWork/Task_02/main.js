let elimentButon = document.querySelectorAll('.my_button');

var answer = 0;

var countQuestion = document.getElementById('question').getElementsByTagName('li').length

for (let i = 0; i < elimentButon.length; i++) {
    elimentButon[i].onclick = myClick;
}

function myClick() {
    let select = document.querySelectorAll('input');
    for (var i = 0; i < select.length; i++) {
        if (select[i].checked) {
            if (select[i].value === "true") {
                answer++;
            }
        }
    }

    alert("Result: " + answer + " correct answers to " + countQuestion + " questions.");
    answer = 0;
}