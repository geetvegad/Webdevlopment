// Helper functions
function isValidName(name) {
  return /^[A-Za-z][A-Za-z\s'.-]{1,}$/.test(name.trim());
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isValidPassword(pw) {
  return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pw);
}

function setMessage(el, msg, ok = false) {
  el.textContent = msg || "";
  el.className = ok ? "ok" : "error";
}

// Elements
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameMsg = document.getElementById("nameMsg");
const emailMsg = document.getElementById("emailMsg");
const passwordMsg = document.getElementById("passwordMsg");

// oninput validation
nameInput.oninput = function () {
  const val = nameInput.value;
  if (!val.trim()) {
    setMessage(nameMsg, "Name is required. (Naam zaroori hai)");
  } else if (!isValidName(val)) {
    setMessage(nameMsg, "Use at least 2 letters; no numbers.");
  } else {
    setMessage(nameMsg, "Looks good. (Theek hai)", true);
  }
};

emailInput.oninput = function () {
  const val = emailInput.value;
  if (!val.trim()) {
    setMessage(emailMsg, "Email is required. (Email zaroori hai)");
  } else if (!isValidEmail(val)) {
    setMessage(emailMsg, "Enter a valid email like name@domain.com");
  } else {
    setMessage(emailMsg, "Looks good. (Theek hai)", true);
  }
};

passwordInput.oninput = function () {
  const val = passwordInput.value;
  if (!val) {
    setMessage(passwordMsg, "Password is required. (Password zaroori hai)");
  } else if (!isValidPassword(val)) {
    setMessage(passwordMsg, "Min 8 chars with at least 1 letter and 1 number.");
  } else {
    setMessage(passwordMsg, "Strong enough. (Theek hai)", true);
  }
};

// onsubmit validation
form.onsubmit = function (e) {
  e.preventDefault();

  const errors = [];

  if (!nameInput.value.trim()) {
    errors.push("Name is required.");
  } else if (!isValidName(nameInput.value)) {
    errors.push("Name must have at least 2 letters and no digits.");
  }

  if (!emailInput.value.trim()) {
    errors.push("Email is required.");
  } else if (!isValidEmail(emailInput.value)) {
    errors.push("Enter a valid email address.");
  }

  if (!passwordInput.value) {
    errors.push("Password is required.");
  } else if (!isValidPassword(passwordInput.value)) {
    errors.push("Password must be 8+ chars with 1 letter and 1 number.");
  }

  if (errors.length > 0) {
    alert("Please fix the following:\n\n- " + errors.join("\n- "));
    return;
  }

  alert("Form submitted successfully!");
};
    