const bodyEl = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const bgcColorText = document.querySelector(".color");
// const widget = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  bgcColorText.textContent = `${bodyEl.style.backgroundColor}`;
}

changeColorBtn.addEventListener("click", changeColor);
