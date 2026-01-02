// User-defined function: greet
function greetUser(name) {
  const message = "Hello, " + name + "! Welcome to the demo.";
  document.getElementById("output").textContent = message;
}

// User-defined function: calculate sum
function calculateSum(a, b) {
  const sum = a + b;
  document.getElementById("output").textContent = "Sum of " + a + " and " + b + " is: " + sum;
}

// Scope demonstration with var, let, const
function scopeDemo() {
  let result = "";

  if (true) {
    var x = 10;   // function-scoped
    let y = 20;   // block-scoped
    const z = 30; // block-scoped constant

    result += "Inside block:\n";
    result += "var x = " + x + "\n";
    result += "let y = " + y + "\n";
    result += "const z = " + z + "\n";
  }

  result += "\nOutside block:\n";
  result += "var x is still accessible: " + x + "\n";

  try {
    result += "let y is: " + y + "\n"; // Error
  } catch (e) {
    result += "let y is not accessible outside block.\n";
  }

  try {
    result += "const z is: " + z + "\n"; // Error
  } catch (e) {
    result += "const z is not accessible outside block.\n";
  }

  document.getElementById("output").textContent = result;
}

// Clear output
function clearOutput() {
  document.getElementById("output").textContent = "";
}