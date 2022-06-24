const menu = document.querySelector(".menu"),
    nav = document.querySelector(".nav");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    nav.classList.toggle("menu-open");

})
