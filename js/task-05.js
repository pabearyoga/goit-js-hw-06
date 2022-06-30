const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function onInputElInput() {
  outputEl.textContent = inputEl.value;
}

inputEl.addEventListener("input", onInputElInput);
