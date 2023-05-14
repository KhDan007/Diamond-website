const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    menu.classList.toggle("active");
    document.body.classList.toggle("lock");
});

const modeSwitch = document.querySelector(".header__mode-switch");
const headerTitle = document.querySelector(".header__title");

let condition = false;
modeSwitch.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");

    if (!condition) {
        headerTitle.children[0].setAttribute("src", "img/logo-white")

        condition = true;
    } else {
        headerTitle.children[0].setAttribute("src", "img/logo-black")
        condition = false;
    }

});