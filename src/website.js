import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";
import Icon from "./img/phone-call.png";

function createHeader() {
  const header = document.createElement("header");
  const phone = document.createElement("div");
  phone.classList.add("phone-number");

  const myIcon = new Image();
  myIcon.src = Icon;
  myIcon.classList.add("phone-img");
  const phoneText = document.createElement("div");
  phoneText.innerHTML = "(305) 123-4567";

  phone.appendChild(myIcon);
  phone.appendChild(phoneText);
  header.appendChild(createNav());
  header.appendChild(phone);
  return header;
}

function createNav() {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const home = document.createElement("li");
  home.classList.add("nav-li");
  home.textContent = "Home";
  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(home);
    loadHome();
  });

  const menu = document.createElement("li");
  menu.classList.add("nav-li");
  menu.textContent = "Menu";
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(menu);
    loadMenu();
  });

  const about = document.createElement("li");
  about.classList.add("nav-li");
  about.textContent = "About";
  about.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(about);
    loadAbout();
  });

  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(about);

  return nav;
}

export function setActive(elm) {
  const li = document.querySelectorAll(".nav-li");

  li.forEach((li) => {
    if (elm !== li) {
      li.classList.remove("active");
    }
  });

  elm.classList.add("active");
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function startWebsite() {
  const content = document.querySelector("#content");
  const background = document.createElement("div");

  content.appendChild(background);
  content.appendChild(createHeader());
  content.appendChild(createMain());
  setActive(document.querySelector("li"));
  loadHome();
}

export default startWebsite;
