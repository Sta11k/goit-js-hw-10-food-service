import './sass/main.scss';
import dataMenu from "./data/menu.json"
import menuMrpTemplate from "./templates/markup.hbs"
const markup = menuMrpTemplate(dataMenu);

const menuList = document.querySelector(".js-menu");
const themeSwitch = document.querySelector("#theme-switch-toggle");
const bodyBg = document.querySelector("body");

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


// console.log(Theme.DARK);
// console.log(themeSwitch);
// console.log(menuList);
// console.log(dataMenu);
// console.log(menuMrpTemplate);
 
menuList.insertAdjacentHTML('beforeend', markup);

themeSwitch.addEventListener("change", switcherBgColor);

function switcherBgColor(e) {
    e.preventDefault();
    bodyBg.classList.toggle(`${Theme.DARK}`);

 };

