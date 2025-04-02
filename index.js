console.log('hello')

const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.nums');
const clear = document.querySelector('.clear');
const operators = document.querySelectorAll('.operators');
const equal = document.querySelector('.equals');

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

function calculateResult() {
  return eval(display.textContent);
}

function result() {
  equal.addEventListener('click', () => {
    display.textContent = calculateResult();
  })
}

result();