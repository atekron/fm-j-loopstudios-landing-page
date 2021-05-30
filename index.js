console.log("hello");

function mobileMenu() {
  console.log("hi");
  const hamburgerBtn = document.querySelector(".header__mobile-hamburger");
  const closeBtn = document.querySelector(".header__mobile-close");
  const mobileMenu = document.querySelector(".header__links");

  if (hamburgerBtn.style.display !== "none") {
    hamburgerBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
    mobileMenu.style.display = "flex";
  } else {
    hamburgerBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
    mobileMenu.style.display = "none";
  }
}
