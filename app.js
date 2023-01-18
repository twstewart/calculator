import Calculator from "./js/calculator";

const primaryOperandEl = document.querySelector("#primary-operand");
const secondaryOperandEl = document.querySelector("#secondary-operand");
const operationEl = document.querySelector("#operation-display");

const calculator = new Calculator(primaryOperandEl, secondaryOperandEl, operationEl);
let lastActionState = "";

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

window.addEventListener("click", (e) => {
  if (e.target.matches("#clear")) {
    calculator.clear();
    setLastAction(actions.clear);
  }

  if (e.target.matches("#delete") || e.target.matches("[name=backspace]")) {
    calculator.removeDigit();
    setLastAction(actions.delete);
  }

  if (e.target.matches("#equals")) {
    calculator.evaluate();
    setLastAction(actions.equals);
  }

  if (e.target.matches(".number")) {
    if (lastActionState === actions.equals) {
      calculator.clear();
    }

    calculator.addDigit(e.target.textContent);
    setLastAction(actions.number);
  }

  if (e.target.matches(".operation")) {
    calculator.selectOperation(e.target.textContent);
    setLastAction(actions.operation);
  }

  if (e.target.matches("#plus-minus")) {
    calculator.signChange();
    setLastAction(actions.plusMinus);
  }
});

function setLastAction(val) {
  lastActionState = val;
}

const actions = {
  clear: "clear",
  number: "number",
  delete: "delete",
  operation: "operation",
  equals: "equals",
  plusMinus: "plusMinus",
};
