// Toggle menu
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const navItem = document.querySelector(".nav-item");

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

