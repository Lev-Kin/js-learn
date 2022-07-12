var links = document.querySelectorAll('ul a:not([href^="http"])');

links.forEach(function (el) {
    el.style.borderBottom = '1px dashed blue';
});
