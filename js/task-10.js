const inputRef = document.querySelector("input");
const createBtnRef = document.querySelector("button[data-create]");
const destroyBtnRef = document.querySelector("button[data-destroy]");
const boxesRef = document.querySelector("div#boxes");

function createBoxes(amount) {
  const boxAmount = [];
  for (let i = 0; i < amount; i += 1) {
    boxAmount.push("<div></div>");
  }
  boxesRef.insertAdjacentHTML("afterbegin", boxAmount.join(""));
}

function setBoxesSize() {
  boxesRef.querySelectorAll("div").forEach((child, index) => {
    child.style.width = `${30 + index * 10}px`;
    child.style.height = `${30 + index * 10}px`;
    child.style.backgroundColor = getRandomHexColor();
    child.style.marginLeft = `${5 + index * 10}px`;
    child.style.marginTop = `${-5 - index * 10}px`;
  });
}

createBtnRef.addEventListener("click", () => {
  const boxesAmount = inputRef.value;
  createBoxes(boxesAmount);
  setBoxesSize();
  inputRef.value = "";
});

destroyBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes() {
  boxesRef.querySelectorAll("div").forEach((child) => child.remove());
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
