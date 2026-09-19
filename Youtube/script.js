const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const btnMenu = document.getElementById("btn-menu");
const btnClose = document.getElementById("btn-close");

function openMenu(){
    menu.classList.add("aberto");
    overlay.classList.add("aberto");
}

function closeMenu(){
    menu.classList.remove("aberto");
    overlay.classList.remove("aberto");
}

btnMenu.addEventListener("click", openMenu);
btnClose.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);