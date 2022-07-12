function Execute(event) {
    event.preventDefault();
    let el = document.getElementById("line");
    let tmp = document.form1.align.value;
    switch (tmp) {
        case "left":
            el.style.setProperty("margin", "0px");
            el.style.setProperty("float", "left");
            break;
        case "right":
            el.style.setProperty("margin", "5px");
            el.style.setProperty("float", "right");
            break;
        case "center":
            el.style.setProperty("margin", "auto");
            el.style.setProperty("position", "relative");
            el.style.removeProperty("float");
            break;
    }

    tmp = document.form1.size.value;
    el.style.height = (tmp + "px");
    tmp = document.form1.width.value;
    el.style.width = (tmp + "px");
    tmp = document.form1.color.value;
    el.style.setProperty("background-color", tmp);
}