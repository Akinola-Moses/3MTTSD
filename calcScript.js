const screen = document.getElementById('screen');
const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const clearBtn = document.querySelector('.clear');

let currentValue = '';
let savedValue = '';
let currentOperator = '';
let justEvaluated = false;

keys.forEach(key => {
  key.addEventListener('click', () => {
    if (justEvaluated) {
      currentValue = key.textContent;
      justEvaluated = false;
    } else {
      currentValue += key.textContent;
    }
    screen.textContent = currentValue;
  });
});

operators.forEach(op => {
  op.addEventListener('click', () => {
    if (currentValue === '') return;
    savedValue = currentValue;
    currentOperator = op.textContent;
    currentValue = '';
  });
});
equals.addEventListener('click', () => {
  if (savedValue && currentOperator && currentValue) {
    let result;
    const num1 = parseFloat(savedValue);
    const num2 = parseFloat(currentValue);

    switch (currentOperator) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 !== 0 ? num1 / num2 : 'Error'; break;
    }

    screen.textContent = result;
    currentValue = '';
    savedValue = result;
    justEvaluated = true;
  }
});

clearBtn.addEventListener('click', () => {
  currentValue = '';
  savedValue = '';
  currentOperator = '';
  screen.textContent = '0';
});
