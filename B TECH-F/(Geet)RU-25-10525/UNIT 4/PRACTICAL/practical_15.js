// Using getElementById()
function changeById() {
  document.getElementById("message").innerHTML =
    "Changed using getElementById() 🎯";
}

// Using querySelector()
function changeByQuery() {
  document.querySelector("#message").innerHTML =
    "Updated using querySelector() 🔍";
}

// Using innerHTML to add content
function addHTML() {
  document.getElementById("output").innerHTML =
    "<h3>✨ Hello DOM ✨</h3><p>Content added using innerHTML</p>";
}
