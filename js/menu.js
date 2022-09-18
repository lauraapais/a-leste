var body = document.querySelector("body");

var menu=document.getElementById("menu");
var menuButton=document.querySelector("nav .menu");
var closeButton=document.querySelector("#menu .close_menu");

menuButton.addEventListener("click",toggleMenu);
closeButton.addEventListener("click",toggleMenu);

function toggleMenu(){
    menu.classList.toggle("display");
    body.classList.toggle("scroll");
}