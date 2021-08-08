import './sass/main.scss';
import dataMenu from "./data/menu.json"
import menuMrpTemplate from "./templates/markup.hbs"
const markup = menuMrpTemplate(dataMenu);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};


const menuList = document.querySelector(".js-menu");
const themeSwitch = document.querySelector("#theme-switch-toggle");
const bodyBg = document.querySelector("body");

menuList.insertAdjacentHTML('beforeend', markup);


// const theme = localStorage.getItem(`${Theme.DARK}`);
// const storageAudit = JSON.parse(localStorage.getItem(`${Theme.DARK}`));

themeSwitch.addEventListener("change", switcherBgColor);
themeSwitch.addEventListener("change", checkBgColorLocStor);



  function switcherBgColor() {
      const check = themeSwitch.checked;
      if (check) {
    bodyBg.classList.add(Theme.DARK);
    bodyBg.classList.remove(Theme.LIGHT);
     } else {
    bodyBg.classList.add(Theme.LIGHT);
    bodyBg.classList.remove(Theme.DARK);
     }

}

   function checkBgColorLocStor() {
    const check = themeSwitch.checked;
    // console.log(check);
    if (check) {
      localStorage.setItem("theme", Theme.DARK);
    } else {
      localStorage.removeItem("theme");
      localStorage.setItem("theme", Theme.LIGHT);
    }
}

  
const replaceLocalTheme = localStorage.getItem("theme");
if (replaceLocalTheme === Theme.DARK) {
    themeSwitch.checked = true;
    bodyBg.classList.add(Theme.DARK);

    
}

