const nav_bar = document.querySelector('.nav-bar')
const header = document.querySelector('header')

function onHeaderClick() {
    if (nav_bar.style.maxHeight.length > 0) {
        nav_bar.style.maxHeight = null;
    } else {
        nav_bar.style.maxHeight = nav_bar.scrollHeight + "px";
    }
    nav_bar.classList.toggle('active')
}

header.addEventListener('click', onHeaderClick)