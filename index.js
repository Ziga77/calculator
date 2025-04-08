console.log('hello')

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.nums');
const clearBtn = document.querySelector('.clear');
const operators = document.querySelectorAll('.operators');
const equals = document.querySelector('.equal');

let num1 = '';

let num2 = '';

let operator = '';

let result = null;

function getNum() {
  buttons.forEach(button => {
    button.addEventListener('click',() => {
      if (result !== null) {
        display.textContent = '';
        num1 = '';
        num2 = '';
        operator = '';
        result = null;
      }

      display.textContent += button.textContent;

      if (operator === '') {
        num1 += button.textContent;
      } else {
        num2 += button.textContent;
      }
    });
  });
}

getNum();

function getOperator() {
  operators.forEach(op => {
    op.addEventListener('click', () => {
      if (result !== null) {
        num1 = result;
        num2 = '';
        result = null;
      }

      operator = op.textContent;
      display.textContent = '';
    });
  });
}

getOperator();

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

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === '+') {
    return add(num1, num2);
  } else if (operator === '-') {
    return subtract(num1, num2);
  } else if (operator === '*') {
    return multiply(num1, num2);
  } else if (operator === '/') {
    return divide(num1, num2);
  }
}

function showResult() {
  equals.addEventListener('click', () => {
    if (num1 && num2 && operator) {
      result = calculate(num1, num2, operator);
      display.textContent = result;
      num1 = result;
      num2 = '';
      operator = '';
    }
  });
}

showResult();

function clear() {
  clearBtn.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    operator = '';
    result = null;
  });
}

clear();