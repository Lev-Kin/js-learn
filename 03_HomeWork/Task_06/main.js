let chek = vagon.querySelectorAll("input");
let table = document.querySelector("table");
let schedule = [];
for (let i = 0; i < chek.length; i++) {
    chek[i].checked = false;
    chek[i].disabled = false;
}

search.onclick = function () {
    let bodyOfTable = ticket.querySelectorAll("tr");
    table.style.opacity = 0;

    for (let item of bodyOfTable) {
        ticket.removeChild(item);
    }

    for (let i = 0; i < chek.length; i++) {
        chek[i].checked = false;
        chek[i].disabled = false;
    }
    schedule.forEach(element => {

        if (element.name == trainName.value && element.date == date.value) {
            for (let i = 0; i < element.place.length; i++) {
                chek[i].checked = (element.place[i]) ? true : false;
                chek[i].disabled = (element.place[i]) ? true : false;
            }
        }
    });
}

buy.onclick = function () {
    let purchaseTicket = [];

    for (let i = 0; i < chek.length; i++) {
        purchaseTicket[i] = (chek[i].checked) ? chek[i].value : false;
        if (purchaseTicket[i] && !chek[i].disabled) {
            chek[i].disabled = true;
            ticket.innerHTML += `<tr><td>${trainName.value}</td> <td>${date.value}</td> <td>${purchaseTicket[i]}</td></tr>`;
        }
    }
    for (let item of schedule) {
        if (item.date == date.value && item.name == trainName.value) {
            item.place = purchaseTicket.slice();
            table.style.opacity = 1;
            return;
        }
    }
    schedule.push({
        date: date.value,
        name: trainName.value,
        place: purchaseTicket.slice()
    });
    table.style.opacity = 1;
}