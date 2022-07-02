const boxesEl = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("input");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  const arrAddDivBoxes = [];
  destroyBoxes();
  numberInput.value > Number(numberInput.getAttribute("max")) ||
  numberInput.value < Number(numberInput.getAttribute("min"))
    ? alert("Тільки числа від 1 до 100 !")
    : (amount = numberInput.value);

  for (let i = 0; i < amount; i += 1) {
    const addDivBoxes = document.createElement("div");
    addDivBoxes.style.width = 30 + i * 10 + "px";
    addDivBoxes.style.height = 30 + i * 10 + "px";
    addDivBoxes.style.backgroundColor = getRandomHexColor();
    arrAddDivBoxes.push(addDivBoxes);
  }
  boxesEl.append(...arrAddDivBoxes);
}

function destroyBoxes() {
  boxesEl.innerHTML = "";
}

function removeNumberInput() {
  numberInput.value = "";
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
destroyBtn.addEventListener("click", removeNumberInput);
