const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let item = document.createElement("li");
  item.className = "item";
  item.textContent = ingredient;
  list.appendChild(item);
});
