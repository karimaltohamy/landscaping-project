const menuMobile = document.querySelector(".menu-mobile");
const btnMenu = document.querySelector(".btn_icon");
const btnClose = document.querySelector(".close-menu");

btnMenu.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

btnClose.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

// read more
const descRead = document.querySelector(".desc_read");
const hiddenContent = document.querySelector(".text_more");
const readMoreLinks = document.querySelectorAll(".btn_read_text");

readMoreLinks.forEach((readMoreLink) => {
  readMoreLink.addEventListener("click", function (event) {
    event.preventDefault();
    readMoreLink.parentElement.children[0].classList.toggle("hide");

    if (readMoreLink.parentElement.children[0].classList.contains("hide")) {
      readMoreLink.textContent = "Read More";
    } else {
      readMoreLink.textContent = "Read Less";
    }
  });
});
