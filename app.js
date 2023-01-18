import Calculator from "./js/calculator";

const primaryOperandEl = document.querySelector("#primary-operand");
const secondaryOperandEl = document.querySelector("#secondary-operand");
const operationEl = document.querySelector("#operation-display");

const calculator = new Calculator(primaryOperandEl, secondaryOperandEl, operationEl);

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

window.addEventListener("click", (e) => {
  if (e.target.matches("#clear")) {
    calculator.clear();
  }

  if (e.target.matches("#delete")) {
    calculator.removeDigit();
  }

  if (e.target.matches("#equals")) {
    calculator.evaluate();
  }

  if (e.target.matches(".number")) {
    calculator.addDigit(e.target.textContent);
  }

  if (e.target.matches(".operation")) {
    calculator.chooseOperation(e.target.textContent);
  }

  if (e.target.matches("#plus-minus")) {
    calculator.signChange();
  }
});
