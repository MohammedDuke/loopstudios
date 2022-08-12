const mobileNavbarToggle = document.querySelector(".mobile-navbar-toggle");
const primaryNavbar = document.querySelector(".primary-navbar");
const logoEle = document.querySelector(".logo");

const iconClose = document.querySelector(".icon-close");

mobileNavbarToggle.addEventListener("click", () => {
  primaryNavbar.toggleAttribute("data-visible");

  // Add Position Fixed
  logoEle.classList.toggle("position-absolute");
  iconClose.classList.toggle("position-absolute");
  iconClose.classList.toggle("d-block");

  primaryNavbar.hasAttribute("data-visible")
    ? mobileNavbarToggle.setAttribute("aria-expanded", false)
    : mobileNavbarToggle.setAttribute("aria-expanded", true);
});
