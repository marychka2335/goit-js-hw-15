const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
textRef.style.fontSize = inputRef.value;

inputRef.addEventListener("input", (event) => {
  textRef.style.fontSize = inputRef.value + "px";
  console.log(textRef.style.fontSize);
});
