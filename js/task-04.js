const plusBtn = document.querySelector('button[data-action="increment"]');
const minusBtn = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector("#value");

const plusClick = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const minusClick = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

plusBtn.addEventListener("click", plusClick);
minusBtn.addEventListener("click", minusClick);
