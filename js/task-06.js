const textInput = document.querySelector("#validation-input");

function onTextInputBlur() {
  textInput.value.length === Number(textInput.dataset.length)
    ? textInput.classList.add("valid") ||
      textInput.classList.replace("invalid", "valid")
    : textInput.classList.add("invalid") ||
      textInput.classList.replace("valid", "invalid");
}

textInput.addEventListener("blur", onTextInputBlur);
