const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");
const anon = "Anonimus";

function onInputElInput() {
  inputEl.value === ""
    ? (outputEl.textContent = anon)
    : (outputEl.textContent = inputEl.value);
}

inputEl.addEventListener("input", onInputElInput);
