const iconMenu = document.querySelector(".icon-menu");

const menuBody = document.getElementById("menu-body");
const menuButton = document.getElementById("menu-button");

const header = document.querySelector(".header");
const headerLinks = document.querySelectorAll('a[href*="#"]');
const headerCloseMenu = document.querySelector(".header__close-menu");
const headerBox1 = document.getElementById("header-box-work-1");
const headerBox2 = document.getElementById("header-box-work-2");

export {
  iconMenu,
  headerCloseMenu,
  menuBody,
  header,
  headerLinks,
  menuButton,
  headerBox1,
  headerBox2,
};
