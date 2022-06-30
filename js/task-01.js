const categoriesNumberEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesNumberEl.length}`);

const categoriesName = document.querySelectorAll(".item");

categoriesName.forEach(function (name) {
  console.log(`Category: ${name.firstElementChild.textContent}`);
  const categoriesEl = name.querySelectorAll("li");
  console.log(`Elements: ${categoriesEl.length}`);
});
