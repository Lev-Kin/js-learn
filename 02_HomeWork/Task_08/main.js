let div = document.querySelectorAll('h3');
let p = document.querySelectorAll('p');

function click() {
    addEventListener('click', e => {
        for (let i = 0; i < div.length; i++) {
            if (div[i] == e.target && p[i].style.display === 'block') {
                p[i].style.display = 'none'
                break;
            }
            if (div[i] == e.target) {
                p[i].style.display = 'block';
            } else {
                p[i].style.display = 'none';
            }
        }
    })
}
click();

