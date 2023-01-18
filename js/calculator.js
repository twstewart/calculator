import { displayNum } from "./util";

export default class Calculator {
  constructor(primaryOperandEl, secondaryOperandEl, operationEl) {
    this.#primaryOperandEl = primaryOperandEl;
    this.#secondaryOperandEl = secondaryOperandEl;
    this.#operationEl = operationEl;
    this.clear();
  }

  #primaryOperandEl;
  #secondaryOperandEl;
  #operationEl;

  get primaryOperand() {
    return parseFloat(this.#primaryOperandEl.dataset.value);
  }

  set primaryOperand(value) {
    this.#primaryOperandEl.dataset.value = value ?? "";
    this.#primaryOperandEl.textContent = displayNum(value);
  }

  get secondaryOperand() {
    return parseFloat(this.#secondaryOperandEl.dataset.value);
  }

  set secondaryOperand(value) {
    this.#secondaryOperandEl.dataset.value = value ?? "";
    this.#secondaryOperandEl.textContent = displayNum(value);
  }

  get operation() {
    return this.#operationEl.textContent;
  }

  set operation(value) {
    this.#operationEl.textContent = value ?? "";
  }

  clear() {
    this.primaryOperand = 0;
    this.secondaryOperand = null;
    this.operation = null;
  }

  addDigit(digit) {
    if (digit === "." && this.#primaryOperandEl.dataset.value.includes(".")) {
      return;
    }

    if (this.primaryOperand === 0) {
      this.primaryOperand = digit;
      return;
    }

    this.primaryOperand = this.#primaryOperandEl.dataset.value + digit;
  }

  removeDigit() {
    const numStr = this.#primaryOperandEl.dataset.value;

    if (numStr.length <= 1) {
      this.primaryOperand = 0;
      return;
    }

    this.primaryOperand = numStr.substring(0, numStr.length - 1);
  }

  selectOperation(operation) {
    if (this.operation !== "") return;

    this.operation = operation;
    this.secondaryOperand = this.primaryOperand;
    this.primaryOperand = 0;
  }
}
