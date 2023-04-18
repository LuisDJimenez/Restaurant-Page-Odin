function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const name = document.createElement("h1");
  name.textContent = "Pizza";
  name.classList.add("header");

  const p1 = document.createElement("p");
  p1.classList.add("text-content");
  p1.textContent = "The best Cuban style pizza in Florida";

  const p2 = document.createElement("p");
  p2.textContent = "Quality Garanteed!";
  p2.classList.add("text-content");

  home.appendChild(name);
  home.appendChild(p1);
  home.appendChild(p2);
  return home;
}

function loadHome() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
