import loadMenu from "./menu";
import loadAbout from "./about";

function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const name = document.createElement("h1");
  name.innerHTML = " <span>MORE</span> THAN";
  name.classList.add("header");
  name.classList.add("animate-rigth");

  const name2 = document.createElement("h1");
  name2.innerHTML = " JUST PIZZA";
  name2.classList.add("header");
  name2.classList.add("animate-left");

  const p1 = document.createElement("div");
  p1.classList.add("text-content");
  p1.innerHTML =
    "Our menu has something for everyone, stop <br> for a quick bite or get your favorites delivered <br> rigth to your door. ";

  const p2 = document.createElement("p");
  p2.classList.add("quote");
  p2.innerHTML = "The best pizza I have ever had";
  const p3 = document.createElement("p");
  p3.classList.add("quote-author");
  p3.innerHTML = "— Some random guy";

  home.appendChild(name);
  home.appendChild(name2);
  home.appendChild(p1);
  home.appendChild(p2);
  home.appendChild(p3);
  return home;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
