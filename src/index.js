import { getRefs } from "./js/getRefs";
import css from "./css/styles.css";
import menu from "./js/menu";
import menuItems from "./template/menu.hbs";
const refs = getRefs()

const markeUp = menuItems(menu) 

refs.menu.insertAdjacentHTML("beforeend", markeUp)
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const userTheme = localStorage.getItem("theme")
if (userTheme === 'dark-theme') {
    refs.body.classList.add(Theme.DARK);
    refs.input.checked = true
} else {
    refs.body.classList.add(Theme.LIGHT)
}

refs.input.addEventListener("change", () => {
    refs.body.classList.toggle(Theme.DARK)
    refs.body.classList.toggle(Theme.LIGHT)
    changeTheme()

})

const changeTheme = () => {
localStorage.setItem("theme", refs.input.checked ?Theme.DARK: Theme.LIGHT)
}