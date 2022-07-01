const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const listItems = [];

ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = `${ingredient}`;
  item.classList = "item";
  listItems.push(item);
});

list.append(...listItems);
