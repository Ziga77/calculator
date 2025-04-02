console.log('hello')

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.nums');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equals');

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


const btn = buttons.forEach(button => {
  button.addEventListener('click', () => {
    display.textContent += button.textContent;
  });
});

const operator = operators.forEach(operator => {
  operator.addEventListener('click', () => {
    display.textContent += operator.textContent;
  });
});

function clearDisplay() {
  clear.addEventListener('click', () => {
    display.textContent = '';
  });
}

clearDisplay();