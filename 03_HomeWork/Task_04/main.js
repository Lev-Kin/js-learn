var elementSelect = document.querySelectorAll('.select');
var nameBook = document.querySelectorAll('.nameBook');
var text = document.querySelectorAll('textarea');
var inputs = document.querySelectorAll('input');

var finish = document.querySelector('.buy').onclick = function () {
    alert
        (
            inputs[2].value + ', thanks for the order!' +
            '\nBook: ' + inputs[0].value +
            '\nwill be delivered on ' + inputs[3].value +
            '\nto ' + text[0].value
        );
};

for (let i = 0; i < elementSelect.length; i++) {
    elementSelect[i].onclick = myClick;
}

function myClick() {
    let set = document.querySelectorAll('input');

    for (let i = 0; i < elementSelect.length; i++) {
        elementSelect[i].onclick = function () {
            if (i === 0) {
                set[0].value = nameBook[i].textContent;
            }
            if (i === 1) {
                set[0].value = nameBook[i].textContent;
            }
            if (i === 2) {
                set[0].value = nameBook[i].textContent;
            }
        }
    }
}