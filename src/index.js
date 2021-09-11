import css from "./css/styles.css";
import menu from "./js/menu";
import menuItems from "./template/menu.hbs";
const markeUp = menuItems(menu) 

const menuRef = document.querySelector(".js-menu")
console.log(menuRef)

menuRef.insertAdjacentHTML("beforeend", markeUp)