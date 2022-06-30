const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

ingredients.forEach(function (ingredient) {
  const list = document.querySelector("#ingredients");
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList = "item";
  list.append(item);
});
