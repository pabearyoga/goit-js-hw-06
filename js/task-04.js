const countBlocks = document.querySelectorAll(".counter");
const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;

function onPlusBtnClick() {
  updateValue((counterValue += 1));
}

function onMinusBtnClick() {
  updateValue((counterValue -= 1));
}

function updateValue(params) {
  value.innerHTML = params;
}

plusBtn.addEventListener("click", onPlusBtnClick);
minusBtn.addEventListener("click", onMinusBtnClick);
