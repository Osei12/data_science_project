const toTop = document.querySelector(".to-top-btn");
const Top = document.getElementById("to-top")

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active")
    }
})

Top.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

// Display Mobile Menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle("active");
};

menu.addEventListener('click', mobileMenu);

// Close Mobile Menu
const hidemobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove("active");
    }
};

menuLinks.addEventListener('click', hidemobileMenu);
navLogo.addEventListener('click', hidemobileMenu);