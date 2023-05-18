const navMenu = document.querySelector("#navMenu");
const navToggle = document.querySelector("#navToggle");

if (navMenu && navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("header__nav_show");
    navToggle.classList.toggle("header__hamb-icon_open");
    navToggle.classList.toggle("header__hamb-icon_close");
  });
}