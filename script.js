const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

console.log(navLink);

hamburguer.addEventListener("click", handleMobileMenu);

function handleMobileMenu() {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
}
navLink.forEach((element) => {
  element.addEventListener("click", closeMenu);
});

function closeMenu() {
  hamburguer.classList.remove("active");
  navMenu.classList.remove("active");
}
