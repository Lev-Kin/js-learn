// 6.Реализовать класс, описывающий html элемент. 
// Класс HtmlElement должен содержать внутри себя:
// название тега;
// самозакрывающийся тег или нет;
// текстовое содержимое;
// массив атрибутов;
// массив стилей;
// массив вложенных таких же тегов;
// метод для установки атрибута;
// метод для установки стиля;
// метод для добавления вложенного элемента в конец текущего элемента;
// метод для добавления вложенного элемента в начало текущего элемента;
// метод getHtml(), который возвращает html код в виде строки, включая html код вложенных элементов.
// С помощью написанного класса реализовать следующий блок и добавить его на страницу с помощью document.write().

class HtmlElement {
    name;
    content;
    children = [];
    attributes = [];

    constructor(name, content) {
        this.name = name;
        this.content = content;
    }

    addAttribute(name, value) {
        this.attributes[name] = value;
    }

    addChild(child) {
        this.children.push(child);
    }

    getHtml() {
        var result;

        result = '<' + this.name + ' ';

        if (this.attributes.length) {
            this.attributes.forEach(function (item, i) {
                result += i + '="' + item + '"';
            });
        }

        result += '>';
        result += this.content;

        if (this.children.length) {
            this.children.forEach(function (item, i) {
                result += item.getHtml();
            });
        }

        result += '</' + this.name + '>';

        return result;
    }
}

var wrapper = new HtmlElement('div', 'Lorem Ipsum');
var paragraph = new HtmlElement('p', '123456');

wrapper.addChild(paragraph);

document.write(wrapper.getHtml());

// { <div id = "wrapper" style = "display: flex;">
//     <div style ="width: 300px; margin: 10px;">
//         <h3>What is Lorem Ipsum?</h3>
//         <img style ="wigth: 100%" scr ="lipsum.jpg" alt = "Lorem Ipsum">
//             <p style = "text-aling: justify;">  }

//<p id="magic">Hello, <em>Paul</em></p>
