const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const backgroundImg = document.querySelector(".background-img");
const h1 = document.querySelector(".text h1");
const p = document.querySelector(".text p");
const span = document.querySelector(".text h1 span");
const buttonHome = document.querySelector(".text button");

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

// Section Head

function img(anything) {
  backgroundImg.src = anything;
  h1.style.color = "white";
  span.style.color = "#9D89FA";
  p.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
  buttonHome.style.backgroundColor = "rgba(255, 255, 255, 0.8)";

  navLink.forEach((element) => {
    element.style.color = "#9D89FA";
  });

  // navLink.forEach((element) => {
  //   element.style.color = "white";
  // });
}
function change(change) {
  const line = document.querySelector(".image");
  line.style.background = change;
}

/*----------------Carrosel-----------------------*/

const swiper = new Swiper(".swiper", {
  cssMode: true,
  loop: true,

  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  Keyboard: true,
});
