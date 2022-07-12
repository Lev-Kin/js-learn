
document.querySelector('button').onclick = myClick;

var d = new Date();

document.getElementById("time").innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "   " +
    d.getDate() + "." + d.getMonth() + "." + d.getFullYear();

class AddMessage {
    name;
    text;

    get Name() {
        return this.name;
    }

    get Text() {
        return this.text;
    }

    set Name(value) {
        this.name = value;
    }

    set Text(value) {
        this.text = value;
    }
}

let objectMessage = new AddMessage();

function myClick() {

    p = document.getElementById("message");

    objectMessage.Name = document.querySelector('.inputName').value;
    objectMessage.Text = document.querySelector('.Text').value;

    p.innerHTML += ` <p class="name" > ` +
        objectMessage.Name +`<span>`+
        document.getElementById("time").innerHTML + " </p> ";

    p.innerHTML += `<p class="text"> ` + objectMessage.Text + "</p>";

    p.innerHTML += `<br>`
}