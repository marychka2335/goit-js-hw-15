const formRef = document.querySelector(".login-form");

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Заповніть, будь ласка, всі поля");
  }

  createNewUser(email, password);
  event.currentTarget.reset();
}

function createNewUser(email, password) {
  const user = {
    email: email.value,
    password: password.value,
  };
  console.log(user);
}

formRef.addEventListener("submit", handleSubmit);
