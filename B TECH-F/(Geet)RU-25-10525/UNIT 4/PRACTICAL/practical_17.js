// Select elements
const mouseBtn = document.getElementById("mouseBtn");
const keyInput = document.getElementById("keyInput");
const keyOutput = document.getElementById("keyOutput");
const removeBtn = document.getElementById("removeBtn");

// Mouse event function
function mouseAction() {
  mouseBtn.innerHTML = "Mouse Event Triggered 🖱️";
}

// Add mouse events
mouseBtn.addEventListener("click", mouseAction);
mouseBtn.addEventListener("mouseover", () => {
  mouseBtn.style.background = "#4caf50";
});

// Keyboard event
keyInput.addEventListener("keyup", () => {
  keyOutput.innerHTML = "You typed: " + keyInput.value;
});

// Remove mouse click event
removeBtn.addEventListener("click", () => {
  mouseBtn.removeEventListener("click", mouseAction);
  mouseBtn.innerHTML = "Mouse Click Event Removed ❌";
});
