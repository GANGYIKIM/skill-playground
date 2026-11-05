import { validateName } from "./name-validator.js";

const MAX_NAME_LENGTH = 20;

const greeting = document.getElementById("greeting");
const form = document.getElementById("name-form");
const input = document.getElementById("name-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();
  const error = validateName(name, { maxLength: MAX_NAME_LENGTH });
  if (error) {
    greeting.textContent = error;
    return;
  }

  greeting.textContent = name ? `안녕하세요, ${name}님!` : "안녕하세요!";
  input.value = "";
});
