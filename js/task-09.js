const btnRef = document.querySelector(".change-color");
const colorRef = document.querySelector(".color");
const body = document.body;

btnRef.addEventListener("click", onBtnColorChange);

function onBtnColorChange() {
  const gottenColor = getRandomHexColor();
  body.style.backgroundColor = gottenColor;
  colorRef.textContent = gottenColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
