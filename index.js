//  Input Prompts
const firstNumber = parseFloat(prompt("Enter the first number:"));
const secondNumber = parseFloat(prompt("Enter the second number:"));
const operation = prompt("Enter the operation (+, -, *, /):");

let result;

// calculation performed
if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  if (secondNumber !== 0) {
    result = firstNumber / secondNumber;
  } else {
    alert("Invalid Number");
    result = "undefined";
  }
} else {
  alert("Invalid operation entered.");
  result = "undefined";
}

// Display the result
if (result !== "undefined") {
  alert("The result of " + firstNumber + " " + operation + " " + secondNumber + " is " + result);
}
