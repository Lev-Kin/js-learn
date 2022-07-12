var str2 =
    `{
        "h1":
        {
            "style":"color:red;","innerHTML":"Экзамен по JavaScript"
        },
        "h2":
        {
            "innerHTML":"Условие задачи","style":"text-align: center"
        },
        "div":
        {
            "innerHTML":" Дан файл str.js, в котором описана строка в формате JSON. На основе данных этой строки создать HTML документ с соответствующей структурой и значениями" 
        },
        "img":
        {
            "src":"finita_la.jpeg"
        },
        "p":
        {
            "innerHTML":"finita la commedia","style":"text-align: center"
        }
    }`;

var elements = JSON.parse(str2);

for (const key in elements) {
    if (elements.hasOwnProperty(key)) {
        let el = document.createElement(key);
        el.innerHTML = elements[key].innerHTML;
        el.style = elements[key].style;
        el.src = elements[key].src;
        document.getElementsByTagName("body")[0].appendChild(el);
    }
}