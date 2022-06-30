const fontSizeControl = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

function setOutput() {
  output.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("change", setOutput);
