function validateInput() {
  const input = document.querySelectorAll(".inputField").value;
  const errorSpan = document.getElementById("error");

  if (input.trim() === "") {
      errorSpan.textContent = "Input cannot be empty";
  } else {
      errorSpan.textContent = "";
  }
}

function clearError() {
const errorSpan = document.getElementById("error");
  errorSpan.textContent = "";
}