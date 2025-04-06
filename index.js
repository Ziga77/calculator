console.log('hello')

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.nums');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equals');

function getNum1() {
  buttons.forEach(button => {
    button.addEventListener('click',() => {
      display.textContent += button.textContent;
    });
  });
}

getNum1();

let num2;

let operator;

function calculate(num1, num2, operator) {
  if (operator = '+') {
    add(num1, num2);
  } else if (operator = '-') {
    subtract(num1, num2);
  } else if (operator = '*') {
    multiply(num1, num2);
  } else if (operator = '/') {
    divide(num1, num2);
  }
}


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



function clearDisplay() {
  clear.addEventListener('click', () => {
    display.textContent = '';
  });
}

clearDisplay();