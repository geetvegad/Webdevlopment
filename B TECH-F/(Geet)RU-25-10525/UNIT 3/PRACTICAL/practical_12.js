// CONDITIONAL STATEMENTS DEMO
function runConditional() {
  const num = parseInt(document.getElementById("numberInput").value);
  let result = "";

  if (isNaN(num)) {
    result = "Please enter a valid number.";
  } else {
    if (num > 0) {
      result += num + " is positive.\n";
    } else if (num < 0) {
      result += num + " is negative.\n";
    } else {
      result += "Number is zero.\n";
    }

    // Switch example
    switch (num) {
      case 1:
        result += "Number is exactly one.\n";
        break;
      case 2:
        result += "Number is exactly two.\n";
        break;
      default:
        result += "Number is something else.\n";
    }
  }

  document.getElementById("output").textContent = result;
}

// LOOPING DEMO
function runLoops() {
  let result = "";

  result += "=== For Loop ===\n";
  for (let i = 1; i <= 5; i++) {
    result += "For loop iteration: " + i + "\n";
  }

  result += "\n=== While Loop ===\n";
  let j = 1;
  while (j <= 5) {
    result += "While loop iteration: " + j + "\n";
    j++;
  }

  result += "\n=== Do…While Loop ===\n";
  let k = 1;
  do {
    result += "Do…While loop iteration: " + k + "\n";
    k++;
  } while (k <= 5);

  document.getElementById("output").textContent = result;
}

// CLEAR OUTPUT
function clearOutput() {
  document.getElementById("output").textContent = "";
}