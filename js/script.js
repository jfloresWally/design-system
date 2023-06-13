var menu = document.getElementById("menu");

function myFunction() {
    document.querySelector(".aside").classList.toggle("block");
}

menu.addEventListener("click", myFunction);