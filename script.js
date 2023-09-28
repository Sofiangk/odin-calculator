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
      result = parseFloat(add(n1, n2));
      return result;

    case "-":
      result = parseFloat(subtract(n1, n2));
      return result;

    case "*":
      result = parseFloat(multiply(n1, n2));
      return result;

    case "÷":
      result = parseFloat(divide(n1, n2));
      return result;

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

let calculated = false;

numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (
      (currentOperand.textContent === "" && button.innerText === ".") ||
      (currentOperand.textContent.includes(".") && button.innerText === ".")
    ) {
      return;
    }
    if (calculated) {
      currentOperand.textContent = "";
    }
    currentOperand.textContent += button.textContent;
    calculated = false;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (calculated) {
      currentOperand.textContent = "";
    }
    currentOperand.textContent += button.textContent;
    calculated = false;
  });
});

allClearButton.addEventListener("click", () => {
  currentOperand.textContent = "";
  previousOperand.textContent = "";
});

deleteButton.addEventListener("click", () => {
  if (calculated) {
    return;
  }
  currentOperand.textContent = currentOperand.textContent.slice(0, -1);
});

equalsButton.addEventListener("click", () => {
  let firstNumber = 0;
  let secondNumber = 0;
  let operand = "";
  let result = 0;

  if (currentOperand.textContent.includes("÷")) {
    operand = "÷";
  } else if (currentOperand.textContent.includes("*")) {
    operand = "*";
  } else if (currentOperand.textContent.includes("+")) {
    operand = "+";
  } else if (currentOperand.textContent.includes("-")) {
    operand = "-";
  }

  [firstNumber, secondNumber] = currentOperand.textContent.split(operand);

  if (currentOperand.textContent.startsWith(operand)) {
    result = operate(
      operand,
      Number(previousOperand.textContent),
      Number(secondNumber)
    );
    result = +result.toFixed(7);
    currentOperand.textContent = result;
    previousOperand.textContent = currentOperand.textContent;
  } else {
    result = operate(operand, Number(firstNumber), Number(secondNumber));
    result = +result.toFixed(7);
    currentOperand.textContent = result;
    previousOperand.textContent = currentOperand.textContent;
  }

  console.log(
    firstNumber,
    operand,
    secondNumber,
    previousOperand.textContent,
    currentOperand.textContent,
    result
  );
  calculated = true;
});
