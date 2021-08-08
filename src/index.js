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





const theme = localStorage.getItem(`${Theme.DARK}`);
const storageAudit = JSON.parse(localStorage.getItem(`${Theme.DARK}`));

// function storageTheme() {
//   if (theme) {
    
//   }
//     bodyBg.classList.toggle(`${Theme.DARK}`);
// };

// storageTheme();
themeSwitch.addEventListener("change", switcherBgColor);

function switcherBgColor() {

 
    localStorage.setItem('theme', `${Theme.DARK}`)
    bodyBg.classList.toggle(`${Theme.DARK}`);
   

};





console.log(theme);
// const theme = localStorage.getItem(`${Theme.DARK}`);

// function storageTheme() {
//   if(storageAudit ++) 
// // };



//   const sliderSwitch = document.querySelector("#theme-switch-toggle");
  
//   const body = document.querySelector("body");
  
//   sliderSwitch.addEventListener("change", checkColor);
//   sliderSwitch.addEventListener("change", inLocaLeStorage);
  
//   function checkColor() {
//     const check = sliderSwitch.checked;
  
//     if (check) {
//       body.classList.add(Theme.DARK);
//       body.classList.remove(Theme.LIGHT);
//     } else {
//       body.classList.add(Theme.LIGHT);
//       body.classList.remove(Theme.DARK);
//     }
//   }
  
//   function inLocaLeStorage() {
//     const check = sliderSwitch.checked;
  
//     if (check) {
//       localStorage.setItem("theme", Theme.DARK);
//     } else {
//       localStorage.removeItem("theme");
//       localStorage.setItem("theme", Theme.LIGHT);
//     }
//   }
  
//   const changeLocalTheme = localStorage.getItem("theme");
//   if (changeLocalTheme === Theme.DARK) {
//     body.classList.add(Theme.DARK);
//     sliderSwitch.checked = true;
//   }