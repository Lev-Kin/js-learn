const mainDiv = document.getElementById("content");
const tableDiv = document.createElement("div");

tableDiv.setAttribute("id", "content__tableDiv");
tableDiv.className = "content__tableDiv";

const tableTag = document.createElement("table");
tableTag.setAttribute("id", "content__table");
tableTag.className = "content__table";

tableDiv.append(tableTag);
mainDiv.append(tableDiv);

class Person {
    constructor(firstName, lastName, age, company) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.company = company;
    }
}

const arrayPerson = [
    new Person("Mark", "Zuckerberg", 34, "Facebook"),
    new Person("Larry", "Page", 45, "Google"),
    new Person("Timothy", "Cook", 57, "Apple"),
    new Person("Bill", "Gates", 62, "Microsoft"),
];

class PersonTable {
    constructor(array) {
        this.array = array;
    }
    getHtml() {
        const table = document.getElementById("content__table");
        const tbody = document.createElement("tbody");
        tbody.setAttribute("id", "content__tbody");
        table.append(tbody);
        const array = this.array;
        const head = document.createElement("tr");
        head.setAttribute("style", "font-size: 18px;");
        const th1 = document.createElement("th");
        th1.textContent = "Firstname";
        th1.setAttribute("id", "content__th1");
        th1.style.cursor = "pointer";
        const th2 = document.createElement("th");
        th2.textContent = "Lastname";
        th2.setAttribute("id", "content__th2");
        th2.style.cursor = "pointer";
        const th3 = document.createElement("th");
        th3.textContent = "Age";
        th3.setAttribute("id", "content__th3");
        th3.style.cursor = "pointer";
        const th4 = document.createElement("th");
        th4.textContent = "Company";
        th4.setAttribute("id", "content__th4");
        th4.style.cursor = "pointer";

        head.append(th1);
        head.append(th2);
        head.append(th3);
        head.append(th4);

        tbody.append(head);

        for (let i in array) {
            let tr = document.createElement("tr");
            tbody.append(tr);
            for (let j in array[i]) {
                let td = document.createElement("td");
                td.textContent = array[i][j];
                tr.append(td);
                td.setAttribute("style", "padding: 5px 10px; font-size: 18px;");
            }
        }

        table.setAttribute("border", "4");
        table.setAttribute("bordercolor", "darkgreen");
        table.setAttribute("width", "60%");
        table.setAttribute("style", "margin: auto;");
    }
}

const tableObj = new PersonTable(arrayPerson);

tableObj.getHtml();

const getCellValue = (tr, i) => tr.children[i].innerText || tr.children[i].textContent;

const comparer = (i, item) =>
    (a, b) =>
    ((v1, v2) =>
        v1 !== '' &&
        v2 !== '' &&
        !isNaN(v1) &&
        !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(item ? a : b, i), getCellValue(item ? b : a, i));

document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.item = !this.item))
        .forEach(tr => table.appendChild(tr));
})));
