const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

function onPlusBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) + 1;
}
function onMinusBtnClick() {
  counterValue.textContent = Number(counterValue.textContent) - 1;
}

plusBtn.addEventListener("click", onPlusBtnClick);
minusBtn.addEventListener("click", onMinusBtnClick);
