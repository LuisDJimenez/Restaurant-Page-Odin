import loadHome from "./home";

function createHeader() {
  const header = document.createElement("header");
  header.appendChild(createNav());
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

  const contact = document.createElement("li");
  contact.classList.add("nav-li");
  contact.textContent = "Contact";
  contact.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(contact);
    loadContact();
  });

  nav.appendChild(ul);
  ul.appendChild(home);
  ul.appendChild(menu);
  ul.appendChild(contact);

  return nav;
}

function setActive(elm) {
  const li = document.querySelectorAll(".nav-li");

  li.forEach((li) => {
    if (elm !== li) {
      elm.classList.remove("active");
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

  content.appendChild(createHeader());
  content.appendChild(createMain());
  setActive(document.querySelector("li"));
  loadHome();
}

export default startWebsite;
