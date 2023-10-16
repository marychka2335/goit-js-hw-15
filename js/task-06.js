const inputRef = document.querySelector("input#validation-input");
const inputLength = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === inputLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
    console.log(inputRef);
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
    console.log(inputRef);
  }
});
