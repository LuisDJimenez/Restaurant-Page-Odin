function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");
  const name = document.createElement("h1");
  name.innerHTML  = " <span>MORE</span> THAN <br> JUST PIZZA";
  name.classList.add("header");

  const p1 = document.createElement("div");
  p1.classList.add("text-content");
  p1.innerHTML = "Our menu has something for everyone, stop <br> for a quick bite or get your favorites <br> delivered rigth to your door. ";

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
