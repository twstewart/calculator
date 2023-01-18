import { displayNum } from "./util";

export default class Calculator {
  constructor(primaryOperandEl, secondaryOperandEl, operationEl) {
    this.primaryOperandEl = primaryOperandEl;
    this.secondaryOperandEl = secondaryOperandEl;
    this.operationEl = operationEl;
    this.clear();
  }

  get primaryOperand() {
    return parseFloat(this.primaryOperandEl.dataset.value);
  }

  set primaryOperand(value) {
    this.primaryOperandEl.dataset.value = value ?? "";
    this.primaryOperandEl.textContent = displayNum(value);
  }

  set secondaryOperand(value) {
    this.secondaryOperandEl.dataset.value = value ?? "";
    this.secondaryOperandEl.textContent = displayNum(value);
  }

  set operation(value) {
    this.operationEl.textContent = value ?? "";
  }

  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null;
    this.operation = null;
  }

  addDigit(digit) {
    if (digit === "." && this.primaryOperandEl.dataset.value.includes(".")) {
      return;
    }

    if (this.primaryOperand === 0) {
      this.primaryOperand = digit;
      return;
    }

    this.primaryOperand = this.primaryOperandEl.dataset.value + digit;
  }
}
