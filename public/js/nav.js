// reponsive navbar
const navbar = document.querySelector(".navbar");
const navbarIcons = document.querySelector(".navbar-icons");

navbarIcons.addEventListener("click", (e) => {
  navbar.classList.toggle("open");
});
