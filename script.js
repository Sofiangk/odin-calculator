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

const numButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperand = document.querySelector(".previous-operand");
const currentOperand = document.querySelector(".current-operand");

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperand.textContent += button.textContent;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentOperand.textContent += button.textContent;
  });
});

allClearButton.addEventListener("click", () => {
  currentOperand.textContent = "";
});

deleteButton.addEventListener("click", () => {
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
});

equalsButton.addEventListener("click", () => {
  currentOperand.textContent = operate(
    currentOperand.textContent,
    previousOperand.textContent
  );
  if (currentOperand.textContent.contains("÷")) {
    let firstNumber = 0;
    let secondNumber = 0;
    let operand = "÷";

    [firstNumber, secondNumber] = currentOperand.textContent.split(operand);
    previousOperand.textContent = currentOperand.textContent;
    currentOperand.textContent = operate(operand, firstNumber, secondNumber);
  }
});
