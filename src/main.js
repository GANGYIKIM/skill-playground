const greeting = document.getElementById("greeting");
const form = document.getElementById("name-form");
const input = document.getElementById("name-input");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = input.value.trim();
  greeting.textContent = name ? `안녕하세요, ${name}님!` : "안녕하세요!";
  input.value = "";
});
