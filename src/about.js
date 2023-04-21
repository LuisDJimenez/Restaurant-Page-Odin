function createAbout() {
  const about = document.createElement("div");
  about.classList.add("about-container");

  const p1 = document.createElement("p");
  p1.textContent =
    "Welcome to our pizza restaurant, where we specialize in crafting delicious, authentic pizzas that are sure to satisfy your cravings. Our restaurant is dedicated to providing the highest quality ingredients, expertly prepared to create a taste experience that you won't soon forget.";
  const p2 = document.createElement("p");
  p2.textContent =
    "We take pride in using only the freshest ingredients in our pizzas, from our homemade pizza dough to our signature tomato sauce and premium cheese blends. We also offer a wide range of toppings, including classic favorites like pepperoni and mushrooms, as well as unique combinations like goat cheese and caramelized onions.";
  const p3 = document.createElement("p");
  p3.textContent =
    "At our pizza restaurant, we believe that pizza is more than just a meal – it's an experience. That's why we strive to create a warm and welcoming atmosphere for our customers, whether you're stopping in for a quick slice or settling in for a full meal with friends and family.";
  const p4 = document.createElement("p");
  p4.textContent =
    "So whether you're a die-hard pizza lover or simply looking for a delicious meal, come visit us at our pizza restaurant and discover the perfect slice for you!";

  about.appendChild(p1);
  about.appendChild(p2);
  about.appendChild(p3);
  about.appendChild(p4);

  return about;
}

function loadAbout() {
  const main = document.querySelector(".main");
  main.textContent = "";
  main.appendChild(createAbout());
}

export default loadAbout;
