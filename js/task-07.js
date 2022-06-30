const fontSizeControl = document.querySelector("#font-size-control");
const output = document.querySelector("#text");

function onOutputChange() {
  output.style.fontSize = `${fontSizeControl.value}px`;
}

fontSizeControl.addEventListener("change", onOutputChange);
