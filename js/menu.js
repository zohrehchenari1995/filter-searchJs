
const toggler = document.querySelector(".content__menu--toggler");
const menu = document.querySelector(".content__menu");
toggler.addEventListener("click",(e)=>{
  menu.classList.toggle("menu__expanded");
});