function calculate(operation) {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  let result;

  // Validation
  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      if (num2 === 0) {
        alert("Division by zero is not allowed!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      alert("Unknown operation!");
      return;
  }

  // Show result
  document.getElementById("result").textContent = "Result: " + result;
}
