// -----------------------------
// Part 1: Event Handling & Counter
// -----------------------------
let counter = 0;
const counterBtn = document.getElementById("counter-btn");
const counterDisplay = document.getElementById("counter-display");

counterBtn.addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = `Count: ${counter}`;
});

// -----------------------------
// Part 2: Interactive Elements
// -----------------------------
// Theme toggle (dark/light mode)
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// FAQ accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    question.parentElement.classList.toggle("active");
  });
});

// -----------------------------
// Part 3: Form Validation
// -----------------------------
const form = document.getElementById("register-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const successMessage = document.getElementById("form-success");

function showError(input, message) {
  const errorMsg = input.nextElementSibling;
  errorMsg.textContent = message;
}

function clearError(input) {
  const errorMsg = input.nextElementSibling;
  errorMsg.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;

  // Name validation: must be at least 3 characters
  if (nameInput.value.trim().length < 3) {
    showError(nameInput, "Name must be at least 3 characters long.");
    valid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation: regex pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Please enter a valid email.");
    valid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation: at least 6 chars, must contain number
  const passwordPattern = /^(?=.*\d).{6,}$/;
  if (!passwordPattern.test(passwordInput.value.trim())) {
    showError(passwordInput, "Password must be 6+ characters and include a number.");
    valid = false;
  } else {
    clearError(passwordInput);
  }

  // If valid, show success
  if (valid) {
    successMessage.textContent = "✅ Registration successful!";
    form.reset();
  } else {
    successMessage.textContent = "";
  }
});
