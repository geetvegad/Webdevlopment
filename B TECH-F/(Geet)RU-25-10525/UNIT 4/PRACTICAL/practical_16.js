// Show element
function showText() {
  document.getElementById("text").style.display = "block";
}

// Hide element
function hideText() {
  document.getElementById("text").style.display = "none";
}

// Toggle show/hide
function toggleText() {
  let text = document.getElementById("text");
  text.style.display = (text.style.display === "none") ? "block" : "none";
}

// Toggle CSS class
function toggleStyle() {
  document.getElementById("box").classList.toggle("active");
}
