function navToggle() {
    var btn = document.getElementById('menu-button');
    var menu = document.getElementById('menu');
    var btnopen = document.getElementById('button-open');
    var btnclose = document.getElementById('button-close');

    menu.classList.toggle('translate-x-full');
    btnopen.classList.toggle('translate-x-24');
    btnclose.classList.toggle('translate-x-24');
}
