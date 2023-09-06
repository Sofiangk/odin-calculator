function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(op, n1, n2) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(n1, n2);
      break;

    case "-":
      result = subtract(n1, n2);
      break;

    case "*":
      result = multiply(n1, n2);
      break;

    case "/":
      result = divide(n1, n2);
      break;

    default:
      return "";
  }
}

let firstNumber = 0;
let secondNumber = 0;
let operator = "";
