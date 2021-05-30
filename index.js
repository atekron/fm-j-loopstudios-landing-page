console.log("hello");
const largeScreen = window.matchMedia("(min-width: 700px)");

// open and close menu on small screens
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

function showImagesForScreenSize(mediaScreen) {
  const galleryImages = document.querySelectorAll(".gallery__item");

  if (mediaScreen.matches) {
    galleryImages.forEach((item) => {
      const imgSource = item.children[0].src.replace("mobile", "desktop");
      item.children[0].src = imgSource;
    });
  } else {
    galleryImages.forEach((item) => {
      const imgSource = item.children[0].src.replace("desktop", "mobile");
      item.children[0].src = imgSource;
    });
  }
}

//replase images on resize
showImagesForScreenSize(largeScreen);
largeScreen.addEventListener("change", showImagesForScreenSize);
