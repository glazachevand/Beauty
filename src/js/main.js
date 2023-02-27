burgerHandler();
dropdownHandler();

function burgerHandler() {
  const header = document.querySelector(".header");
  const iconMenu = header.querySelector(".icon-menu");
  const menuBody = header.querySelector(".menu__body");

  iconMenu?.addEventListener("click", function () {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}

function dropdownHandler() {
  const mainMenu = document.querySelector(".main-menu");

  mainMenu?.addEventListener("click", function () {
    this.querySelector(".main-menu__title").classList.toggle("_active");
    this.querySelector(".main-menu__body")?.classList.toggle("_active");
  });
}
