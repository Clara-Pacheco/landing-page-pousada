const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", handleMobileMenu);

function handleMobileMenu() {
  hamburguer.classList.toggle("active");
  navMenu.classList.toggle("active");
}
